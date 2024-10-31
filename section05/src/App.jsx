import "./App.css";
import Header from "./components/Header.jsx";
import Main from "./components/Main.jsx";
import Footer from "./components/Footer.jsx";

// root 컴포넌트
function App() {
  return (
    <>
      {/* 자식 컴포넌트 */}
      <Header></Header>
      <Main></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
