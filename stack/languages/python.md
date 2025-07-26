---
id: python
title: Python
sidebar_label: Python
---

# Python

## 개요

Python은 간결하고 읽기 쉬운 문법을 가진 프로그래밍 언어로, 데이터 분석, 웹 개발, AI/ML 등 다양한 분야에서 활용됩니다.

## 학습 경험

- **기간**: 2023년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 데이터 분석 프로젝트

## 주요 개념

- 객체지향 프로그래밍
- 리스트 컴프리헨션
- 데코레이터
- 가상환경 관리

## 활용 예시

```python
# 리스트 컴프리헨션
numbers = [1, 2, 3, 4, 5]
squares = [x**2 for x in numbers if x % 2 == 0]

# 데코레이터
def timer(func):
    def wrapper(*args, **kwargs):
        import time
        start = time.time()
        result = func(*args, **kwargs)
        end = time.time()
        print(f"{func.__name__} 실행 시간: {end - start:.4f}초")
        return result
    return wrapper

@timer
def slow_function():
    import time
    time.sleep(1)
    return "완료!"
```

## 관련 프로젝트

- 데이터 분석 프로젝트 (준비 중)
