---
id: react
title: React
sidebar_label: React
---

# React

## 개요

React는 Facebook에서 개발한 JavaScript 라이브러리로, 사용자 인터페이스를 구축하기 위한 컴포넌트 기반 아키텍처를 제공합니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 포트폴리오 웹사이트, 날씨 정보 앱

## 주요 개념

- 컴포넌트 기반 아키텍처
- JSX
- Hooks (useState, useEffect, useContext)
- Props와 State 관리

## 활용 예시

```jsx
import React, { useState, useEffect } from "react";

function WeatherApp() {
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchWeatherData();
  }, []);

  const fetchWeatherData = async () => {
    try {
      const response = await fetch("/api/weather");
      const data = await response.json();
      setWeather(data);
    } catch (error) {
      console.error("날씨 데이터 로딩 실패:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <div>로딩 중...</div>;

  return (
    <div className="weather-app">
      <h1>날씨 정보</h1>
      {weather && (
        <div>
          <p>온도: {weather.temperature}°C</p>
          <p>날씨: {weather.condition}</p>
        </div>
      )}
    </div>
  );
}
```

## 관련 프로젝트

- [포트폴리오 웹사이트](/projects/portfolio)
- [날씨 정보 앱](/projects/weather-app)
