import Header from "../components/Header";
import Button from "../components/Button";
import DiaryList from "../components/DiaryList";

const Home = () => {
  return (
    <div>
      <Header
        title={"2024년 11월"}
        leftChild={<Button text={"<"}></Button>}
        rightChild={<Button text={">"}></Button>}
      ></Header>
      <DiaryList></DiaryList>
    </div>
  );
};

export default Home;
