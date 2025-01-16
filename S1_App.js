import React from "react";
import ReactDOM from "react-dom/client";

//React Element
const Title = () => (
  <h1 className="head" tabIndex="5">
    Namaste React Using JSX
  </h1>
);

//React Functional Component
const HeadingComponent = () => (
  <div id="container">
    {Title()} {/*There are three way to call React component */}
    <Title />
    <Title></Title>
    <h1 className="heading">Namaste React Functional Component</h1>
  </div>
);

const root1 = ReactDOM.createRoot(document.getElementById("root"));
root1.render(<HeadingComponent />);

// 01:39:05
