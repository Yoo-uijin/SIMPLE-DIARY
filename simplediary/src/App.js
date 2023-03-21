import { useRef, useState, useEffect, useMemo, useCallback } from "react";

import "./App.css";
import DiaryEditor from "./DiaryEditor";
import DiaryList from "./DiaryList";

function App() {
  const [data, setData] = useState([]);

  const dataId = useRef(0);

  const getData = async () => {
    const res = await fetch(
      "https://jsonplaceholder.typicode.com/comments"
    ).then((res) => res.json());

    const initData = res.slice(0, 20).map((it) => {
      return {
        date: new Date().toLocaleDateString("ko-KR"),
        content: it.body,
        emotion: Math.floor(Math.random() * 5) + 1,
        id: dataId.current++,
      };
    });
    setData(initData);
  };

  useEffect(() => {
    getData();
  }, []);

  const onCreate = useCallback((date, content, emotion) => {
    const newItem = {
      date,
      content,
      emotion,
      id: dataId.current,
    };
    dataId.current += 1;
    setData((data) => [newItem, ...data]);
  }, []);

  const onRemove = useCallback((targetId) => {
    setData((data) => data.filter((it) => it.id !== targetId));
  }, []);

  const onEdit = useCallback((targetId, newContent) => {
    setData((data) =>
      data.map((it) =>
        it.id === targetId ? { ...it, content: newContent } : it
      )
    );
  }, []);

  const getDiaryAnalysis = useMemo(() => {
    const goodCount = data.filter((it) => it.emotion >= 3).length;
    const badCount = data.length - goodCount;
    const goodRatio = ((goodCount / data.length) * 100).toFixed();
    return { goodCount, badCount, goodRatio };
  }, [data.length]);

  const { goodCount, badCount, goodRatio } = getDiaryAnalysis;

  return (
    <div className="App">
      <DiaryEditor onCreate={onCreate} />
      <ul
        style={{
          listStyle: "none",
          textAlign: "center",
        }}
      >
        <li>전체 일기 : {data.length}개</li>
        <li>기분 좋음 일기: {goodCount}개</li>
        <li>기분 나쁨 일기: {badCount}개</li>
        <li>기분 좋음 일기 비율 : {goodRatio}%</li>
      </ul>
      <DiaryList onRemove={onRemove} diaryList={data} onEdit={onEdit} />
    </div>
  );
}

export default App;
