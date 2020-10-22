# Awesome Weather
## Expo로 React Native App 만들기 (Nomad Coders - React Native로 날씨앱 만들기)
https://expo.io/@jgiraffe/projects/awesome-weather

android의 경우 링크의 qr code를 스캔해 앱을 사용해 보실 수 있습니다.

## 공부한 내용

### 0. Install Expo

```
npm install -g expo-cli
expo init *app name*
```

### 1. ios device에서 test

expo app에서 login 후

```
expo login
```

### 2. Layouts with Flexbox in RN

- default direction : column
- flex: 1은 화면 전체를 차지
- flex: 1인 View와 flex: 2인 View가 같은 View의 자식이면 화면의 1/3과 2/3를 차지

### 3. template string (es6)

백틱을 사용

```
`http://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${API_KEY}&units=metric`
```
