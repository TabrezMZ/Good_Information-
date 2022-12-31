import "./App.css";
import { useState } from "react"


const informationsDB = {
  HTML: [
    { name: "HTML Forms", info: "An HTML form is used to collect user input. The user input is most often sent to a server for processing." },
    { name: "HTML Event Attributes", info: "HTML has the ability to let events trigger actions in a browser, like starting a JavaScript when a user clicks on an element." },
    { name: "Nested HTML Elements", info: "HTML elements can be nested (this means that elements can contain other elements)." }
  ],

  CSS: [
    {
      name: "CSS Syntax",
      info: "A CSS rule consists of a selector and a declaration block."
    },
    {
      name: "CSS Box Model",
      info: "The CSS box model is essentially a box that wraps around every HTML element. It consists of: margins, borders, padding, and the actual content."
    },
    {
      name: "The z-index Property",
      info: "The z-index property specifies the stack order of an element (which element should be placed in front of, or behind, the others)."
    }
  ],
  JAVASCRIPT: [
    {
      name: "JavaScript Variables",
      info: "Variables are containers for storing data (storing data values)."
    },
    {
      name: "JavaScript Data Types",
      info: "In programming, data types is an important concept. To be able to operate on variables, it is important to know something about the type."
    },
    {
      name: "Boolean Values",
      info: "For this, JavaScript has a Boolean data type. It can only take the values true or false."
    }
  ]
};


const informationsArr = Object.keys(informationsDB)


export default function App() {
  const [topic, setTopic] = useState("HTML")

  function changeTopic(topic) {
    setTopic(topic)
    console.log(topic)
  }


  return (
    <div className="App">
      <h1>Good Information</h1>

      <div>
        {
          informationsArr.map((topic) => (
            <button

              onClick={() => changeTopic(topic)}
              style={{
                cursor: "pointer",
                background: "#E5E7EB",
                borderRadius: "0.5rem",
                padding: "0.5rem  1rem",
                border: "1px solid black",
                margin: "1rem 0.3rem"
              }}>
              {topic}
            </button>
          ))
        }
      </div>
      <hr />

      <div style={{ textAlign: "left" }}>
        <ul style={{ paddingInlineStart: "0" }}>
          {informationsDB[topic].map((information) => (
            <li
              key={information.name}
              style={{
                listStyle: "none",
                padding: "1rem",
                border: "1px solid #D1D5DB",
                width: "70%",
                margin: "1rem 0rem",
                borderRadius: "0.5rem"
              }}
            >
              {" "}
              <h3 style={{ fontSize: "30px", margin: "5px" }}>  {information.name} </h3>
              <hr />
              <p style={{ fontSize: "20px" }}>  {information.info} </p>
            </li>
          ))}
        </ul>
      </div>

    </div>
  );
}
