---
id: html5
title: HTML5
sidebar_label: HTML5
---

# HTML5

## 개요

HTML5는 웹 페이지의 구조를 정의하는 마크업 언어로, 시맨틱 요소와 다양한 API를 제공합니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 할일 관리 앱, 날씨 정보 앱

## 주요 개념

- 시맨틱 HTML 요소
- 폼 검증
- 미디어 요소 (audio, video)
- Canvas API
- Local Storage

## 활용 예시

```html
<!DOCTYPE html>
<html lang="ko">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>할일 관리 앱</title>
  </head>
  <body>
    <header>
      <h1>할일 관리</h1>
    </header>

    <main>
      <form id="todo-form">
        <input
          type="text"
          id="todo-input"
          placeholder="할일을 입력하세요"
          required
        />
        <button type="submit">추가</button>
      </form>

      <ul id="todo-list">
        <!-- 할일 목록이 여기에 동적으로 추가됩니다 -->
      </ul>
    </main>

    <footer>
      <p>&copy; 2024 박세랑</p>
    </footer>
  </body>
</html>
```

## 관련 프로젝트

- [할일 관리 앱](/projects/todo-app)
- [날씨 정보 앱](/projects/weather-app)
