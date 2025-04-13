import type { DemoProject, SelectedProject } from './types.ts';
import trivox from '@/images/projects/trivox.png';
import cleangig from '@/images/projects/cleangig.png';
import dukia from '@/images/projects/dukia.png';
import learnille from '@/images/projects/learnille-screens.png';

export const selectedProjects: SelectedProject[] = [
  {
    link: 'https://stellar-conferencing.vercel.app',
    thumb: learnille,
    title: 'Learnille',
    industry: 'EdTech',
    year: 2024,
    description:
      'Built the mobile frontend for Learnille, a gamified LMS connecting students with tutors via chat, video calls, and interactive courses. Developed with React Native, focusing on performance, reusable components, and real-time features like messaging and streaming.',
  },
  {
    link: 'https://dukia.io',
    thumb: dukia,
    title: 'Dukia',
    industry: 'Web3, NFT',
    year: 2024,
    description:
      'I am working on an innovative NFT marketplace website that transforms how digital assets are traded. With a user-friendly interface, it allows easy minting, listing, and discovery of unique NFTs, backed by secure blockchain technology.',
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
    link: 'https://trivox.se',
    thumb: trivox,
    title: 'Trivox',
    industry: 'Automobiles & Sales',
    year: 2022,
    description:
      'An online marketplace for used vehicles with features like' +
      ' payment integration, two factor authentication, automated chat system, advanced tracking system and more.',
  },
];

export const demoProjects: DemoProject[] = [
  {
    link: 'https://typeshii-ruddy.vercel.app/',
    title: 'TypeShii',
    industry: 'React, RxJS, Socket.IO, Framer Motion',
    year: 2025,
    github: 'https://github.com/ore-codes/typeshii',
    storybook: 'https://663b68a4a7a0f8bbc9af2742-nqcquptmdp.chromatic.com',
    description:
      'A fast-paced multiplayer typing racing game built with NestJS, React (Vite), Socket.IO, and Redis, managed in a Turborepo monorepo ',
  },
  {
    link: 'https://jotjive.vercel.app/',
    title: 'JotJive',
    industry: 'Next.js, Sanity',
    year: 2024,
    github: 'https://github.com/ore-codes/jotjive',
    storybook: 'https://663b68a4a7a0f8bbc9af2742-nqcquptmdp.chromatic.com',
    description:
      'My demo blog, built with Next.js and Sanity, showcases efficient server-side rendering and flexible content management. Using Storybook for component documentation and Chromatic for testing ensures a smooth user experience. This project highlights the potential of Next.js and Sanity for dynamic web applications.',
  },
  /* {
    link: 'https://orekeepnotes.vercel.app/',
    title: 'Keep Notes',
    industry: 'Apollo GraphQL, Mongoose, Next.js',
    year: 2024,
    github: 'https://github.com/keep-notes/webapp',
    storybook: 'https://6638c9dc544733791c695a8b-ichckwgoad.chromatic.com/',
    description:
      'A notekeeping app powered by Apollo, Mongoose, and Next.js. With' +
      ' Apollo for data fetching, Mongoose for database management, and Next.js for fast performance, our app offers a seamless experience for organizing and accessing notes',
  },*/
  /*{
    link: 'https://form-ninja.vercel.app',
    title: 'Form Ninja',
    industry: 'Next.js, Supabase',
    year: 2024,
    github: 'https://github.com/ore-codes/form-ninja',
    storybook: 'https://663b6cffe28cc0123aa2f5f5-czhtabnkjq.chromatic.com',
    description:
      'Utilizing Next.js, this form builder app offers seamless' +
      ' integration, supported by comprehensive technical documentation through Storybook and rigorous testing with React Testing Library, ensuring robust functionality and user-friendly customization.',
  },*/
  /*{
          title: 'Lexical Analyser',
          industry: 'TypeScript, Node.js',
          year: 2024,
          github: 'https://github.com/ore-codes/c-lexical-scanner',
          description:
            'Constructed with Node.js, this project serves as a simple lexical' +
            ' analyzer for C-style languages, by processing C source code to' +
            ' count lexemes while seamlessly converting them into token objects for comprehensive analysis.',
        },*/
  {
    link: 'https://ore-adeleye.vercel.app',
    title: 'Portfolio',
    industry: 'Next.js, Framer Motion',
    year: 2023,
    github: 'https://github.com/ore-codes/quodline.github.io',
    description:
      'Constructed using Next.js, my personal website embodies simplicity and engagement through its captivating animations, providing visitors with an immersive and dynamic experience that enhances interaction and enjoyment.',
  },
  {
    link: 'https://get-lnked-contest.vercel.app/',
    title: 'GetLinked AI hackathon',
    industry: 'React, Tailwind',
    year: 2023,
    github: 'https://github.com/ore-codes/get_linked',
    description:
      'I partook in a frontend challenge on Twitter sponsored by getlinked.ai. The challenge involved replicating a Figma design to be pixel perfect and adding a touch of creativity. I also integrated a REST API for user registration.',
  },
  {
    link: 'https://drive.google.com/file/d/1rXQZnSn5oAIXlSi1BoESUv1vezRYTaOz/view?usp=sharing',
    title: 'FinWallet',
    industry: 'Laravel, React, MySQL',
    year: 2022,
    github: 'https://github.com/ore-codes/finwallet',
    description:
      'Finance app with key features like send money, view transaction history, generate statements, and two factor authentication. It is designed with important fintech conventions in mind. Security and accessibility was prioritized in the development of this project.',
  },
  {
    link: 'https://drive.google.com/file/d/1HrmEA1jyrObe1m8Kv2JmMEm-TiMlQrHi/view?usp=sharing',
    title: 'Quod Gist',
    industry: 'Laravel, Vue, Pusher, MySQL',
    year: 2021,
    github: 'https://github.com/ore-codes/quod-gist',
    description:
      'Chat platform with key features like group chats, real time messaging, markdown support, code highlight, avatars and so on. Users can turn on two-factor authentication to protect their accounts.',
  },
  {
    link: 'https://card-maker-zeta.vercel.app/',
    title: 'Card Maker',
    industry: 'Alpine.js, Web Canvas 2D',
    year: 2020,
    github: 'https://github.com/ore-codes/card-maker',
    description:
      'Crafted for the festive season of 2020, this web application boasts a graphical interface powered by Web Canvas and Alpine.js, enabling users to effortlessly design ornate square cards with flair and creativity.',
  },
  {
    link: 'https://php-quiz-ten.vercel.app/',
    title: 'PHP Quiz',
    industry: 'Vue 2',
    year: 2020,
    github: 'https://github.com/ore-codes/php-quiz',
    description:
      'Designed in Vue.js, this straightforward trivia app aims to captivate users with its engaging interface, providing a seamless and enjoyable experience while delivering entertaining PHP 7 quizzes.',
  },
  {
    link: 'https://number-to-words-phi.vercel.app/',
    title: 'Number to Words',
    industry: 'JavaScript',
    year: 2019,
    github: 'https://github.com/ore-codes/number-to-words',
    description:
      'Implemented with JavaScript, this website harnesses the power of a recursive algorithm to meticulously convert numeric values into their textual equivalents, offering users an efficient and precise method for translating numbers into words.',
  },
];
