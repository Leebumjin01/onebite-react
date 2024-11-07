import "./Editor.css";
import EmotionItem from "./EmotionItem";
import Button from "./Button";

const emotionList = [
  { emotionId: 1, emotionName: "완전 좋음" },
  { emotionId: 2, emotionName: "좋음" },
  { emotionId: 3, emotionName: "쏘쏘" },
  { emotionId: 4, emotionName: "나쁨" },
  { emotionId: 5, emotionName: "끔찍함" },
];

const emotionId = 4;

const Editor = () => {
  return (
    <div className="Editor">
      <section className="date_section">
        <h4>오늘의 날짜</h4>
        <input type="date"></input>
      </section>
      <section className="emotion_section">
        <h4>오늘의 감정</h4>
        <div className="emotion_list_wrapper">
          {emotionList.map((item) => (
            <EmotionItem
              key={item.emotionId}
              {...item}
              isSelected={item.emotionId === emotionId}
            />
          ))}
        </div>
      </section>
      <section className="content_section">
        <h4>오늘의 일기</h4>
        <textarea placeholder="오늘은 어때요?"></textarea>
      </section>
      <section className="button_section">
        <Button text={"취소하기"}></Button>
        <Button text={"작성완료"} type={"POSITIVE"}></Button>
      </section>
    </div>
  );
};

export default Editor;
