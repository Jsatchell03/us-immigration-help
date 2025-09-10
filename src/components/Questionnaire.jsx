import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./question";

const choices = {
  yesNo: ["Yes", "No"],
  states: [],
  countries: [],
  nonImmigrantVisas: [],
  immigrantVisas: [],
};

export default function Questionnaire() {
  const [questions, setQuestions] = useState({});
  const [currQuestion, setCurrQuestion] = useState("1");
  useEffect(() => {
    fetch("/questions.json")
      .then((r) => r.json())
      .then((data) => setQuestions(data));
  }, []);

  return (
    <>
      {questions[currQuestion] ? (
        <p>{questions[currQuestion].text}</p>
      ) : (
        <p>Loading...</p>
      )}
    </>
  );
}
