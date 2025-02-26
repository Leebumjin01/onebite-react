import "./List.css";
import TodoItem from "./TodoItem";
import { useState, useMemo } from "react";

const List = ({ todos, onUpdate, onDelete }) => {
  const [search, setSearch] = useState("");
  const onChangeSearch = (e) => {
    setSearch(e.target.value);
  };

  const getFilteredData = () => {
    // 검색창이 빈 값이라면 todos를 반환
    if (search === "") {
      return todos;
    }
    // 아니라면 todos의 필터링 된 todos 배열을 반환
    return todos.filter((todo) =>
      // 현 todo의 content에 includes 메서드 호출
      // content 에는 "react" 라는 문자열이 들어가있을 수 있음
      // 문자열에 includes 메서드를 호출하면 인수로 전달하는 값(search state)이 문자열에 들어 있는지 체크
      // 있으면 true, 없으면 false

      // toLowerCase() : 소문자로 변환해서 문자열 찾기
      todo.content.toLowerCase().includes(search.toLowerCase())
    );
  };

  const filteredTodos = getFilteredData();

  const { totalCount, doneCount, notDoneCount } = useMemo(() => {
    console.log("getAnalyzedData 호출 됨.");
    const totalCount = todos.length;
    const doneCount = todos.filter((todo) => todo.isDone).length;
    const notDoneCount = totalCount - doneCount;

    return { totalCount, doneCount, notDoneCount };
  }, [todos]);
  // 의존성배열: deps, deps에 들어가는 값이 바뀌면 콜백함수를 다시 실행하는 hook

  // const { totalCount, doneCount, notDoneCount } = getAnalyzedDate();

  return (
    <div className="List">
      <h4>Todo List</h4>
      <div>
        <div>totalCount = {totalCount}</div>
        <div>doneCount = {doneCount}</div>
        <div>notDoneCount = {notDoneCount}</div>
      </div>
      <input
        value={search}
        onChange={onChangeSearch}
        placeholder="검색어를 입력하세요."
      ></input>
      <div className="todos_wrapper">
        {filteredTodos.map((todo) => {
          // 리스트 형태의 컴포넌트의 요소를 구분할 때 key prop으로 구분해야 함
          return (
            <TodoItem
              key={todo.id}
              {...todo}
              onUpdate={onUpdate}
              onDelete={onDelete}
            />
          );
        })}
      </div>
    </div>
  );
};

export default List;
