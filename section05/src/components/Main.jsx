import "./Main.css";

// JSX에서 변수 값을 html 안에 렌더링이 가능
// 1. 중괄호 내부에는 자바스크립트 표현식만 넣을 수 있음
// 2. 숫자, 문자열, 배열 값만 렌더링 가능
// 3. 모든 태그는 반드시 닫혀 있어야 함
// 4. 최상위 태그는 반드시 하나여야만 함(단, 처음과 끝 태그에 <> </> 빈 태그를 붙히면 가능)
const Main = () => {
  const user = {
    name: "LBJ",
    isLogin: false,
  };
  return (
    <>
      <div className="logout">
        {user.isLogin ? <div>로그아웃</div> : <div>로그인</div>}
      </div>
    </>
  );
};

export default Main;
