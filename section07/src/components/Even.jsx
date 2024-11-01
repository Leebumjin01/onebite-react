import { useEffect } from "react";

const Even = () => {
  useEffect(() => {
    // useEffect 의 콜백함수가 반환하는 함수
    // 클린업, 정리함수
    return () => {
      console.log("unmount");
    };
  }, []);
  return <div>짝수입니다.</div>;
};

export default Even;
