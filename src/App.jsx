import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Todo from './Todo'
function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <React></React>
      {/* <Devices name="laptop" price="70K"></Devices>
      <Devices name="Watch" price="1K"></Devices>
      <Devices name="Phone" price="30K"></Devices>
      <Devices name="Tablet" price="45K"></Devices>

      <Student id="1" name="Rafayet" grade="A"></Student>
      <Student id="2" name="Saikot" grade="A"></Student>
      <Student id="3" name="Alif" grade="A"></Student>
      <Student id="4" name="Liton" grade="A"></Student> */}
      <Todo task="learn react" isDone={true}></Todo>
      <Todo task="Props" isDone={false}></Todo>
      <Todo task="Props with distructer" isDone={true}></Todo>
      <Todo task="Props with export import" isDone={false}></Todo>
    </>
  );
}

function React() {
  return (
    <div>
      <h1>I am learning react</h1>
    </div>
  );
}

function Devices(props) {
  return (
    <div>
      <div className="devices">
        <p>
          This is a {props.name} and price is {props.price}{" "}
        </p>
      </div>
    </div>
  );
}

// Advanced Way

function Student({ id, name, grade }) {
  return (
    <div className="card">
      <div className="student">
        <h4>Student Id: {id}</h4>
        <p>Name: {name}</p>
        <p>Grade: {grade}</p>
      </div>
    </div>
  );
}

export default App;
