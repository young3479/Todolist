# Todolist

(서버 테스트 완료함.)

서버 실행법

테스트용서버-server.js에 들어간다.
들어가서 터미널에다가 nodemon server.js 라고 친다.
http://localhost:8080/data 여기에 데이터가 제대로 보여지는지 확인한다 끝.

리액트 실행할 때 유의점

폴더에서 바로 열지 말고 웹스톰에서 file-open-~Todolist/todolist(이거 중요 바깥폴더에서 열면 리액트 실행 안될수도 있음) 이 경로까지 간다음에 new window로 웹스톰 창 하나 더 띄운다.

터미널창에 npm install 치고 종속성 다운받는다.

그러면 거의 무조건 'react-scripts'은(는) 내부 또는 외부 명령, 실행할 수 있는 프로그램, 또는
배치 파일이 아닙니다.
이 오류 뜰텐데 만약 오류 안뜨면 그냥 넘어가고 뜨면 
npm install react-scripts 해서 다운받는다.

npm start 로 실행하면 끝 ! 서버에서 데이터 불러와진거 보여질거다. date 날짜 데이터도 넣어져ㅑ 있음
이래도 안되면 나 운다 엉엉
