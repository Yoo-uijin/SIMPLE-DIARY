import React from "react";

const DiaryItem = ({ date, content, emotion, id }) => {
  return (
    <li className="DiaryItem">
      <div className="info">
        <span>
          날짜 : {date} | 감정점수 : {emotion}
        </span>
      </div>
      <div className="content">{content}</div>
    </li>
  );
};

export default DiaryItem;
