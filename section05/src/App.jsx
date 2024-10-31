import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";
import Button from "./components/Button.jsx";

// root 컴포넌트
function App() {
  const buttonProps = {
    text: "메일",
    color: "red",
    a: 1,
    b: 2,
    c: 3,
  };
  return (
    <>
      {/* 자식 컴포넌트 */}
      {/*<Button text={"메일"} color="red"></Button>*/}
      {/* Spread 사용 */}
      <Button {...buttonProps}></Button>
      <Button text={"카페"}></Button>
      <Button text={"블로그"}>
        <Header />
      </Button>
    </>
  );
}

export default App;
