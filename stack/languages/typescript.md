---
id: typescript
title: TypeScript
sidebar_label: TypeScript
---

# TypeScript

## 개요

TypeScript는 JavaScript에 정적 타입 시스템을 추가한 프로그래밍 언어로, 대규모 애플리케이션 개발에 유용합니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 초급-중급
- **주요 프로젝트**: 포트폴리오 웹사이트

## 주요 개념

- 정적 타입 시스템
- 인터페이스와 타입 정의
- 제네릭
- 유니온 타입과 인터섹션 타입

## 활용 예시

```typescript
// 인터페이스 정의
interface User {
  name: string;
  age: number;
  email?: string;
}

// 제네릭 활용
function createArray<T>(length: number, value: T): T[] {
  return Array(length).fill(value);
}

// 유니온 타입
type Status = "loading" | "success" | "error";

function handleStatus(status: Status) {
  switch (status) {
    case "loading":
      return "로딩 중...";
    case "success":
      return "성공!";
    case "error":
      return "오류 발생";
  }
}
```

## 관련 프로젝트

- [포트폴리오 웹사이트](/projects/portfolio)
