import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useNavigate } from "react-router-dom";
import { useContext } from "react";
import { DiaryDispatchContext } from "../App";

const New = () => {
  const { onCreate } = useContext(DiaryDispatchContext);
  const nav = useNavigate();

  const onSubmit = (input) => {
    onCreate(input.createdDate.getTime(), input.emotionId, input.content);
    nav("/", { replace: true });
  };
  return (
    <div>
      <Header
        title={"새 일기 쓰기"}
        // navigate 의 인수에 -1을 전달하면 뒤로가기
        leftChild={<Button onClick={() => nav(-1)} text={"< BACK"}></Button>}
      />
      <Editor onSubmit={onSubmit}></Editor>
    </div>
  );
};

export default New;
