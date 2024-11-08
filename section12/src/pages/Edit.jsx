import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import Button from "../components/Button";
import Editor from "../components/Editor";
import { useContext } from "react";
import { DiaryDispatchContext, DiaryStateContext } from "../App";

const Edit = () => {
  // useParams: URL의 파라미터를 제공
  const params = useParams();
  const nav = useNavigate();
  const { onDelete } = useContext(DiaryDispatchContext);
  const data = useContext(DiaryStateContext);

  const onClickDelete = () => {
    if (window.confirm("삭제하시겠습니까?")) {
      onDelete(params.id);
      // 브라우저의 내장기능을 사용하는 함수, 확인, 취소가 있는 팝업창을 띄워줌
      // t, f 반환
      nav("/", { replace: true });
    }
  };

  const getCurrentDiaryItem = () => {
    const currentDiaryItem = data.find(
      (item) => String(item.id) === String(params.id)
    );

    if (!currentDiaryItem) {
      window.alert("존재하지 않는 일기입니다.");
      nav("/", { replace: true });
    }
    return currentDiaryItem;
  };

  const currentDiaryItem = getCurrentDiaryItem();
  console.log(currentDiaryItem);

  return (
    <div>
      <Header
        title={"수정하기"}
        leftChild={<Button onClick={() => nav(-1)} text={"< Back"} />}
        rightChild={
          <Button onClick={onClickDelete} text={"삭제"} type={"NEGATIVE"} />
        }
      ></Header>
      <Editor />
    </div>
  );
};

export default Edit;
