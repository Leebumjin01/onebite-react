// props로 데이터 전달하기

/* 
const Button = (props) => {
  console.log(props);
  return (
    <button style={{ color: props.color }}>
      {props.text}- {props.color.toUpperCase()}
    </button>
  );
};
 */

// 객체의 구조 분해 할당으로 프로퍼티를 꺼내옴
const Button = ({ text, color, children }) => {
  // 이벤트 핸들러 함수를 호출하며 매개변수로 이벤트 객체를 제공
  const onClickButton = (e) => {
    console.log(e);
    console.log(text);
  };
  return (
    <button
      // 이벤트 핸들러
      onClick={onClickButton}
      // onMouseEnter={onClickButton}
      style={{ color: color }}
    >
      {text}- {color.toUpperCase()}
      {children}
    </button>
  );
};

// defaultProps: props의 기본값을 설정
Button.defaultProps = {
  color: "black",
};
export default Button;
