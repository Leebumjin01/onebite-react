import { useEffect } from "react";

const usePageTitle = (title) => {
  useEffect(() => {
    // 변수명에 $ 를 사용하는 이유는 변수안에 DOM요소가 저장될 것이란 뜻
    const $title = document.getElementsByTagName("title")[0];
    $title.innerText = title;
  }, [title]);
};

export default usePageTitle;
