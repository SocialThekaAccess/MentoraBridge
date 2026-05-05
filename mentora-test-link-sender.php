<?php
/**
 * Plugin Name: Mentora Bridge Test Link Sender
 * Description: WooCommerce order complete hone par test link email karta hai + results email karta hai
 * Version: 1.0
 * Author: Mentora Bridge
 */

if (!defined('ABSPATH')) exit;

// =============================================
// 1. ORDER COMPLETE → EMAIL WITH TEST LINK
// =============================================

add_action('woocommerce_order_status_completed', 'mentora_send_test_link', 10, 1);

function mentora_send_test_link($order_id) {
    $order = wc_get_order($order_id);
    if (!$order) return;

    // Product → Test type mapping
    // ⚠️ Apne actual WooCommerce Product IDs yahan daalo
    $product_test_map = [
        101 => 'class7-8',
        102 => 'class9-10',
        103 => 'class11-12-science',
        104 => 'class11-12-commerce',
        105 => 'class11-12-arts',
        106 => 'graduate',
        107 => 'professional',
    ];

    $test_type = null;
    foreach ($order->get_items() as $item) {
        $product_id = $item->get_product_id();
        if (isset($product_test_map[$product_id])) {
            $test_type = $product_test_map[$product_id];
            break;
        }
    }

    if (!$test_type) return; // Non-test product hai

    // Save test type to order
    $order->update_meta_data('_mentora_test_type', $test_type);
    $order->update_meta_data('_mentora_test_used', 'no');
    $order->save();

    // Test link banana
    $token = $order_id; // Order ID hi token hai
    $test_link = 'https://mentorabridge.com/portal/verify?token=' . $token . '&type=' . $test_type;

    // Test type labels
    $test_labels = [
        'class7-8'           => 'Class 7–8 Career Aptitude Test',
        'class9-10'          => 'Class 9–10 Career Aptitude Test',
        'class11-12-science' => 'Class 11–12 Science Career Aptitude Test',
        'class11-12-commerce'=> 'Class 11–12 Commerce Career Aptitude Test',
        'class11-12-arts'    => 'Class 11–12 Arts Career Aptitude Test',
        'graduate'           => 'Graduate Career Clarity Assessment',
        'professional'       => 'Professional Career Transition Assessment',
    ];
    $test_name = $test_labels[$test_type] ?? 'Career Assessment Test';

    $customer_name  = $order->get_billing_first_name() . ' ' . $order->get_billing_last_name();
    $customer_email = $order->get_billing_email();

    // Email subject
    $subject = 'Your Mentora Bridge Test Link — ' . $test_name;

    // Email body
    $message = "
    <html>
    <body style='font-family: Arial, sans-serif; background: #f7f5f0; padding: 2rem;'>
      <div style='max-width: 560px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden; box-shadow: 0 4px 24px rgba(0,0,0,0.08);'>
        
        <div style='background: #1a1a2e; padding: 2rem; text-align: center;'>
          <h1 style='color: #c9a84c; font-family: Georgia, serif; margin: 0; font-size: 1.6rem;'>Mentora Bridge</h1>
          <p style='color: rgba(255,255,255,0.6); margin: 0.5rem 0 0; font-size: 0.9rem;'>Career Guidance Portal</p>
        </div>

        <div style='padding: 2rem;'>
          <p style='font-size: 1rem; color: #333;'>Dear <strong>{$customer_name}</strong>,</p>
          
          <p style='color: #555; line-height: 1.7;'>
            Thank you for your purchase! Your <strong>{$test_name}</strong> is ready.
          </p>

          <div style='background: #f7f5f0; border-radius: 10px; padding: 1.5rem; margin: 1.5rem 0; text-align: center;'>
            <p style='color: #888; font-size: 0.85rem; margin-bottom: 1rem;'>Click the button below to start your test:</p>
            <a href='{$test_link}' 
               style='display: inline-block; background: #1a1a2e; color: #c9a84c; text-decoration: none; 
                      padding: 0.9rem 2.5rem; border-radius: 8px; font-weight: bold; font-size: 1rem;'>
              Start My Test →
            </a>
          </div>

          <div style='border: 1px solid #e2ddd5; border-radius: 10px; padding: 1.25rem; margin: 1.5rem 0;'>
            <p style='color: #888; font-size: 0.82rem; margin: 0 0 0.5rem;'><strong>⚠️ Important:</strong></p>
            <ul style='color: #888; font-size: 0.82rem; padding-left: 1.2rem; margin: 0;'>
              <li>This link is valid for <strong>7 days</strong> from today.</li>
              <li>This link can only be used <strong>once</strong>.</li>
              <li>Do not share this link with anyone.</li>
              <li>Do not close the browser during the test.</li>
            </ul>
          </div>

          <p style='color: #555; font-size: 0.9rem;'>
            If you have any issues, contact us at <a href='mailto:support@mentorabridge.com' style='color: #c9a84c;'>support@mentorabridge.com</a>
          </p>
        </div>

        <div style='background: #f7f5f0; padding: 1.25rem; text-align: center;'>
          <p style='color: #aaa; font-size: 0.78rem; margin: 0;'>© Mentora Bridge | mentorabridge.com</p>
        </div>
      </div>
    </body>
    </html>
    ";

    $headers = ['Content-Type: text/html; charset=UTF-8'];
    wp_mail($customer_email, $subject, $message, $headers);
}


