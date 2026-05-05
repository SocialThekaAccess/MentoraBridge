// =============================================
// MENTORA BRIDGE — 7 Tests Data
// Har test mein apne questions daalo
// testType = WooCommerce product ka slug
// =============================================

export const TESTS = {

  // ─────────────────────────────────────────
  // TEST 1: Class 7-8
  // ─────────────────────────────────────────
  'class7-8': {
    title: 'Career Aptitude Test',
    subtitle: 'Class 7–8',
    totalQuestions: 40,
    sections: [
      {
        id: 'A',
        title: 'Module A — Interests',
        instruction: 'Rate your interest in each activity (1 = Not at all, 5 = Very much)',
        questions: [
          { id: 1, text: 'Reading books or articles about science and technology', type: 'rating' },
          { id: 2, text: 'Drawing, painting, or creating art', type: 'rating' },
          { id: 3, text: 'Solving math puzzles or riddles', type: 'rating' },
          { id: 4, text: 'Helping classmates understand difficult topics', type: 'rating' },
          { id: 5, text: 'Playing or composing music', type: 'rating' },
          { id: 6, text: 'Taking apart gadgets to see how they work', type: 'rating' },
          { id: 7, text: 'Writing stories, poems, or diary entries', type: 'rating' },
          { id: 8, text: 'Participating in debates or public speaking', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Personality',
        instruction: 'Choose the option that best describes you',
        questions: [
          {
            id: 9,
            text: 'When working on a group project, I usually:',
            type: 'mcq',
            options: {
              A: 'Take the lead and organize everyone',
              B: 'Come up with creative ideas',
              C: 'Do research and gather information',
              D: 'Support and help my teammates',
            },
          },
          {
            id: 10,
            text: 'I prefer activities that involve:',
            type: 'mcq',
            options: {
              A: 'Working with numbers and data',
              B: 'Creating or making things',
              C: 'Meeting and talking to people',
              D: 'Being outdoors or moving around',
            },
          },
          {
            id: 11,
            text: 'When I face a problem, I usually:',
            type: 'mcq',
            options: {
              A: 'Think logically and find a step-by-step solution',
              B: 'Ask others for their opinions',
              C: 'Try different approaches until something works',
              D: 'Look up information and research first',
            },
          },
          {
            id: 12,
            text: 'My friends would describe me as:',
            type: 'mcq',
            options: {
              A: 'A natural leader',
              B: 'Very creative and imaginative',
              C: 'Very organized and careful',
              D: 'Friendly and empathetic',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Skills',
        instruction: 'How good are you at these? (1 = Poor, 5 = Excellent)',
        questions: [
          { id: 13, text: 'Understanding and explaining scientific concepts', type: 'rating' },
          { id: 14, text: 'Creating artistic or visual designs', type: 'rating' },
          { id: 15, text: 'Working with numbers and calculations', type: 'rating' },
          { id: 16, text: 'Writing clearly and expressing ideas in words', type: 'rating' },
          { id: 17, text: 'Understanding and using computer programs', type: 'rating' },
          { id: 18, text: 'Convincing or persuading others', type: 'rating' },
        ],
      },
      {
        id: 'D',
        title: 'Module D — Values',
        instruction: 'How important are these to you in a future career? (1 = Not important, 5 = Very important)',
        questions: [
          { id: 19, text: 'Making a lot of money', type: 'rating' },
          { id: 20, text: 'Helping other people', type: 'rating' },
          { id: 21, text: 'Being creative and expressing yourself', type: 'rating' },
          { id: 22, text: 'Having job security and stability', type: 'rating' },
          { id: 23, text: 'Becoming famous or well-known', type: 'rating' },
          { id: 24, text: 'Making a difference in society', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 2: Class 9-10
  // ─────────────────────────────────────────
  'class9-10': {
    title: 'Career Aptitude Test',
    subtitle: 'Class 9–10',
    totalQuestions: 45,
    sections: [
      {
        id: 'A',
        title: 'Module A — Academic Interests',
        instruction: 'Rate your interest in each subject area (1 = Very low, 5 = Very high)',
        questions: [
          { id: 1, text: 'Physics and how things work in the universe', type: 'rating' },
          { id: 2, text: 'Chemistry and material science', type: 'rating' },
          { id: 3, text: 'Biology and living organisms', type: 'rating' },
          { id: 4, text: 'Mathematics and problem-solving', type: 'rating' },
          { id: 5, text: 'History and social studies', type: 'rating' },
          { id: 6, text: 'Literature and languages', type: 'rating' },
          { id: 7, text: 'Economics and business concepts', type: 'rating' },
          { id: 8, text: 'Computer science and programming', type: 'rating' },
          { id: 9, text: 'Arts, music, or performing arts', type: 'rating' },
          { id: 10, text: 'Physical education and sports science', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Work Style',
        instruction: 'Choose the answer that best suits you',
        questions: [
          {
            id: 11,
            text: 'I prefer to work:',
            type: 'mcq',
            options: {
              A: 'Alone with full focus',
              B: 'In a small team',
              C: 'In a large collaborative group',
              D: 'It depends on the task',
            },
          },
          {
            id: 12,
            text: 'I am most energized when:',
            type: 'mcq',
            options: {
              A: 'I solve a complex technical problem',
              B: 'I create something original',
              C: 'I help someone understand something',
              D: 'I win a competition',
            },
          },
          {
            id: 13,
            text: 'In 10 years, I see myself:',
            type: 'mcq',
            options: {
              A: 'Leading a business or startup',
              B: 'Working in a specialized professional field (doctor, engineer)',
              C: 'In a creative field (designer, writer, artist)',
              D: 'In public service or social work',
            },
          },
          {
            id: 14,
            text: 'I handle pressure by:',
            type: 'mcq',
            options: {
              A: 'Making a plan and following it',
              B: 'Talking to someone I trust',
              C: 'Doing something creative to relax',
              D: 'Pushing harder until it is done',
            },
          },
          {
            id: 15,
            text: 'My biggest strength is:',
            type: 'mcq',
            options: {
              A: 'Analytical thinking',
              B: 'Creativity',
              C: 'Communication',
              D: 'Leadership',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Aptitude',
        instruction: 'Rate your confidence in each skill (1 = Not confident, 5 = Very confident)',
        questions: [
          { id: 16, text: 'Solving logical reasoning problems', type: 'rating' },
          { id: 17, text: 'Understanding complex written texts', type: 'rating' },
          { id: 18, text: 'Performing well in competitive exams', type: 'rating' },
          { id: 19, text: 'Speaking confidently in front of a group', type: 'rating' },
          { id: 20, text: 'Managing your time and deadlines effectively', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 3: Class 11-12 Science
  // ─────────────────────────────────────────
  'class11-12-science': {
    title: 'Career Aptitude Test',
    subtitle: 'Class 11–12 (Science Stream)',
    totalQuestions: 50,
    sections: [
      {
        id: 'A',
        title: 'Module A — Science Interests',
        instruction: 'Rate your interest (1 = Very low, 5 = Very high)',
        questions: [
          { id: 1, text: 'Theoretical physics and mathematics', type: 'rating' },
          { id: 2, text: 'Applied engineering and building things', type: 'rating' },
          { id: 3, text: 'Medicine and human biology', type: 'rating' },
          { id: 4, text: 'Environmental science and ecology', type: 'rating' },
          { id: 5, text: 'Computer science, AI, and data', type: 'rating' },
          { id: 6, text: 'Biotechnology and genetics', type: 'rating' },
          { id: 7, text: 'Architecture and design', type: 'rating' },
          { id: 8, text: 'Research and discovery', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Career Preferences',
        instruction: 'Choose the most accurate answer',
        questions: [
          {
            id: 9,
            text: 'After class 12, I plan to:',
            type: 'mcq',
            options: {
              A: 'Prepare for JEE (Engineering)',
              B: 'Prepare for NEET (Medical)',
              C: 'Pursue pure sciences (BSc)',
              D: 'I am still exploring options',
            },
          },
          {
            id: 10,
            text: 'I am most excited about:',
            type: 'mcq',
            options: {
              A: 'Building technology products',
              B: 'Treating patients and saving lives',
              C: 'Discovering new scientific knowledge',
              D: 'Designing spaces and structures',
            },
          },
          {
            id: 11,
            text: 'My approach to studies is:',
            type: 'mcq',
            options: {
              A: 'Focused on concepts and understanding',
              B: 'Focused on practice and problem-solving',
              C: 'Focused on memorizing facts',
              D: 'A mix of all approaches',
            },
          },
          {
            id: 12,
            text: 'I would thrive in an environment that is:',
            type: 'mcq',
            options: {
              A: 'Highly competitive and exam-focused',
              B: 'Collaborative and project-based',
              C: 'Creative and open-ended',
              D: 'Structured with clear rules and goals',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Strengths',
        instruction: 'How strong are you in these areas? (1 = Weak, 5 = Very strong)',
        questions: [
          { id: 13, text: 'Physics concepts and numerical problems', type: 'rating' },
          { id: 14, text: 'Chemistry (organic, inorganic, physical)', type: 'rating' },
          { id: 15, text: 'Biology and life sciences', type: 'rating' },
          { id: 16, text: 'Mathematics (calculus, algebra, etc.)', type: 'rating' },
          { id: 17, text: 'Computer programming or coding', type: 'rating' },
          { id: 18, text: 'Research and writing skills', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 4: Class 11-12 Commerce
  // ─────────────────────────────────────────
  'class11-12-commerce': {
    title: 'Career Aptitude Test',
    subtitle: 'Class 11–12 (Commerce Stream)',
    totalQuestions: 45,
    sections: [
      {
        id: 'A',
        title: 'Module A — Commerce Interests',
        instruction: 'Rate your interest (1 = Very low, 5 = Very high)',
        questions: [
          { id: 1, text: 'Accounting and financial statements', type: 'rating' },
          { id: 2, text: 'Starting and managing a business', type: 'rating' },
          { id: 3, text: 'Stock markets and investing', type: 'rating' },
          { id: 4, text: 'Marketing and consumer behavior', type: 'rating' },
          { id: 5, text: 'Law and legal systems', type: 'rating' },
          { id: 6, text: 'Banking and finance', type: 'rating' },
          { id: 7, text: 'Economics and economic policy', type: 'rating' },
          { id: 8, text: 'Human resources and management', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Career Preferences',
        instruction: 'Choose the most accurate answer',
        questions: [
          {
            id: 9,
            text: 'After class 12, I plan to pursue:',
            type: 'mcq',
            options: {
              A: 'CA (Chartered Accountancy)',
              B: 'BBA or MBA (Management)',
              C: 'BCom or Economics',
              D: 'I am exploring options',
            },
          },
          {
            id: 10,
            text: 'My ideal career involves:',
            type: 'mcq',
            options: {
              A: 'Managing finances and accounts',
              B: 'Running or growing a business',
              C: 'Analyzing markets and investments',
              D: 'Advising clients on legal or financial matters',
            },
          },
          {
            id: 11,
            text: 'I work best when:',
            type: 'mcq',
            options: {
              A: 'I have clear targets and KPIs',
              B: 'I have freedom to strategize',
              C: 'I am working with data and analysis',
              D: 'I am interacting with clients and people',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Strengths',
        instruction: 'Rate your strength in each area (1 = Weak, 5 = Very strong)',
        questions: [
          { id: 12, text: 'Accountancy and bookkeeping', type: 'rating' },
          { id: 13, text: 'Business studies and management concepts', type: 'rating' },
          { id: 14, text: 'Economics and economic analysis', type: 'rating' },
          { id: 15, text: 'Mathematics and statistics', type: 'rating' },
          { id: 16, text: 'Negotiation and persuasion skills', type: 'rating' },
          { id: 17, text: 'Organization and time management', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 5: Class 11-12 Arts/Humanities
  // ─────────────────────────────────────────
  'class11-12-arts': {
    title: 'Career Aptitude Test',
    subtitle: 'Class 11–12 (Arts & Humanities)',
    totalQuestions: 45,
    sections: [
      {
        id: 'A',
        title: 'Module A — Humanities Interests',
        instruction: 'Rate your interest (1 = Very low, 5 = Very high)',
        questions: [
          { id: 1, text: 'Literature, writing, and storytelling', type: 'rating' },
          { id: 2, text: 'History, culture, and society', type: 'rating' },
          { id: 3, text: 'Psychology and understanding human behavior', type: 'rating' },
          { id: 4, text: 'Political science and governance', type: 'rating' },
          { id: 5, text: 'Philosophy and ethics', type: 'rating' },
          { id: 6, text: 'Visual arts, design, and media', type: 'rating' },
          { id: 7, text: 'Law and justice', type: 'rating' },
          { id: 8, text: 'Teaching and education', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Career Preferences',
        instruction: 'Choose the most accurate answer',
        questions: [
          {
            id: 9,
            text: 'I plan to build a career in:',
            type: 'mcq',
            options: {
              A: 'Media, journalism, or writing',
              B: 'Law and civil services',
              C: 'Education or counseling',
              D: 'Creative arts or design',
            },
          },
          {
            id: 10,
            text: 'I am most drawn to work that involves:',
            type: 'mcq',
            options: {
              A: 'Researching and writing about complex topics',
              B: 'Advocating for people and justice',
              C: 'Mentoring and guiding others',
              D: 'Creating original and impactful work',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Strengths',
        instruction: 'Rate your strength (1 = Weak, 5 = Very strong)',
        questions: [
          { id: 11, text: 'Creative and expressive writing', type: 'rating' },
          { id: 12, text: 'Critical thinking and argumentation', type: 'rating' },
          { id: 13, text: 'Empathy and emotional intelligence', type: 'rating' },
          { id: 14, text: 'Research and analytical skills', type: 'rating' },
          { id: 15, text: 'Public speaking and communication', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 6: Graduate / College Student
  // ─────────────────────────────────────────
  'graduate': {
    title: 'Career Clarity Assessment',
    subtitle: 'Graduate & College Students',
    totalQuestions: 50,
    sections: [
      {
        id: 'A',
        title: 'Module A — Career Direction',
        instruction: 'Rate how much you agree with each statement (1 = Strongly disagree, 5 = Strongly agree)',
        questions: [
          { id: 1, text: 'I have a clear vision of the career I want', type: 'rating' },
          { id: 2, text: 'I am confident in my core professional skills', type: 'rating' },
          { id: 3, text: 'I prefer stability over taking career risks', type: 'rating' },
          { id: 4, text: 'I want to build something of my own someday', type: 'rating' },
          { id: 5, text: 'I enjoy learning new skills regularly', type: 'rating' },
          { id: 6, text: 'A high salary is my top priority right now', type: 'rating' },
          { id: 7, text: 'I find meaning in work that helps others', type: 'rating' },
          { id: 8, text: 'I want to work in a large established organization', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Professional Style',
        instruction: 'Choose the best answer for you',
        questions: [
          {
            id: 9,
            text: 'My ideal next step after graduation is:',
            type: 'mcq',
            options: {
              A: 'Get a job in a reputed company',
              B: 'Pursue higher studies or research',
              C: 'Start my own venture',
              D: 'Explore options through internships',
            },
          },
          {
            id: 10,
            text: 'In a team, I naturally take the role of:',
            type: 'mcq',
            options: {
              A: 'The planner and organizer',
              B: 'The creative idea generator',
              C: 'The executor who gets things done',
              D: 'The mediator who keeps harmony',
            },
          },
          {
            id: 11,
            text: 'I would be most satisfied in a job where:',
            type: 'mcq',
            options: {
              A: 'I solve interesting technical problems',
              B: 'I build products people love',
              C: 'I lead and inspire a team',
              D: 'I make a visible difference in society',
            },
          },
          {
            id: 12,
            text: 'My biggest challenge right now is:',
            type: 'mcq',
            options: {
              A: 'Lack of clarity on what I want',
              B: 'Building the right skills',
              C: 'Finding the right opportunities',
              D: 'Managing pressure and expectations',
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Skills Assessment',
        instruction: 'Rate your proficiency (1 = Beginner, 5 = Expert)',
        questions: [
          { id: 13, text: 'Technical skills in your field of study', type: 'rating' },
          { id: 14, text: 'Communication (written and verbal)', type: 'rating' },
          { id: 15, text: 'Leadership and teamwork', type: 'rating' },
          { id: 16, text: 'Problem-solving and critical thinking', type: 'rating' },
          { id: 17, text: 'Networking and relationship-building', type: 'rating' },
          { id: 18, text: 'Adaptability and learning agility', type: 'rating' },
        ],
      },
    ],
  },

  // ─────────────────────────────────────────
  // TEST 7: Working Professional
  // ─────────────────────────────────────────
  'professional': {
    title: 'Career Transition Assessment',
    subtitle: 'Working Professionals',
    totalQuestions: 50,
    sections: [
      {
        id: 'A',
        title: 'Module A — Current Work Satisfaction',
        instruction: 'Rate your current situation (1 = Very unhappy, 5 = Very happy)',
        questions: [
          { id: 1, text: 'Overall satisfaction with your current job', type: 'rating' },
          { id: 2, text: 'Satisfaction with your salary and benefits', type: 'rating' },
          { id: 3, text: 'Work-life balance in your current role', type: 'rating' },
          { id: 4, text: 'Growth and learning opportunities', type: 'rating' },
          { id: 5, text: 'Relationship with your manager and team', type: 'rating' },
          { id: 6, text: 'Alignment between your values and your company', type: 'rating' },
          { id: 7, text: 'How meaningful your work feels to you', type: 'rating' },
          { id: 8, text: 'Confidence in your long-term career trajectory', type: 'rating' },
        ],
      },
      {
        id: 'B',
        title: 'Module B — Transition Goals',
        instruction: 'Choose the best answer',
        questions: [
          {
            id: 9,
            text: 'My primary reason for exploring career guidance is:',
            type: 'mcq',
            options: {
              A: 'I want a salary increase or promotion',
              B: 'I want to change my field or industry',
              C: 'I want to start my own business',
              D: 'I feel stuck and want clarity',
            },
          },
          {
            id: 10,
            text: 'In my ideal career, the most important factor is:',
            type: 'mcq',
            options: {
              A: 'Financial reward',
              B: 'Work that I am passionate about',
              C: 'Status and recognition',
              D: 'Positive impact on society',
            },
          },
          {
            id: 11,
            text: 'I am willing to invest in my career transition by:',
            type: 'mcq',
            options: {
              A: 'Taking courses and upskilling',
              B: 'Accepting a short-term pay cut',
              C: 'Moving to a new city or country',
              D: 'All of the above',
            },
          },
          {
            id: 12,
            text: 'My biggest fear about changing careers is:',
            type: 'mcq',
            options: {
              A: 'Financial instability',
              B: 'Starting over as a junior again',
              C: "Not knowing what I'm moving towards",
              D: "Disappointing my family's expectations",
            },
          },
        ],
      },
      {
        id: 'C',
        title: 'Module C — Transferable Skills',
        instruction: 'Rate your confidence in these skills (1 = Low, 5 = High)',
        questions: [
          { id: 13, text: 'Leadership and people management', type: 'rating' },
          { id: 14, text: 'Strategic thinking and planning', type: 'rating' },
          { id: 15, text: 'Data analysis and decision-making', type: 'rating' },
          { id: 16, text: 'Sales, negotiation, and influence', type: 'rating' },
          { id: 17, text: 'Creative problem-solving', type: 'rating' },
          { id: 18, text: 'Digital tools and technology', type: 'rating' },
        ],
      },
    ],
  },
}

// Test type se display name
export const TEST_LABELS = {
  'class7-8': 'Class 7–8',
  'class9-10': 'Class 9–10',
  'class11-12-science': 'Class 11–12 Science',
  'class11-12-commerce': 'Class 11–12 Commerce',
  'class11-12-arts': 'Class 11–12 Arts',
  'graduate': 'Graduate Student',
  'professional': 'Working Professional',
}
