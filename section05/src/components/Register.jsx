import { useState, useRef } from "react";

// 간단한 회원가입 폼
/* 
이름
생년월일
국적
자기소개
 */

const Register = () => {
  /* 
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");
 */

  // 위의 state를 하나의 객체로 묶기
  const [input, setInput] = useState({
    name: "",
    birth: "",
    country: "",
    bio: "",
  });
  // console.log(input);

  // useRef: 리렌더링을 하지 않음
  const countRef = useRef(0);
  const inputRef = useRef();

  const onChange = (e) => {
    // console.log(e.target.name, e.target.value);
    countRef.current++;
    console.log(countRef.current);
    setInput({
      ...input,
      [e.target.name]: e.target.value,
    });
  };

  /* 
  const onChaneName = (e) => {
    setInput({
      ...input,
      name: e.target.value,
    });
  };

  const onChaneBirth = (e) => {
    setInput({
      ...input,
      birth: e.target.value,
    });
  };

  const onChaneCountry = (e) => {
    setInput({
      ...input,
      country: e.target.value,
    });
  };

  const onChaneBio = (e) => {
    setInput({
      ...input,
      bio: e.target.value,
    });
  };
 */

  const onSubmit = () => {
    if (input.name === "") {
      // 이름을 입력하는 DOM 요소에 focus
      inputRef.current.focus();
    }
  };

  return (
    <div>
      <div>
        <input
          ref={inputRef}
          name="name"
          value={input.name}
          onChange={onChange}
          placeholder="이름"
        ></input>
        {input.name}
      </div>

      <div>
        <input
          name="birth"
          value={input.birth}
          onChange={onChange}
          type="date"
        ></input>
        {input.birth}
      </div>

      <div>
        <select name="country" value={input.country} onChange={onChange}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {input.country}
      </div>

      <div>
        <textarea name="bio" value={input.bio} onChange={onChange}></textarea>
        {input.bio}
      </div>
      <button onClick={onSubmit}>제출</button>
    </div>
  );
};

export default Register;
