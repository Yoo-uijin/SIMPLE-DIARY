import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

const dummyList = [
  {
    id: 1,
    date: "2023-03-01",
    content: "1일의 일기",
    emotion: 5,
  },
  {
    id: 2,
    date: "2023-03-02",
    content: "2일의 일기",
    emotion: 3,
  },
  {
    id: 3,
    date: "2023-03-03",
    content: "3일의 일기",
    emotion: 4,
  },
];

function App() {
  return (
    <div className="App">
      <DiaryEditor />
      <DiaryList diaryList={dummyList} />
    </div>
  );
}

export default App;
