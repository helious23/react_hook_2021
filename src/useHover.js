import React, { useEffect, useRef } from "react";

const useHover = (onHover) => {
  // if (typeof onClick !== "function") {
  //   return;
  // }
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      element.current.addEventListener("mouseenter", onHover);
    }
    return () => {
      if (element.current) {
        element.current.removeEventListener("mouseenter", onHover);
      }
    };
  }, []);
  return element;
};

const App = () => {
  const sayHello = () => console.log("I'm on");
  const title = useHover(sayHello);
  return (
    <div className="App">
      <h1 ref={title}>Hi</h1>
    </div>
  );
};

export default App;
