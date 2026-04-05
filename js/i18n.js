/* ═══════════════════════════════════════════
   sNibaStudy — Internationalization (EN/RU)
   ═══════════════════════════════════════════ */

window.SNS = window.SNS || {};

SNS.i18n = (function () {

  const STORAGE_KEY = 'sniba_lang';

  const translations = {
    en: {
      // Nav
      'nav.features': 'Features',
      'nav.howItWorks': 'How It Works',
      'nav.resources': 'Resources',
      'nav.login': 'Log In',
      'nav.signup': 'Sign Up Free',

      // Hero
      'hero.badge': 'AI-Powered Learning Platform',
      'hero.title1': 'Study Smarter,',
      'hero.title2': 'Not Harder',
      'hero.desc': 'The all-in-one study platform for NIS students. AI explanations, quizzes, flashcards, progress tracking, and study rooms with friends — all in one place.',
      'hero.cta': 'Get Started Free',
      'hero.secondary': 'See How It Works',
      'hero.stat1v': '50+',
      'hero.stat1l': 'Topics',
      'hero.stat2v': '5',
      'hero.stat2l': 'Subjects',
      'hero.stat3v': '100%',
      'hero.stat3l': 'Free',

      // Features
      'feat.badge': 'Features',
      'feat.title': 'Everything You Need to Succeed',
      'feat.desc': 'From AI-powered explanations to real-time study rooms — we\'ve got you covered.',
      'feat.ai.title': 'AI Study System',
      'feat.ai.desc': 'Enter any topic and get instant explanations, quizzes, and flashcards. Use "Explain like I\'m 5" for simpler breakdowns.',
      'feat.nis.title': 'NIS Curriculum',
      'feat.nis.desc': 'Full coverage of Math, Physics, Biology, Chemistry, and English — structured by topics with lessons, tests, and flashcards.',
      'feat.social.title': 'Study with Friends',
      'feat.social.desc': 'Add friends, compete on leaderboards, and join live study rooms with shared Pomodoro timers.',
      'feat.progress.title': 'Progress Tracking',
      'feat.progress.desc': 'Track your study time, quiz scores, and weak areas. Visualize your improvement with detailed analytics.',
      'feat.flash.title': 'Smart Flashcards',
      'feat.flash.desc': 'Auto-generated flashcards for every topic. Mark cards as known or difficult and focus your review.',
      'feat.resources.title': 'Resource Hub',
      'feat.resources.desc': 'Curated links to IELTS prep, Khan Academy, freeCodeCamp, and more — organized by category.',

      // How it works
      'how.badge': 'How It Works',
      'how.title': 'Start Learning in 3 Steps',
      'how.s1.title': 'Create Account',
      'how.s1.desc': 'Sign up with your email in seconds. Fill in your profile with grade, school, and subjects.',
      'how.s2.title': 'Pick a Topic',
      'how.s2.desc': 'Browse NIS subjects or type any topic. Get instant AI explanations, quizzes, and flashcards.',
      'how.s3.title': 'Learn & Compete',
      'how.s3.desc': 'Track your progress, earn XP, climb leaderboards, and study with friends in real time.',

      // Resources
      'res.badge': 'Resources',
      'res.title': 'Access Top Learning Platforms',
      'res.desc': 'We\'ve curated the best free resources for NIS students — all in one place.',

      // CTA
      'cta.title': 'Ready to Study Smarter?',
      'cta.desc': 'Join sNibaStudy today — it\'s completely free. No credit card required.',
      'cta.btn': 'Create Free Account',

      // Footer
      'footer.tagline': 'AI-powered social learning platform for NIS students.',
      'footer.platform': 'Platform',
      'footer.subjects': 'Subjects',
      'footer.copy': '© 2024 sNibaStudy. Built for NIS students.',

      // Auth
      'auth.welcome': 'Welcome Back',
      'auth.loginSub': 'Log in to continue studying',
      'auth.createAcc': 'Create Account',
      'auth.signupSub': 'Start your learning journey',
      'auth.tabLogin': 'Log In',
      'auth.tabRegister': 'Sign Up',
      'auth.email': 'Email',
      'auth.password': 'Password',
      'auth.loginBtn': 'Log In',
      'auth.forgot': 'Forgot password?',
      'auth.resetPw': 'Reset Password',
      'auth.sendReset': 'Send Reset Link',
      'auth.backLogin': 'Back to Login',
      'auth.verifyTitle': 'Verify Email',
      'auth.resend': 'Resend Verification Email',
      'auth.verifiedBtn': "I've verified my email",
      'auth.createBtn': 'Create Account',

      // Registration
      'reg.title': 'Create Your Account',
      'reg.subtitle': 'Tell us about yourself to personalize your learning',
      'reg.step1': 'Account',
      'reg.step2': 'Personal',
      'reg.step3': 'Education',
      'reg.fullName': 'Full Name',
      'reg.namePh': 'Your full name',
      'reg.emailPh': 'your@email.com',
      'reg.passwordPh': 'Min 6 characters',
      'reg.next': 'Next',
      'reg.back': 'Back',
      'reg.dob': 'Date of Birth',
      'reg.city': 'City',
      'reg.cityPh': 'e.g. Almaty, Astana...',
      'reg.phone': 'Phone (optional)',
      'reg.phonePh': '+7 777 123 4567',
      'reg.bio': 'About Me (optional)',
      'reg.bioPh': 'A few words about yourself...',
      'reg.grade': 'Grade / Class',
      'reg.school': 'School',
      'reg.schoolPh': 'e.g. NIS Almaty',
      'reg.profileSubjects': 'Profile Subjects (NIS direction)',
      'reg.direction': 'Study Direction',
      'reg.directionPh': 'Select direction',
      'reg.dirPhysMath': 'Physics-Math',
      'reg.dirChemBio': 'Chemistry-Biology',
      'reg.dirGeneral': 'General',
      'reg.goals': 'Learning Goals',
      'reg.goalIELTS': 'Prepare for IELTS',
      'reg.goalOlymp': 'Win Olympiads',
      'reg.goalENT': 'Prepare for ENT/UNT',
      'reg.goalGrades': 'Improve grades',
      'reg.goalProg': 'Learn programming',
      'reg.goalFun': 'Study for fun',
      'reg.submit': 'Create Account & Start Learning',

      // App sidebar
      'side.main': 'Main',
      'side.dashboard': 'Dashboard',
      'side.study': 'Study System',
      'side.flashcards': 'Flashcards',
      'side.tests': 'Tests',
      'side.nis': 'NIS Program',
      'side.resources': 'Resources Hub',
      'side.social': 'Social',
      'side.friends': 'Friends',
      'side.rooms': 'Study Rooms',
      'side.personal': 'Personal',
      'side.tools': 'Study Tools',
      'side.progress': 'My Progress',
      'side.saved': 'Saved',
      'side.profile': 'Profile',

      // Theme
      'theme.dark': 'Dark',
      'theme.light': 'Light',
    },

    ru: {
      // Nav
      'nav.features': 'Возможности',
      'nav.howItWorks': 'Как работает',
      'nav.resources': 'Ресурсы',
      'nav.login': 'Войти',
      'nav.signup': 'Регистрация',

      // Hero
      'hero.badge': 'AI-платформа для обучения',
      'hero.title1': 'Учись умнее,',
      'hero.title2': 'а не больше',
      'hero.desc': 'Универсальная платформа для учеников НИШ. AI-объяснения, тесты, карточки, трекинг прогресса и совместные комнаты — всё в одном месте.',
      'hero.cta': 'Начать бесплатно',
      'hero.secondary': 'Как это работает',
      'hero.stat1v': '50+',
      'hero.stat1l': 'Тем',
      'hero.stat2v': '5',
      'hero.stat2l': 'Предметов',
      'hero.stat3v': '100%',
      'hero.stat3l': 'Бесплатно',

      // Features
      'feat.badge': 'Возможности',
      'feat.title': 'Всё для успешной учёбы',
      'feat.desc': 'От AI-объяснений до комнат для совместной учёбы — мы продумали всё.',
      'feat.ai.title': 'AI Система обучения',
      'feat.ai.desc': 'Введи любую тему и получи объяснение, тест и карточки. Кнопка "Объясни как для 5-летнего" упростит материал.',
      'feat.nis.title': 'Программа НИШ',
      'feat.nis.desc': 'Полное покрытие математики, физики, биологии, химии и английского — по темам с уроками, тестами и карточками.',
      'feat.social.title': 'Учись с друзьями',
      'feat.social.desc': 'Добавляй друзей, соревнуйся в рейтинге и присоединяйся к комнатам с общим таймером Помодоро.',
      'feat.progress.title': 'Отслеживание прогресса',
      'feat.progress.desc': 'Следи за временем учёбы, результатами тестов и слабыми местами. Визуализация прогресса с аналитикой.',
      'feat.flash.title': 'Умные карточки',
      'feat.flash.desc': 'Автоматические карточки для каждой темы. Отмечай выученные и сложные — фокусируйся на нужном.',
      'feat.resources.title': 'Хаб ресурсов',
      'feat.resources.desc': 'Лучшие бесплатные ресурсы: IELTS подготовка, Khan Academy, freeCodeCamp и другие — всё по категориям.',

      // How it works
      'how.badge': 'Как работает',
      'how.title': 'Начни за 3 шага',
      'how.s1.title': 'Создай аккаунт',
      'how.s1.desc': 'Зарегистрируйся по email. Заполни профиль: класс, школу и профильные предметы.',
      'how.s2.title': 'Выбери тему',
      'how.s2.desc': 'Просматривай предметы НИШ или введи любую тему. Получи AI-объяснение, тест и карточки.',
      'how.s3.title': 'Учись и соревнуйся',
      'how.s3.desc': 'Отслеживай прогресс, зарабатывай XP, поднимайся в рейтинге и учись с друзьями.',

      // Resources
      'res.badge': 'Ресурсы',
      'res.title': 'Доступ к лучшим платформам',
      'res.desc': 'Мы собрали лучшие бесплатные ресурсы для учеников НИШ.',

      // CTA
      'cta.title': 'Готов учиться эффективнее?',
      'cta.desc': 'Присоединяйся к sNibaStudy — полностью бесплатно. Без привязки карты.',
      'cta.btn': 'Создать аккаунт бесплатно',

      // Footer
      'footer.tagline': 'AI-платформа для обучения учеников НИШ.',
      'footer.platform': 'Платформа',
      'footer.subjects': 'Предметы',
      'footer.copy': '© 2024 sNibaStudy. Создано для учеников НИШ.',

      // Auth
      'auth.welcome': 'С возвращением',
      'auth.loginSub': 'Войди, чтобы продолжить',
      'auth.createAcc': 'Создать аккаунт',
      'auth.signupSub': 'Начни свой путь в обучении',
      'auth.tabLogin': 'Войти',
      'auth.tabRegister': 'Регистрация',
      'auth.email': 'Email',
      'auth.password': 'Пароль',
      'auth.loginBtn': 'Войти',
      'auth.forgot': 'Забыл пароль?',
      'auth.resetPw': 'Сброс пароля',
      'auth.sendReset': 'Отправить ссылку',
      'auth.backLogin': 'Назад к входу',
      'auth.verifyTitle': 'Подтверди email',
      'auth.resend': 'Отправить повторно',
      'auth.verifiedBtn': 'Я подтвердил email',
      'auth.createBtn': 'Создать аккаунт',

      // Registration
      'reg.title': 'Создай аккаунт',
      'reg.subtitle': 'Расскажи о себе для персонализации обучения',
      'reg.step1': 'Аккаунт',
      'reg.step2': 'Личное',
      'reg.step3': 'Учёба',
      'reg.fullName': 'Полное имя',
      'reg.namePh': 'Твоё полное имя',
      'reg.emailPh': 'твой@email.com',
      'reg.passwordPh': 'Минимум 6 символов',
      'reg.next': 'Далее',
      'reg.back': 'Назад',
      'reg.dob': 'Дата рождения',
      'reg.city': 'Город',
      'reg.cityPh': 'напр. Алматы, Астана...',
      'reg.phone': 'Телефон (необязательно)',
      'reg.phonePh': '+7 777 123 4567',
      'reg.bio': 'О себе (необязательно)',
      'reg.bioPh': 'Пару слов о себе...',
      'reg.grade': 'Класс',
      'reg.school': 'Школа',
      'reg.schoolPh': 'напр. НИШ Алматы',
      'reg.profileSubjects': 'Профильные предметы (направление НИШ)',
      'reg.direction': 'Направление',
      'reg.directionPh': 'Выбери направление',
      'reg.dirPhysMath': 'Физико-математическое',
      'reg.dirChemBio': 'Химико-биологическое',
      'reg.dirGeneral': 'Общее',
      'reg.goals': 'Цели обучения',
      'reg.goalIELTS': 'Подготовка к IELTS',
      'reg.goalOlymp': 'Победа на олимпиадах',
      'reg.goalENT': 'Подготовка к ЕНТ',
      'reg.goalGrades': 'Улучшить оценки',
      'reg.goalProg': 'Изучить программирование',
      'reg.goalFun': 'Учиться для удовольствия',
      'reg.submit': 'Создать аккаунт и начать',

      // App sidebar
      'side.main': 'Главное',
      'side.dashboard': 'Дашборд',
      'side.study': 'Учёба',
      'side.flashcards': 'Карточки',
      'side.tests': 'Тесты',
      'side.nis': 'Программа НИШ',
      'side.resources': 'Ресурсы',
      'side.social': 'Социальное',
      'side.friends': 'Друзья',
      'side.rooms': 'Комнаты',
      'side.personal': 'Личное',
      'side.tools': 'Инструменты',
      'side.progress': 'Мой прогресс',
      'side.saved': 'Сохранённое',
      'side.profile': 'Профиль',

      // Theme
      'theme.dark': 'Тёмная',
      'theme.light': 'Светлая',
    }
  };

  let currentLang = localStorage.getItem(STORAGE_KEY) || 'ru';

  function t(key) {
    return (translations[currentLang] && translations[currentLang][key])
      || (translations['en'] && translations['en'][key])
      || key;
  }

  function getLang() { return currentLang; }

  function setLang(lang) {
    if (!translations[lang]) return;
    currentLang = lang;
    localStorage.setItem(STORAGE_KEY, lang);
    applyToPage();
  }

  function toggle() {
    setLang(currentLang === 'en' ? 'ru' : 'en');
  }

  function applyToPage() {
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      const val = t(key);
      if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
        el.placeholder = val;
      } else if (el.tagName === 'OPTION') {
        el.textContent = val;
      } else {
        el.textContent = val;
      }
    });
    document.querySelectorAll('[data-i18n-ph]').forEach(el => {
      el.placeholder = t(el.getAttribute('data-i18n-ph'));
    });
    document.querySelectorAll('[data-i18n-html]').forEach(el => {
      el.innerHTML = t(el.getAttribute('data-i18n-html'));
    });

    // Update lang toggle button text
    document.querySelectorAll('.lang-toggle-label').forEach(el => {
      el.textContent = currentLang === 'en' ? 'RU' : 'EN';
    });

    document.documentElement.lang = currentLang;
  }

  return { t, getLang, setLang, toggle, applyToPage };

})();
