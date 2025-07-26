---
id: css3
title: CSS3
sidebar_label: CSS3
---

# CSS3

## 개요

CSS3는 웹 페이지의 스타일과 레이아웃을 정의하는 스타일시트 언어로, 다양한 시각적 효과와 반응형 디자인을 구현할 수 있습니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 모든 웹 프로젝트

## 주요 개념

- Flexbox와 Grid 레이아웃
- CSS 변수 (Custom Properties)
- 애니메이션과 트랜지션
- 반응형 디자인 (Media Queries)
- CSS 모듈

## 활용 예시

```css
/* CSS 변수 활용 */
:root {
  --primary-color: #374151;
  --secondary-color: #6b7280;
  --border-radius: 8px;
  --transition: all 0.3s ease;
}

/* Flexbox 레이아웃 */
.portfolio-grid {
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  justify-content: center;
}

.portfolio-card {
  background: var(--primary-color);
  border-radius: var(--border-radius);
  padding: 2rem;
  transition: var(--transition);
  flex: 1;
  min-width: 300px;
}

.portfolio-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.2);
}

/* 반응형 디자인 */
@media (max-width: 768px) {
  .portfolio-grid {
    flex-direction: column;
  }

  .portfolio-card {
    min-width: auto;
  }
}

/* 애니메이션 */
@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.6s ease-out;
}
```

## 관련 프로젝트

- 모든 웹 프로젝트에서 스타일링에 활용
