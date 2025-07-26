---
id: api
title: API
sidebar_label: API
---

# API

## 개요

API(Application Programming Interface)는 서로 다른 소프트웨어 애플리케이션이 데이터를 교환할 수 있도록 하는 인터페이스입니다.

## 학습 경험

- **기간**: 2024년 ~ 현재
- **수준**: 중급
- **주요 프로젝트**: 날씨 정보 앱

## 주요 개념

- RESTful API
- HTTP 메서드 (GET, POST, PUT, DELETE)
- JSON 데이터 형식
- 비동기 요청 처리
- 에러 핸들링

## 활용 예시

```javascript
// OpenWeatherMap API 활용 예시
class WeatherAPI {
  constructor(apiKey) {
    this.apiKey = apiKey;
    this.baseUrl = "https://api.openweathermap.org/data/2.5";
  }

  async getWeather(city) {
    try {
      const response = await fetch(
        `${this.baseUrl}/weather?q=${city}&appid=${this.apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return {
        temperature: data.main.temp,
        condition: data.weather[0].main,
        description: data.weather[0].description,
        humidity: data.main.humidity,
      };
    } catch (error) {
      console.error("날씨 데이터 가져오기 실패:", error);
      throw error;
    }
  }

  async getForecast(city) {
    try {
      const response = await fetch(
        `${this.baseUrl}/forecast?q=${city}&appid=${this.apiKey}&units=metric`
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      return data.list.map((item) => ({
        date: new Date(item.dt * 1000),
        temperature: item.main.temp,
        condition: item.weather[0].main,
      }));
    } catch (error) {
      console.error("예보 데이터 가져오기 실패:", error);
      throw error;
    }
  }
}

// 사용 예시
const weatherAPI = new WeatherAPI("your-api-key");
weatherAPI
  .getWeather("Seoul")
  .then((weather) => console.log("서울 날씨:", weather))
  .catch((error) => console.error("오류:", error));
```

## 관련 프로젝트

- [날씨 정보 앱](/projects/weather-app)
