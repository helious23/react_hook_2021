/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useRef } from "react";

const useClick = (onClick) => {
  if (typeof onClick !== "function") {
    return;
  }
  const element = useRef(); // title 태그 가져옴
  useEffect(() => {
    const { current } = element;
    if (current) {
      current.addEventListener("click", onClick);
    }
    return () => {
      // useEffect 에서 return 하는 함수는 componentWillUnMount 일 때 실행됨
      if (current) {
        current.removeEventListener("click", onClick);
      }
    };
  }, []); // dependency 가 없으므로 componentDidUnmount 에 실행 되지 않음
  return element;
};

const App = () => {
  const sayHello = () => console.log("say Hello");
  const title = useClick(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
