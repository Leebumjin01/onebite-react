import { useParams, useNavigate } from "react-router-dom"; // url parameter를 가져오는 hook
import Header from "../components/Header";
import Button from "../components/Button";
import Viewer from "../components/Viewer";
import useDiary from "../hooks/useDiary";
import { getStringedDate } from "../util/get-stringed-date";

const Diary = () => {
  const params = useParams();
  // console.log(params);

  const nav = useNavigate();

  const curDiaryItem = useDiary(params.id);
  console.log(curDiaryItem);

  if (!curDiaryItem) {
    return <div>일기 로딩중...</div>;
  }

  const { createdDate, emotionId, content } = curDiaryItem;
  const title = getStringedDate(new Date(createdDate));

  return (
    <div>
      <Header
        title={`${title}`}
        leftChild={<Button onClick={() => nav(-1)} text={"< Back"}></Button>}
        rightChild={
          <Button
            onClick={() => nav(`/edit/${params.id}`)}
            text={"수정"}
          ></Button>
        }
      ></Header>
      <Viewer emotionId={emotionId} content={content}></Viewer>
    </div>
  );
};

export default Diary;
