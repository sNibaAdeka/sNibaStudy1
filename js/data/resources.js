/* ═══════════════════════════════════════════
   sNibaStudy — External Resources Data
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.RESOURCES = [
  {
    category: 'ielts',
    categoryLabel: 'IELTS & English',
    categoryIcon: 'fa-language',
    categoryColor: '--purple',
    resources: [
      {
        id: 'r-ielts-gg',
        name: 'IELTS.gg',
        type: 'Practice Platform',
        icon: '🎯',
        iconBg: '#a78bfa20',
        description: 'Free IELTS practice tests with instant scoring, band score calculator, and section-by-section preparation guides.',
        url: 'https://ielts.gg',
        tags: ['IELTS', 'Practice', 'Free'],
        featured: true
      },
      {
        id: 'r-bbc-english',
        name: 'BBC Learning English',
        type: 'Learning Platform',
        icon: '📻',
        iconBg: '#a78bfa20',
        description: 'Free English learning from the BBC — vocabulary, grammar, news-based lessons, and daily audio exercises.',
        url: 'https://www.bbc.co.uk/learningenglish',
        tags: ['Grammar', 'Vocabulary', 'Free']
      },
      {
        id: 'r-cambridge',
        name: 'Cambridge English',
        type: 'Official Resources',
        icon: '🎓',
        iconBg: '#a78bfa20',
        description: 'Official Cambridge materials for IELTS and other English qualifications, including free sample tests.',
        url: 'https://www.cambridgeenglish.org',
        tags: ['Official', 'IELTS', 'Exams']
      },
      {
        id: 'r-british-council',
        name: 'British Council',
        type: 'Learning Platform',
        icon: '🌐',
        iconBg: '#a78bfa20',
        description: 'Grammar exercises, IELTS tips, writing practice and speaking resources from the British Council.',
        url: 'https://learnenglish.britishcouncil.org',
        tags: ['Grammar', 'Speaking', 'Free']
      },
      {
        id: 'r-grammarly',
        name: 'Grammarly',
        type: 'Writing Tool',
        icon: '✍️',
        iconBg: '#a78bfa20',
        description: 'AI-powered writing assistant that checks grammar, spelling, style, and clarity. Great for essays and formal writing.',
        url: 'https://www.grammarly.com',
        tags: ['Writing', 'Grammar', 'AI']
      },
      {
        id: 'r-deepl',
        name: 'DeepL Translator',
        type: 'Translation Tool',
        icon: '🔠',
        iconBg: '#a78bfa20',
        description: 'The most accurate translator available. Supports EN/RU/KZ and many other languages. Better than Google Translate.',
        url: 'https://www.deepl.com',
        tags: ['Translation', 'Free', 'Language']
      }
    ]
  },
  {
    category: 'it',
    categoryLabel: 'IT & Programming',
    categoryIcon: 'fa-code',
    categoryColor: '--accent',
    resources: [
      {
        id: 'r-github',
        name: 'GitHub',
        type: 'Development Platform',
        icon: '🐙',
        iconBg: '#00d4aa20',
        description: 'The world\'s leading platform for hosting and collaborating on code. Build a portfolio and contribute to open source.',
        url: 'https://github.com',
        tags: ['Git', 'Collaboration', 'Open Source'],
        featured: true
      },
      {
        id: 'r-freecodecamp',
        name: 'freeCodeCamp',
        type: 'Learning Platform',
        icon: '🔥',
        iconBg: '#00d4aa20',
        description: 'Free, comprehensive web development curriculum with certificates in HTML, CSS, JavaScript, Python, and more.',
        url: 'https://www.freecodecamp.org',
        tags: ['Free', 'Web Dev', 'Certificate']
      },
      {
        id: 'r-mdn',
        name: 'MDN Web Docs',
        type: 'Reference',
        icon: '📖',
        iconBg: '#00d4aa20',
        description: 'The definitive reference for HTML, CSS, and JavaScript by Mozilla. Best documentation for web development.',
        url: 'https://developer.mozilla.org',
        tags: ['Reference', 'HTML', 'JavaScript']
      },
      {
        id: 'r-cs50',
        name: 'Harvard CS50',
        type: 'Online Course',
        icon: '🏛️',
        iconBg: '#00d4aa20',
        description: 'Harvard\'s iconic Intro to CS course — free on edX. Covers C, Python, SQL, and web development.',
        url: 'https://cs50.harvard.edu',
        tags: ['Computer Science', 'Free', 'Beginner']
      },
      {
        id: 'r-leetcode',
        name: 'LeetCode',
        type: 'Coding Practice',
        icon: '💻',
        iconBg: '#00d4aa20',
        description: 'Practice coding problems for technical interviews. 3000+ problems in algorithms and data structures.',
        url: 'https://leetcode.com',
        tags: ['Algorithms', 'Interviews', 'Practice']
      },
      {
        id: 'r-python-docs',
        name: 'Python Docs',
        type: 'Official Reference',
        icon: '🐍',
        iconBg: '#00d4aa20',
        description: 'Official Python documentation and tutorial. Start here if you\'re learning Python from scratch.',
        url: 'https://docs.python.org/3/tutorial/',
        tags: ['Python', 'Official', 'Tutorial']
      }
    ]
  },
  {
    category: 'kz-edu',
    categoryLabel: 'NIS / Kazakhstan Education',
    categoryIcon: 'fa-star-and-crescent',
    categoryColor: '--yellow',
    resources: [
      {
        id: 'r-beyim',
        name: 'Beyim.ai',
        type: 'AI Learning Platform',
        icon: '🇰🇿',
        iconBg: '#fbbf2420',
        description: 'AI-powered personalized learning for Kazakhstani students — adaptive exercises aligned to NIS curriculum.',
        url: 'https://beyim.ai',
        tags: ['Kazakhstan', 'AI', 'Personalized'],
        featured: true
      },
      {
        id: 'r-nis-portal',
        name: 'NIS Student Portal',
        type: 'School Platform',
        icon: '🏫',
        iconBg: '#fbbf2420',
        description: 'Official Nazarbayev Intellectual Schools portal — assignments, schedules, digital library, and resources.',
        url: 'https://nis.edu.kz',
        tags: ['NIS', 'Official', 'School']
      },
      {
        id: 'r-bilimland',
        name: 'Bilim Land',
        type: 'Education Platform',
        icon: '🏆',
        iconBg: '#fbbf2420',
        description: 'Kazakhstan\'s leading digital education platform with video lessons aligned to the national curriculum.',
        url: 'https://bilimland.kz',
        tags: ['Kazakhstan', 'Curriculum', 'Videos']
      },
      {
        id: 'r-testkz',
        name: 'UBT Practice Tests',
        type: 'Exam Preparation',
        icon: '📝',
        iconBg: '#fbbf2420',
        description: 'Practice tests and resources for the Unified National Testing (ЕНТ) — complete past papers and answer keys.',
        url: 'https://ubt.kz',
        tags: ['ЕНТ', 'Exam Prep', 'Kazakhstan']
      },
      {
        id: 'r-zerde',
        name: 'e-Учебник (Zerde)',
        type: 'Digital Textbooks',
        icon: '📚',
        iconBg: '#fbbf2420',
        description: 'Official Kazakhstani digital textbooks portal — all grade levels and subjects in electronic format.',
        url: 'https://e-library.kz',
        tags: ['Textbooks', 'Kazakhstan', 'Free']
      },
      {
        id: 'r-olimp',
        name: 'Олимпиады Казахстана',
        type: 'Olympiad Resources',
        icon: '🥇',
        iconBg: '#fbbf2420',
        description: 'Information about academic olympiads, past competition problems, and registration for Kazakhstani olympiads.',
        url: 'https://nis.edu.kz/ru/olympiads',
        tags: ['Olympiad', 'Competition', 'NIS']
      }
    ]
  },
  {
    category: 'stem',
    categoryLabel: 'STEM & Science',
    categoryIcon: 'fa-flask-vial',
    categoryColor: '--green',
    resources: [
      {
        id: 'r-phet',
        name: 'PhET Simulations',
        type: 'Interactive Simulations',
        icon: '🔬',
        iconBg: '#4ade8020',
        description: 'Free science simulations from University of Colorado. Physics, chemistry, biology, math — all interactive and visual.',
        url: 'https://phet.colorado.edu',
        tags: ['Physics', 'Chemistry', 'Interactive', 'Free'],
        featured: true
      },
      {
        id: 'r-ptable',
        name: 'PTable',
        type: 'Reference Tool',
        icon: '⚗️',
        iconBg: '#4ade8020',
        description: 'The most interactive periodic table online. Click any element for detailed properties, electron configuration, and history.',
        url: 'https://ptable.com',
        tags: ['Chemistry', 'Periodic Table', 'Free']
      },
      {
        id: 'r-geogebra',
        name: 'GeoGebra',
        type: 'Math & Science Tool',
        icon: '📐',
        iconBg: '#4ade8020',
        description: 'Free math tools for graphing, geometry, 3D, and calculus. Used in classrooms worldwide.',
        url: 'https://www.geogebra.org',
        tags: ['Math', 'Geometry', 'Free', 'Interactive']
      },
      {
        id: 'r-hyperphysics',
        name: 'HyperPhysics',
        type: 'Reference',
        icon: '⚛️',
        iconBg: '#4ade8020',
        description: 'Comprehensive physics reference from Georgia State University. Covers mechanics, thermodynamics, waves, and modern physics.',
        url: 'http://hyperphysics.phy-astr.gsu.edu',
        tags: ['Physics', 'Reference', 'Comprehensive']
      },
      {
        id: 'r-biology-online',
        name: 'Biology Online',
        type: 'Reference',
        icon: '🧬',
        iconBg: '#4ade8020',
        description: 'Online biology dictionary and tutorials. Covers cell biology, genetics, ecology, and human anatomy.',
        url: 'https://www.biology-online.org',
        tags: ['Biology', 'Reference', 'Dictionary']
      }
    ]
  },
  {
    category: 'general',
    categoryLabel: 'General Learning',
    categoryIcon: 'fa-book',
    categoryColor: '--blue',
    resources: [
      {
        id: 'r-khan',
        name: 'Khan Academy',
        type: 'Learning Platform',
        icon: '🌿',
        iconBg: '#60a5fa20',
        description: 'Free world-class education for anyone, anywhere. Math, science, computing, and humanities — completely free.',
        url: 'https://www.khanacademy.org',
        tags: ['Free', 'Math', 'Science', 'All subjects'],
        featured: true
      },
      {
        id: 'r-coursera',
        name: 'Coursera',
        type: 'Online Courses',
        icon: '🎓',
        iconBg: '#60a5fa20',
        description: 'University-level courses from MIT, Stanford, and 200+ top institutions. Audit for free or get certificates.',
        url: 'https://www.coursera.org',
        tags: ['University', 'Certificate', 'Professional']
      },
      {
        id: 'r-3blue1brown',
        name: '3Blue1Brown',
        type: 'YouTube Channel',
        icon: '🔵',
        iconBg: '#60a5fa20',
        description: 'Beautiful animated math videos. Makes calculus, linear algebra, and neural networks truly intuitive.',
        url: 'https://www.youtube.com/@3blue1brown',
        tags: ['Math', 'YouTube', 'Visual']
      },
      {
        id: 'r-wolframalpha',
        name: 'Wolfram Alpha',
        type: 'Computational Tool',
        icon: '🧮',
        iconBg: '#60a5fa20',
        description: 'Solve any equation, get step-by-step solutions, explore data. Indispensable for math and science.',
        url: 'https://www.wolframalpha.com',
        tags: ['Math', 'Solver', 'Science']
      },
      {
        id: 'r-desmos',
        name: 'Desmos Graphing',
        type: 'Math Tool',
        icon: '📈',
        iconBg: '#60a5fa20',
        description: 'Free online graphing calculator. Plot functions, explore transformations, and visualize math concepts instantly.',
        url: 'https://www.desmos.com/calculator',
        tags: ['Graphing', 'Math', 'Free']
      },
      {
        id: 'r-anki',
        name: 'Anki Flashcards',
        type: 'Study Tool',
        icon: '🃏',
        iconBg: '#60a5fa20',
        description: 'The #1 spaced repetition flashcard app. Used by medical students worldwide. Free on desktop.',
        url: 'https://apps.ankiweb.net',
        tags: ['Flashcards', 'Spaced Repetition', 'Free']
      },
      {
        id: 'r-notion',
        name: 'Notion',
        type: 'Productivity',
        icon: '📋',
        iconBg: '#60a5fa20',
        description: 'All-in-one note-taking and organization tool. Perfect for student notes, project management, and study plans.',
        url: 'https://www.notion.so',
        tags: ['Notes', 'Organization', 'Free']
      },
      {
        id: 'r-scholar',
        name: 'Google Scholar',
        type: 'Research Tool',
        icon: '🔍',
        iconBg: '#60a5fa20',
        description: 'Search academic papers, citations, and research across all disciplines. Great for essays and projects.',
        url: 'https://scholar.google.com',
        tags: ['Research', 'Academic', 'Papers']
      }
    ]
  }
];
