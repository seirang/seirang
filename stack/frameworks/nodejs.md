---
id: nodejs
title: Node.js
sidebar_label: Node.js
---

# Node.js

## 개요

Node.js는 JavaScript 런타임 환경으로, 서버 사이드 JavaScript 개발을 가능하게 합니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 초급-중급
- **주요 프로젝트**: 학습 중

## 주요 개념

- 비동기 I/O
- 이벤트 기반 프로그래밍
- npm 패키지 관리
- Express.js 프레임워크

## 활용 예시

```javascript
const express = require("express");
const app = express();

app.use(express.json());

// API 엔드포인트
app.get("/api/users", async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ error: "서버 오류" });
  }
});

app.post("/api/users", async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ error: "잘못된 요청" });
  }
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`서버가 포트 ${PORT}에서 실행 중입니다.`);
});
```

## 관련 프로젝트

- Node.js 백엔드 프로젝트 (준비 중)
