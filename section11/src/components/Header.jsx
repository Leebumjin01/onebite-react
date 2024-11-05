import "./Header.css";
import { memo } from "react";

const Header = () => {
  return (
    <div className="Header">
      <h3>오늘은 👍</h3>
      <h1>{new Date().toDateString()}</h1>
    </div>
  );
};

// memo(컴포넌트) -> memo 메서드 (최적화를 원하는 컴포넌트)
const memorizedHeader = memo(Header);

export default memorizedHeader;
