import React from "react";
import ReactDOM from "react-dom/client";

  const Title = ()=>(
    <h1>hello title</h1>
  );
  const Name = () =>(
    <div>
      <Title />
      <h1>Hellow name</h1>
    </div>
    
  );

  const root = ReactDOM.createRoot(document.getElementById("root"));
  root.render(<Name/>);