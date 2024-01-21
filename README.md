## 프로젝트 구조

```
my-app/
  ├─ public/              --> 정적 파일 및 HTML 파일이 저장되는 폴더
  ├─ src/                 --> 앱의 소스코드가 저장되는 폴더
  │   ├─ api/          --> API 요청과 관련된 코드를 저장하는 폴더
  │   ├─ assets/       --> 이미지,글꼴과 같은 리소스를 저장하는 폴더
  │   │   ├─ images/
  │   │   └─ fonts/
  │   ├─ components/ --> 리액트 컴포넌트가 저장되는 폴더 ➡️ 내부에 기능별로 하위 디렉토리를 구분하거나, 컴포넌트 별로 디렉토리를 구분한다
  │   │   ├─ Navbar/
  │   │   └─ Footer/
  │   ├─ containers/ --> 상태관리와 같은 로직이 포함된 컨테이너 컴포넌트를 저장하는 폴더
  │   ├─ hooks/      --> 사용자 Custom Hook코드를 저장하는 폴더
  │   ├─ pages/      --> 각각의 페이지에 대한 레이아웃이나 특정 페이지 관련 로직을 담당하는 컴포넌트를 저장하는 폴더
  │   └─ store/      --> 상태 관리를 위한 (예시 : Redux, Mobx등등..) 과 관련코드들이 저장되는 폴더
  │   │   ├─ actions/
  │   │   ├─ reducers/
  │   │   └─ types/
  │   ├─ styles/      --> 스타일 관련 js, css 파일이 저장되는 폴더
  │   │   ├─ GlobalStyles.js   --> 스타일 초기화(reset.css) 및 전역 스타일 관련 코드
  ├─ .env
  ├─ .gitignore
  ├─ package.json
  └─ README.md
```
