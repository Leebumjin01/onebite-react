import { useState } from "react";

// 간단한 회원가입 폼
/* 
이름
생년월일
국적
자기소개
 */

const Register = () => {
  // 초기값 "이름:" 설정
  const [name, setName] = useState("");
  const [country, setCountry] = useState("");
  const [birth, setBirth] = useState("");
  const [bio, setBio] = useState("");

  const onChaneName = (e) => {
    setName(e.target.value);
  };

  const onChaneBirth = (e) => {
    setBirth(e.target.value);
  };

  const onChaneCountry = (e) => {
    setCountry(e.target.value);
  };

  const onChaneBio = (e) => {
    setBio(e.target.value);
  };

  return (
    <div>
      <div>
        <input value={name} onChange={onChaneName} placeholder="이름"></input>
        {name}
      </div>

      <div>
        <input value={birth} onChange={onChaneBirth} type="date"></input>
        {birth}
      </div>

      <div>
        <select value={country} onChange={onChaneCountry}>
          <option value="kr">한국</option>
          <option value="us">미국</option>
          <option value="uk">영국</option>
        </select>
        {country}
      </div>

      <div>
        <textarea value={bio} onChange={onChaneBio}></textarea>
        {bio}
      </div>
    </div>
  );
};

export default Register;
