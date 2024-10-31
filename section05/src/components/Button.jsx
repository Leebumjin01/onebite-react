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
  return (
    <button style={{ color: color }}>
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
