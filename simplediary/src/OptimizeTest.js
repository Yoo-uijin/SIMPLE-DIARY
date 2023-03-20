import React, { useEffect, useState } from "react";

const CounterA = React.memo(({ count }) => {
  useEffect(() => {
    console.log(`CounterA Update - ${count}`);
    // 리렌더링되지 않는다.
  });

  return <div>{count}</div>;
});

const CounterB = React.memo(({ obj }) => {
  useEffect(() => {
    console.log(`CounterB Update - ${obj.count}`);
    // 리렌더링되어 콘솔창에 업데이트 결과가 출력된다. 객체는 얕은 비교를 하기 때문이다.
  });

  return <div>{obj.count}</div>;
});

const OptimizeTest = () => {
  const [count, setCount] = useState(1);
  const [obj, setObj] = useState({
    count: 1,
  });

  return (
    <div style={{ padding: 50 }}>
      <div>
        <h2>Counter A</h2>
        <CounterA count={count} />
        <button
          onClick={() => {
            setCount(count);
          }}
        >
          A button
        </button>
      </div>
      <div>
        <h2>Counter B</h2>
        <CounterB obj={obj} />
        <button
          onClick={() => {
            setObj({ count: obj.count });
          }}
        >
          B button
        </button>
      </div>
    </div>
  );
};

export default OptimizeTest;
