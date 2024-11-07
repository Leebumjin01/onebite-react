import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";

const New = () => {
  return (
    <div>
      <Header
        leftChild={<Button text={"< BACK"}></Button>}
        title={"새 일기 쓰기"}
      />
      <Editor></Editor>
    </div>
  );
};

export default New;