// =============================================
// 2. REST API ENDPOINT — Test results email
// =============================================

add_action('rest_api_init', function () {
    register_rest_route('mentora/v1', '/send-results', [
        'methods'  => 'POST',
        'callback' => 'mentora_send_results_email',
        'permission_callback' => '__return_true',
    ]);
});

function mentora_send_results_email(WP_REST_Request $request) {
    $data           = $request->get_json_params();
    $order_id       = sanitize_text_field($data['orderId'] ?? '');
    $customer_name  = sanitize_text_field($data['customerName'] ?? '');
    $customer_email = sanitize_email($data['customerEmail'] ?? '');
    $admin_email    = sanitize_email($data['adminEmail'] ?? get_option('admin_email'));
    $test_type      = sanitize_text_field($data['testType'] ?? '');
    $answers        = sanitize_textarea_field($data['answers'] ?? '');
    $submitted_at   = sanitize_text_field($data['submittedAt'] ?? '');

    $headers = ['Content-Type: text/html; charset=UTF-8'];

    // Admin ko email
    $admin_subject = "New Test Submission — Order #{$order_id} ({$test_type})";
    $admin_msg = "
    <html><body style='font-family: Arial, sans-serif; padding: 1.5rem;'>
      <h2 style='color: #1a1a2e;'>New Test Submission</h2>
      <p><strong>Student:</strong> {$customer_name} ({$customer_email})</p>
      <p><strong>Order ID:</strong> #{$order_id}</p>
      <p><strong>Test Type:</strong> {$test_type}</p>
      <p><strong>Submitted At:</strong> {$submitted_at}</p>
      <hr/>
      <h3>Responses:</h3>
      <pre style='background: #f5f5f5; padding: 1rem; border-radius: 8px; white-space: pre-wrap; font-size: 0.9rem;'>{$answers}</pre>
    </body></html>
    ";
    wp_mail($admin_email, $admin_subject, $admin_msg, $headers);

    // Student ko confirmation
    $student_subject = 'Thank you — Your test has been submitted!';
    $student_msg = "
    <html><body style='font-family: Arial, sans-serif; background: #f7f5f0; padding: 2rem;'>
      <div style='max-width: 540px; margin: 0 auto; background: white; border-radius: 12px; overflow: hidden;'>
        <div style='background: #1a1a2e; padding: 1.75rem; text-align: center;'>
          <h1 style='color: #c9a84c; font-family: Georgia, serif; margin: 0;'>Mentora Bridge</h1>
        </div>
        <div style='padding: 2rem;'>
          <p>Dear <strong>{$customer_name}</strong>,</p>
          <p style='color: #555; line-height: 1.7;'>
            Your test has been successfully submitted! Our career counselors will review your responses and prepare your personalized career guidance report.
          </p>
          <p style='color: #555; line-height: 1.7;'>
            You will be hearing from us within <strong>3–5 business days</strong>.
          </p>
          <p style='color: #555; font-size: 0.9rem;'>
            For any queries: <a href='mailto:support@mentorabridge.com' style='color: #c9a84c;'>support@mentorabridge.com</a>
          </p>
        </div>
      </div>
    </body></html>
    ";
    wp_mail($customer_email, $student_subject, $student_msg, $headers);

    return new WP_REST_Response(['success' => true], 200);
}
