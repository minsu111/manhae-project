# 디지털 만해기념관

<img width="1440" alt="만해_메인페이지_스크린샷" src="https://github.com/minsu111/manhae-project/assets/124219344/ea521d8e-bc27-4e09-ae1d-ee0fdfef8d5e">

## 프로젝트 소개

'디지털 만해기념관'은 박물관 전시 관람 환경 개선 지원 사업의 일환으로 진행된 웹 서비스 프로젝트입니다.
기념관 내 키오스크 환경(터치 스크린)에서의 동작이 주된 목적인 웹 서비스로, 기념관 소장품의 이미지와 설명글, 영상 등을 화면으로 보여주고, 나만의 훈장 만들기, 전시 연계 퀴즈 등 다양한 인터렉션을 제공합니다.
또한 장애인, 사회적 약자, 다문화 가정의 접근성 개선을 위해 모든 텍스트 및 영상은 국문/영문 두 가지 버전으로 제공되며, 텍스트 확대 기능 및 음성 나레이션 기능을 제공합니다.
해당 서비스는 별도의 백 서버 없이 클라이언트 단으로만 이루어져 있습니다.

관련 보도자료 : http://www.mediabuddha.net/news/view.php?number=31957

---
## Stacks

### Environment
![Visual Studio Code](https://img.shields.io/badge/Visual%20Studio%20Code-007ACC?style=for-the-badge&logo=Visual%20Studio%20Code&logoColor=white)
![Git](https://img.shields.io/badge/Git-F05032?style=for-the-badge&logo=Git&logoColor=white)
![Github](https://img.shields.io/badge/GitHub-181717?style=for-the-badge&logo=GitHub&logoColor=white)

### Config

![npm](https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white)     

### Development
![JavaScript](https://img.shields.io/badge/JavaScript-F7DF1E?style=for-the-badge&logo=Javascript&logoColor=white)
![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)
![SASS](https://img.shields.io/badge/SASS-hotpink.svg?style=for-the-badge&logo=SASS&logoColor=white)

---
## 화면 구성

> 4K 및 모바일 가로 화면 기준 반응형 웹으로 구현되었으며, 영문 버전을 제공합니다.


| 소장품 감상 |  소장품 감상 디테일   |
| :-------------------------------------------: | :------------: |
| <img width="1440" alt="만해_소장품감상_스크린샷" src="https://github.com/minsu111/manhae-project/assets/124219344/fbc4e317-52ad-4d73-8cef-f3fd68438b44"> | <img width="1440" alt="만해_소장품감상_스크린샷1" src="https://github.com/minsu111/manhae-project/assets/124219344/54394cc3-2544-4872-96cc-cb8173dca302"> |  
| 소장품 해설  |   소장품 해설 영상 모달  |  
| <img width="1440" alt="만해_소장품해설_스크린샷" src="https://github.com/minsu111/manhae-project/assets/124219344/5155390f-0057-4143-b7d3-5f15b3d84f58"> |  <img width="1440" alt="만해_소장품해설_스크린샷2" src="https://github.com/minsu111/manhae-project/assets/124219344/b7b7b063-9c34-418f-94c6-255f4f2f4af2">   |
| 만해에게 듣는 지혜  |   만해에게 듣는 지혜 디테일  |  
| <img width="1440" alt="만해_만해에게듣는지혜_스크린샷" src="https://github.com/minsu111/manhae-project/assets/124219344/c74686ba-db40-41cd-8fe1-e41710ed5997"> |  <img width="1440" alt="만해_만해에게듣는지혜_스크린샷1" src="https://github.com/minsu111/manhae-project/assets/124219344/e56ae49a-4128-4e30-bea1-a8fa0309c081">   |
| 나만의 훈장 만들기  |   나만의 훈장 만들기 디테일  |  
| <img width="1440" alt="만해_나만의훈장만들기_스크린샷" src="https://github.com/minsu111/manhae-project/assets/124219344/2db07787-bb0a-4bac-84c0-93c1a9893486"> |  <img width="1440" alt="만해_나만의훈장만들기_3" src="https://github.com/minsu111/manhae-project/assets/124219344/2002327a-1798-4679-80b8-41658a84101e">   |
| 전시 연계 퀴즈  |   전시 연계 퀴즈 디테일  |  
| <img width="1440" alt="만해_전시연계퀴즈_퀴즈" src="https://github.com/minsu111/manhae-project/assets/124219344/7a3cb23a-623b-47ca-aae0-c2e503bdee51"> |   <img width="1440" alt="만해_전시연계퀴즈_결과" src="https://github.com/minsu111/manhae-project/assets/124219344/0db510ad-ff44-4e2b-a0dd-c5d57805964c">  |

### 영문 ver 예시

| Create Your Own Medal |  Exhibition Related Quiz   |
| :-------------------------------------------: | :------------: |
| <img width="1440" alt="만해_나만의훈장만들기_영문" src="https://github.com/minsu111/manhae-project/assets/124219344/db74830f-07ee-45c2-97c7-ec9487660ce0"> | <img width="1440" alt="만해_전시연계퀴즈_영문1" src="https://github.com/minsu111/manhae-project/assets/124219344/4f3f0b3d-fa68-4fd4-9319-297d0fa62dff"> |  

---

## 주요 기능(담당 기능)
### 🌟 기념관 소장품 관람
- 약 300여개의 소장품 고화질 이미지 및 설명 제공
- 목록에서 소장품 클릭 시, 디테일 페이지 내에서 해당 소장품의 속지 이미지 함께 확인 가능
  
### 🌟 나만의 훈장 만들기
- Drag and Drop을 활용한 훈장 커스텀 콘텐츠 제공
- iframe을 통해 외부 콘텐츠 제공

### 🌟 전시 연계 퀴즈
- 4지선다형, OX 퀴즈 등 전시 내용 관련 총 15개의 퀴즈 게임 제공
- 퀴즈 완료 후 맞힌 개수 및 점수 확인 가능

### 🌟 텍스트 음성 재생
- SpeechSynthesis API를 활용한 TTS(Text-To-Speech) 기능 제공
- 모든 화면의 국문/영문 텍스트는 화면 우측 하단 재생 버튼을 눌러 음성으로 청취할 수 있음

<!-- ### 🌟 국문/영문 언어 설정
- 

### 🌟 텍스트 확대/축소
- 
--!>

<!-- ## 아키텍처
### 디렉터리 구조 --!>


