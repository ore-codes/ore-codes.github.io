import type { DemoProject, SelectedProject } from './types.ts';
import trivox from '@/images/projects/trivox.png';
import cleangig from '@/images/projects/cleangig.png';
import getLinked from '@/images/projects/get_linked.png';

export const selectedProjects: SelectedProject[] = [
  {
    link: 'https://trivox.se',
    thumb: trivox,
    title: 'Trivox',
    industry: 'Automobiles & Sales',
    year: 2022,
    description:
      'An online marketplace for used vehicles with features like' +
      ' payment integration, two factor authentication, automated chat system, advanced tracking system and more.',
  },
  {
    link: 'https://cleangig.se',
    thumb: cleangig,
    title: 'CleanGig',
    industry: 'On-demand services, Logistics',
    year: 2023,
    description:
      'This app features user registration, service listings, booking and scheduling capabilities, secure payments, real-time tracking, reviews and ratings, notifications, customer support, and service provider management, streamlining the process of booking home services.',
  },
  {
    link: 'https://get-lnked-contest.vercel.app/',
    thumb: getLinked,
    title: 'GetLinked AI hackathon',
    industry: 'AI, Creativity',
    year: 2023,
    description:
      'I recently partook in a frontend challenge on Twitter sponsored by getlinked.ai. The challenge involved replicating a Figma design to be pixel perfect and adding a touch of creativity. I also integrated a REST API for user registration.',
  },
];

export const demoProjects: DemoProject[] = [
  {
    link: 'https://orekeepnotes.vercel.app/',
    title: 'Keep Notes',
    industry: 'Apollo GraphQL, Mongoose, Next.js',
    year: 2024,
    github: 'https://github.com/keep-notes/webapp',
    description:
      'A notekeeping app powered by Apollo, Mongoose, and Next.js. With' +
      ' Apollo for data fetching, Mongoose for database management, and Next.js for fast performance, our app offers a seamless experience for organizing and accessing notes',
  },
  {
    link: 'https://form-ninja.vercel.app',
    title: 'Form Ninja',
    industry: 'Next.js, Supabase',
    year: 2024,
    github: 'https://github.com/Quodline/form-ninja',
    description:
      'Utilizing Next.js, this form builder app offers seamless' +
      ' integration, supported by comprehensive technical documentation through Storybook and rigorous testing with React Testing Library, ensuring robust functionality and user-friendly customization.',
  },
  {
    title: 'Lexical Analyser',
    industry: 'TypeScript, Node.js',
    year: 2024,
    github: 'https://github.com/Quodline/c-lexical-scanner',
    description:
      'Constructed with Node.js, this project serves as a simple lexical' +
      ' analyzer for C-style languages, by processing C source code to' +
      ' count lexemes while seamlessly converting them into token objects for comprehensive analysis.',
  },
  {
    link: 'https://quodline.github.io',
    title: 'Portfolio',
    industry: 'Next.js, Framer Motion',
    year: 2023,
    github: 'https://github.com/Quodline/quodline.github.io',
    description:
      'Constructed using Next.js, my personal website embodies simplicity and engagement through its captivating animations, providing visitors with an immersive and dynamic experience that enhances interaction and enjoyment.',
  },
  {
    link: 'https://drive.google.com/file/d/1rXQZnSn5oAIXlSi1BoESUv1vezRYTaOz/view?usp=sharing',
    title: 'FinWallet',
    industry: 'Laravel, React, MySQL',
    year: 2022,
    github: 'https://github.com/Quodline/finwallet',
    description:
      'Finance app with key features like send money, view transaction history, generate statements, and two factor authentication. It is designed with important fintech conventions in mind. Security and accessibility was prioritized in the development of this project.',
  },
  {
    link: 'https://drive.google.com/file/d/1HrmEA1jyrObe1m8Kv2JmMEm-TiMlQrHi/view?usp=sharing',
    title: 'Quod Gist',
    industry: 'Laravel, Vue, Pusher, MySQL',
    year: 2021,
    github: 'https://github.com/Quodline/quod-gist',
    description:
      'Chat platform with key features like group chats, real time messaging, markdown support, code highlight, avatars and so on. Users can turn on two-factor authentication to protect their accounts.',
  },
  {
    link: 'https://card-maker-zeta.vercel.app/',
    title: 'Card Maker',
    industry: 'Alpine.js, Web Canvas 2D',
    year: 2020,
    github: 'https://github.com/Quodline/card-maker',
    description:
      'Crafted for the festive season of 2020, this web application boasts a graphical interface powered by Web Canvas and Alpine.js, enabling users to effortlessly design ornate square cards with flair and creativity.',
  },
  {
    link: 'https://php-quiz-ten.vercel.app/',
    title: 'PHP Quiz',
    industry: 'Vue 2',
    year: 2020,
    github: 'https://github.com/Quodline/php-quiz',
    description:
      'Designed in Vue.js, this straightforward trivia app aims to captivate users with its engaging interface, providing a seamless and enjoyable experience while delivering entertaining PHP 7 quizzes.',
  },
  {
    link: 'https://number-to-words-phi.vercel.app/',
    title: 'Number to Words',
    industry: 'JavaScript',
    year: 2019,
    github: 'https://github.com/Quodline/number-to-words',
    description:
      'Implemented with JavaScript, this website harnesses the power of a recursive algorithm to meticulously convert numeric values into their textual equivalents, offering users an efficient and precise method for translating numbers into words.',
  },
];
