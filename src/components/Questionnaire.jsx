import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./question";

export default function Questionnaire() {
  const [questions, setQuestions] = useState({});
  const [rules, setRules] = useState({});
  const [currQuestion, setCurrQuestion] = useState("4");
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function loadData() {
      setLoading(true);
      const [qRes, rRes] = await Promise.all([
        fetch("/questions.json"),
        fetch("/questionnaire-rules.json"),
      ]);

      const [questions, rules] = await Promise.all([qRes.json(), rRes.json()]);

      setQuestions(questions);
      setRules(rules);
      setLoading(false);
    }

    loadData();
  }, []);

  function prevQuestion() {
    pass;
  }

  function nextQuestion() {
    pass;
  }

  return (
    <>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <>
          <Question
            id={currQuestion}
            text={questions[currQuestion].text}
            highlighted={questions[currQuestion].highlighted}
            choices={questions[currQuestion].choices}
            setAnswers={setAnswers}
          />
          <div id="buttons" className="flex justify-center gap-10 mx-5 mb-5">
            <button
              onClick={prevQuestion}
              className="bg-blue2 hover:bg-blue3 text-white font-bold py-2 px-4 rounded h-xsm w-45"
            >
              Back
            </button>
            <button
              onClick={nextQuestion}
              className="bg-red2 hover:bg-red3 text-white font-bold py-2 px-4 rounded h-xsm w-45"
            >
              Next
            </button>
          </div>
        </>
      )}
    </>
  );
}

function findNextQuestion(answers, currQuestion, rules) {
  pass;
}
