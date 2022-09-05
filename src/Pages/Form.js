import React from "react";
import { useVruttaContext } from "../hooks/useVruttaContext";

function Form() {
  const { dispatch } = useVruttaContext();
  const [userInput, setUserInput] = React.useState({
    vrutta: "",
    vruttasanskrit: "",
    characteristics: "",
    charnakshar: "नाही",
    gana: "नाही",
    yati: "नाही",
    example: "",
  });

  const [error, setError] = React.useState(null);

  function handleChange(event) {
    const { name, value } = event.target;

    setUserInput((prevInput) => {
      return {
        ...prevInput,
        [name]: value,
      };
    });
  }

  const handleClick = async (e) => {
    e.preventDefault();

    const newVrutta = {
      vrutta: userInput.vrutta,
      vruttasanskrit: userInput.vruttasanskrit,
      characteristics: userInput.characteristics,
      charnakshar: userInput.charnakshar,
      gana: userInput.gana,
      yati: userInput.yati,
      example: userInput.example,
    };

    const response = await fetch("/api/vruttas", {
      method: "POST",
      body: JSON.stringify(newVrutta),
      headers: {
        "Content-Type": "application/json",
      },
    });
    const json = await response.json();
    if (!response.ok) {
      setError(json.error);
    }
    if (response.ok) {
      setError(null);
      console.log("Vrutta Added to the Database", json);
      dispatch({ type: "CREATE_VRUTTA", payload: json });
    }
  };

  return (
    <div className="Page">
      <form className="Form">
        <input
          className="VN"
          name="vrutta"
          placeholder="Enter Vrutta name in English Here"
          autoComplete="off"
          onChange={handleChange}
          value={userInput.vrutta}
        />
        <input
          className="VN"
          name="vruttasanskrit"
          placeholder="Enter Vrutta name in Sanskrit Here"
          autoComplete="off"
          onChange={handleChange}
          value={userInput.vruttasanskrit}
        />
        <textarea
          className="EPS"
          name="characteristics"
          placeholder="characteristics Poem in Sanskrit"
          autoComplete="off"
          onChange={handleChange}
          value={userInput.characteristics}
        />
        <input
          defaultValue={"nahi"}
          className="VN"
          name="charnakshar"
          placeholder="Enter चरणाक्षर "
          onChange={handleChange}
          value={userInput.charnakshar}
        />
        <input
          defaultValue={"nahi"}
          className="VN"
          name="gana"
          placeholder="Enter गण "
          onChange={handleChange}
          value={userInput.gana}
        />
        <input
          default="nahi"
          className="VN"
          name="yati"
          placeholder="Enter यति "
          onChange={handleChange}
          value={userInput.yati}
        />
        <textarea
          className="EPS"
          name="example"
          placeholder="Give Example here"
          autoComplete="off"
          onChange={handleChange}
          value={userInput.example}
        />
        <button onClick={handleClick}>Click me</button>
        {error && <div className="error">{error}</div>}
      </form>
    </div>
  );
}

export default Form;
