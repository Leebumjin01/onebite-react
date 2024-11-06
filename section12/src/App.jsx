import "./App.css";
import { Routes, Route, Link, useNavigate } from "react-router-dom";
import Home from "./pages/Home";
import Diary from "./pages/Diary";
import New from "./pages/New";
import Notfound from "./pages/Notfound";
import { getEmotionImage } from "./util/get-emotion-image";
import Button from "./components/Button";
import Header from "./components/Header";

function App() {
  const nav = useNavigate();
  const onClickButton = () => {
    nav("/new");
  };

  return (
    <>
      <Header
        title={"header"}
        leftChild={<Button text={"Left"} />}
        rightChild={<Button text={"right"} />}
      ></Header>

      <Button
        text={"123"}
        type={"DEFAULT"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
      ></Button>
      <Button
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
      ></Button>
      <Button
        text={"123"}
        type={"NEGATIVE"}
        onClick={() => {
          console.log("123버튼 클릭");
        }}
      ></Button>

      <Routes>
        <Route path="/" element={<Home></Home>}></Route>
        <Route path="/new" element={<New></New>}></Route>
        <Route path="/diary/:id" element={<Diary></Diary>}></Route>
        <Route path="*" element={<Notfound></Notfound>}></Route>
      </Routes>
    </>
  );
}

export default App;
