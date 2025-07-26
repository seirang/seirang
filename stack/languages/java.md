---
id: java
title: Java
sidebar_label: Java
---

# Java

## 개요

Java는 객체지향 프로그래밍 언어로, 플랫폼 독립성과 강력한 타입 시스템을 특징으로 합니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 초급
- **주요 프로젝트**: 학습 중

## 주요 개념

- 객체지향 프로그래밍
- 제네릭
- 컬렉션 프레임워크
- 예외 처리

## 활용 예시

```java
// 제네릭과 컬렉션 활용
import java.util.*;

public class Example {
    public static void main(String[] args) {
        List<String> names = new ArrayList<>();
        names.add("박세랑");
        names.add("개발자");

        // 스트림 API 활용
        names.stream()
             .filter(name -> name.length() > 2)
             .forEach(System.out::println);
    }
}
```

## 관련 프로젝트

- Java 학습 프로젝트 (준비 중)
