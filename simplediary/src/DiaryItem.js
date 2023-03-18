import React from "react";

const DiaryItem = ({ date, content, emotion, id, onRemove }) => {
  const handleRemove = () => {
    if (window.confirm(`${id}번째 일기를 정말 삭제하시겠습니까?`)) {
      onRemove(id);
    }
  };

  return (
    <li className="DiaryItem">
      <div className="info">
        <span>
          날짜 : {date} | 감정점수 : {emotion}
        </span>
      </div>
      <div className="content">{content}</div>
      <button onClick={handleRemove}>삭제</button>
    </li>
  );
};

export default DiaryItem;
