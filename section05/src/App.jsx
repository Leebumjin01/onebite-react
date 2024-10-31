import "./App.css";
import { useState } from "react";
/* 
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";
 */

// root 컴포넌트

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
  const [count, setCount] = useState(0);
  const [light, setLight] = useState("OFF");

  return (
    <>
      <div>
        <h1>{light}</h1>
        <button
          onClick={() => {
            setLight(light === "OFF" ? "ON" : "OFF");
          }}
        >
          {light === "OFF" ? "켜기" : "끄기"}
        </button>
      </div>
      <div>
        <h1>{count}</h1>
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
      </div>
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
    </>
  );
}

export default App;
