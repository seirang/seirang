---
id: docker
title: Docker
sidebar_label: Docker
---

# Docker

## 개요

Docker는 컨테이너 기반 가상화 플랫폼으로, 애플리케이션을 일관된 환경에서 실행할 수 있게 해줍니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 초급
- **주요 프로젝트**: 학습 중

## 주요 개념

- 컨테이너와 이미지
- Dockerfile
- Docker Compose
- 볼륨과 네트워크

## 활용 예시

```dockerfile
# Dockerfile 예시
FROM node:18-alpine

WORKDIR /app

COPY package*.json ./
RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "start"]
```

```yaml
# docker-compose.yml 예시
version: "3.8"
services:
  app:
    build: .
    ports:
      - "3000:3000"
    environment:
      - NODE_ENV=production
    depends_on:
      - db

  db:
    image: postgres:13
    environment:
      POSTGRES_DB: myapp
      POSTGRES_USER: user
      POSTGRES_PASSWORD: password
    volumes:
      - postgres_data:/var/lib/postgresql/data

volumes:
  postgres_data:
```

## 관련 프로젝트

- Docker 컨테이너화 프로젝트 (준비 중)
