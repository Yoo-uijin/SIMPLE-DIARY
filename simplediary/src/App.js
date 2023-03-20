import { useRef, useState } from "react";

import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";
import Lifecycle from "./Lifecycle";

// const dummyList = [
//   {
//     id: 1,
//     date: "2023-03-01",
//     content: "1일의 일기",
//     emotion: 5,
//   },
//   {
//     id: 2,
//     date: "2023-03-02",
//     content: "2일의 일기",
//     emotion: 3,
//   },
//   {
//     id: 3,
//     date: "2023-03-03",
//     content: "3일의 일기",
//     emotion: 4,
//   },
// ];

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const onCreate = (date, content, emotion) => {
    const newItem = {
      date,
      content,
      emotion,
      id: dataId.current,
    };
    dataId.current += 1;
    setData([newItem, ...data]);
  };

  const onRemove = (targetId) => {
    const newDiaryList = data.filter((it) => it.id !== targetId);
    setData(newDiaryList);
  };

  const onEdit = (targetId, newContent) => {
    setData(
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  };

  return (
    <div className="App">
      <Lifecycle />
      <DiaryEditor onCreate={onCreate} />
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
