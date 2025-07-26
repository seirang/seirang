---
id: docusaurus
title: Docusaurus
sidebar_label: Docusaurus
---

# Docusaurus

## 개요

Docusaurus는 Facebook에서 개발한 정적 사이트 생성기로, 문서 사이트와 블로그를 쉽게 만들 수 있는 React 기반 프레임워크입니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 포트폴리오 웹사이트

## 주요 개념

- 정적 사이트 생성 (SSG)
- React 기반 컴포넌트
- Markdown 지원
- 플러그인 시스템
- 테마 커스터마이징

## 활용 예시

```jsx
// docusaurus.config.ts
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

const config: Config = {
  title: '박세랑 포트폴리오',
  tagline: '컴퓨터학부 학생의 포트폴리오',

  presets: [
    [
      'classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
          routeBasePath: 'stack',
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: './src/css/custom.css',
        },
      } satisfies Preset.Options,
    ],
  ],

  themeConfig: {
    navbar: {
      title: '박세랑 포트폴리오',
      items: [
        {
          type: 'docSidebar',
          sidebarId: 'stackSidebar',
          position: 'left',
          label: '기술 스택',
        },
        {to: '/blog', label: 'Blog', position: 'left'},
      ],
    },
  },
};

export default config;
```

```jsx
// src/components/Hero.tsx
import type { ReactNode } from "react";
import Link from "@docusaurus/Link";
import type { Profile } from "../types/portfolio";

interface HeroProps {
  profile: Profile;
}

export default function Hero({ profile }: HeroProps): ReactNode {
  return (
    <section className="hero hero--primary">
      <div className="portfolio-container">
        <h1>안녕하세요! 👋</h1>
        <h2>
          {profile.title} {profile.name}입니다
        </h2>
        <p>{profile.description}</p>
        <div>
          <Link className="portfolio-button" to="#about">
            더 알아보기
          </Link>
        </div>
      </div>
    </section>
  );
}
```

## 주요 기능

- **문서 시스템**: Markdown 기반 문서 작성
- **블로그**: 자동 블로그 생성
- **검색**: Algolia DocSearch 통합
- **다국어**: i18n 지원
- **PWA**: Progressive Web App 지원
- **SEO**: 자동 SEO 최적화

## 관련 프로젝트

- [포트폴리오 웹사이트](/projects/portfolio)
