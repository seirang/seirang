---
id: git
title: Git
sidebar_label: Git
---

# Git

## 개요

Git은 분산 버전 관리 시스템으로, 소프트웨어 개발 과정에서 코드의 변경사항을 추적하고 관리합니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 모든 프로젝트에서 사용

## 주요 개념

- 브랜치 관리
- 커밋과 히스토리
- 원격 저장소 (GitHub)
- 머지와 리베이스

## 활용 예시

```bash
# 브랜치 생성 및 전환
git checkout -b feature/new-feature

# 변경사항 스테이징 및 커밋
git add .
git commit -m "새로운 기능 추가"

# 원격 저장소에 푸시
git push origin feature/new-feature

# 메인 브랜치로 머지
git checkout main
git merge feature/new-feature
```

## 주요 명령어

- `git init`: 저장소 초기화
- `git clone`: 원격 저장소 복제
- `git status`: 현재 상태 확인
- `git log`: 커밋 히스토리 확인
- `git reset`: 커밋 되돌리기

## 관련 프로젝트

- 모든 프로젝트에서 버전 관리에 활용
