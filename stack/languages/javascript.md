---
id: javascript
title: JavaScript
sidebar_label: JavaScript
---

# JavaScript

## 개요

JavaScript는 웹 브라우저에서 실행되는 프로그래밍 언어로, 웹 개발의 핵심 기술입니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 할일 관리 앱, 날씨 정보 앱

## 주요 개념

- ES6+ 문법 (화살표 함수, 구조분해할당, 템플릿 리터럴)
- 비동기 프로그래밍 (Promise, async/await)
- DOM 조작
- 이벤트 처리

## 활용 예시

```javascript
// ES6+ 문법 활용
const user = { name: "박세랑", age: 20 };
const { name, age } = user;

// 비동기 처리
async function fetchData() {
  try {
    const response = await fetch("/api/data");
    const data = await response.json();
    return data;
  } catch (error) {
    console.error("Error:", error);
  }
}
```

## 관련 프로젝트

- [할일 관리 앱](/projects/todo-app)
- [날씨 정보 앱](/projects/weather-app)
