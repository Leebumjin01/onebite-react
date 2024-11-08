import { useParams } from "react-router-dom"; // url parameter를 가져오는 hook
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";

const Diary = () => {
  const params = useParams();

  console.log(params);
  return (
    <div>
      <Header
        title={"yyyy-mm-dd 일기"}
        leftChild={<Button text={"< Back"}></Button>}
        rightChild={<Button text={"수정"}></Button>}
      ></Header>
      <Viewer></Viewer>
    </div>
  );
};

export default Diary;
