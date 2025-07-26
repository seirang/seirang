import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '박세랑 포트폴리오',
  tagline: '웹 개발과 모바일 앱 개발에 열정을 가진 컴퓨터학부 학생',
  favicon: 'img/favicon.svg',

  // Set the production url of your site here
  url: 'https://seirang.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'seirang', // Usually your GitHub org/user name.
  projectName: 'seirang-portfolio', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'ko',
    locales: ['ko'],
  },

  presets: [
    [
      'classic',
      {
        docs: {
          routeBasePath: 'stack',
          path: 'stack',
          sidebarPath: './sidebars.ts',
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seirang/seirang-portfolio/tree/main/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
          editUrl:
            'https://github.com/seirang/seirang-portfolio/tree/main/',
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    image: 'img/favicon.svg',
    navbar: {
      title: '박세랑 포트폴리오',
      logo: {
        alt: '박세랑 포트폴리오',
        src: 'img/favicon.svg',
      },
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stackSidebar',
          position: 'left',
          label: '기술 스택',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/seirang',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: '📚 기술 스택',
          items: [
            {
              label: '🔧 전체 기술 스택',
              to: '/stack/',
            },
            {
              label: '💻 프로그래밍 언어',
              to: '/stack/languages/',
            },
            {
              label: '⚡ 프레임워크 & 라이브러리',
              to: '/stack/frameworks/',
            },
            {
              label: '🛠️ 개발 도구',
              to: '/stack/tools/',
            },
          ],
        },
        {
          title: '📞 연락처',
          items: [
            {
              label: '📧 seirang@knu.ac.kr',
              href: 'mailto:seirang@knu.ac.kr',
            },
            {
              label: '💼 LinkedIn',
              href: 'https://linkedin.com/in/serang-park',
            },
            {
              label: '🐙 GitHub',
              href: 'https://github.com/seirang',
            },
          ],
        },
        {
          title: '🎯 포트폴리오',
          items: [
            {
              label: '🏠 홈페이지',
              to: '/',
            },
            {
              label: '👤 About Me',
              to: '/#about',
            },
            {
              label: '🚀 프로젝트',
              to: '/#projects',
            },
            {
              label: '📝 블로그',
              to: '/blog',
            },
          ],
        },
        {
          title: '🎓 학력 & 경력',
          items: [
            {
              label: '🎓 경북대학교',
              to: '/#about',
            },
            {
              label: '💼 컴퓨터학부',
              to: '/#about',
            },
            {
              label: '🌍 글로벌소프트웨어융합전공',
              to: '/#about',
            },
            {
              label: '📚 지속적 학습',
              to: '/#about',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} 박세랑. Built with ❤️ using Docusaurus.`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
      additionalLanguages: ['bash', 'json'],
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
