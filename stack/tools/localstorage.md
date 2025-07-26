---
id: localstorage
title: LocalStorage
sidebar_label: LocalStorage
---

# LocalStorage

## 개요

LocalStorage는 웹 브라우저에서 제공하는 웹 스토리지 API로, 클라이언트 측에서 데이터를 영구적으로 저장할 수 있습니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 할일 관리 앱

## 주요 개념

- 키-값 쌍 저장
- 문자열 데이터만 저장 가능
- 도메인별 독립적인 저장소
- 브라우저 세션과 무관한 영구 저장

## 활용 예시

```javascript
// LocalStorage 유틸리티 클래스
class LocalStorageManager {
  constructor(key) {
    this.key = key;
  }

  // 데이터 저장
  save(data) {
    try {
      localStorage.setItem(this.key, JSON.stringify(data));
      return true;
    } catch (error) {
      console.error("데이터 저장 실패:", error);
      return false;
    }
  }

  // 데이터 불러오기
  load(defaultValue = null) {
    try {
      const data = localStorage.getItem(this.key);
      return data ? JSON.parse(data) : defaultValue;
    } catch (error) {
      console.error("데이터 불러오기 실패:", error);
      return defaultValue;
    }
  }

  // 데이터 삭제
  remove() {
    try {
      localStorage.removeItem(this.key);
      return true;
    } catch (error) {
      console.error("데이터 삭제 실패:", error);
      return false;
    }
  }

  // 저장소 비우기
  clear() {
    try {
      localStorage.clear();
      return true;
    } catch (error) {
      console.error("저장소 비우기 실패:", error);
      return false;
    }
  }
}

// 할일 관리 앱에서 활용 예시
class TodoApp {
  constructor() {
    this.storage = new LocalStorageManager("todos");
    this.todos = this.storage.load([]);
    this.renderTodos();
  }

  addTodo(text) {
    const todo = {
      id: Date.now(),
      text: text,
      completed: false,
      createdAt: new Date().toISOString(),
    };

    this.todos.push(todo);
    this.storage.save(this.todos);
    this.renderTodos();
  }

  toggleTodo(id) {
    this.todos = this.todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    this.storage.save(this.todos);
    this.renderTodos();
  }

  deleteTodo(id) {
    this.todos = this.todos.filter((todo) => todo.id !== id);
    this.storage.save(this.todos);
    this.renderTodos();
  }

  renderTodos() {
    // DOM 렌더링 로직
    console.log("할일 목록:", this.todos);
  }
}

// 사용 예시
const todoApp = new TodoApp();
todoApp.addTodo("포트폴리오 완성하기");
todoApp.addTodo("기술 스택 문서 작성하기");
```

## 관련 프로젝트

- [할일 관리 앱](/projects/todo-app)
