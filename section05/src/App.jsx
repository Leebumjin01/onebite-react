import "./App.css";
import { useState } from "react";
import Bulb from "./components/Bulb";
import Counter from "./components/Count";

/* 
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
 */

// 리액트 컴포넌트는 3가지 상황에서 리렌더링 됨
// 1. 자신이 관리하는 state 값이 변경 되었을 때
// 2. 자신이 관리하는 props 값이 변경 되었을 때
// 3. 부모 컴포넌트가 리렌더링 되었을 때 자식 컴포넌트도 리렌더링 됨

// App() 은 root 컴포넌트
function App() {
  /* 
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
    
  };
   */

  // state변수는 useState에서 생성된 값이 저장
  // setState는 state의 값을 변경시키는 함수가 저장

  return (
    <>
      <Bulb></Bulb>
      {/* <h1>{light}</h1> */}

      {/* 자식 컴포넌트 */}
      {/*<Button text={"메일"} color="red"></Button>*/}
      {/* Spread 사용 */}
      {/* 
      <Button {...buttonProps}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}>
        <Header />
      </Button>
       */}

      <Counter></Counter>
    </>
  );
}

export default App;
