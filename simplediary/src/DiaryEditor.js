import React, { useContext, useRef, useState } from "react";
import { DiaryDispatchContext } from "./App";

const DiaryEditor = () => {
  const { onCreate } = useContext(DiaryDispatchContext);

  const now = new Date();
  let year = now.getFullYear();
  let month = (now.getMonth() + 1).toString();
  let date = now.getDate().toString();
  if (month.length === 1) {
    month = `0${month}`;
  }
  if (date.length === 1) {
    date = `0${date}`;
  }

  const contentInput = useRef();
  const [state, setState] = useState({
    date: `${year}-${month}-${date}`,
    content: "내용",
    emotion: 3,
  });

  const handleChangeState = (e) => {
    setState({ ...state, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    if (state.content.length < 1 || state.content === "내용") {
      contentInput.current.focus();
      return;
    }
    onCreate(state.date, state.content, state.emotion);
    alert("저장완료☑️");
    setState({ date: state.date, content: "내용", emotion: 3 });
  };

  return (
    <div className="DiaryEditor">
      <h2>오늘의 일기</h2>
      <input
        type="date"
        name="date"
        value={state.date}
        onChange={handleChangeState}
      />
      <textarea
        ref={contentInput}
        name="content"
        value={state.content}
        onChange={handleChangeState}
      />
      <div>
        <span>오늘의 감정점수 : </span>
        <select
          name="emotion"
          value={state.emotion}
          onChange={handleChangeState}
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
      </div>
      <button onClick={handleSubmit}>일기 저장하기</button>
    </div>
  );
};

export default React.memo(DiaryEditor);
