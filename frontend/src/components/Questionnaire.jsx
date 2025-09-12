import React, { useEffect } from "react";
import { useState } from "react";
import Question from "./question";

export default function Questionnaire() {
  const [questions, setQuestions] = useState({});
  const [rules, setRules] = useState({});
  const [currQuestion, setCurrQuestion] = useState("1");
  const [answers, setAnswers] = useState({});
  const [loading, setLoading] = useState(true);
  const [questionStack, setQuestionStack] = useState([]);
  console.log(answers);
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

  function findNextQuestion(currQuestion) {
    for (const rule of rules[currQuestion]) {
      if (rule.conditions.length == 0) {
        return rule.goto;
      }
      let match = true;
      for (const condition of rule.conditions) {
        switch (condition.operator) {
          case "in":
            match = condition.value.includes(answers[condition.question]);
            break;
          case "==":
            match = condition.value == answers[condition.question];
            break;
          case ">=":
            match = condition.value >= answers[condition.question];
            break;
          case "<=":
            match = condition.value <= answers[condition.question];
            break;
          case ">":
            match = condition.value > answers[condition.question];
            break;
          case "<":
            match = condition.value < answers[condition.question];
            break;
          default:
            match = false;
        }
        if (!match) break;
      }
      if (match) {
        return rule.goto;
      }
    }
    return "done";
  }

  function prevQuestion() {
    if (questionStack.length > 0) {
      setAnswers((prev) => {
        const newAnswers = prev;
        delete newAnswers[currQuestion];
        return newAnswers;
      });
      setQuestionStack((prev) => {
        const newStack = [...prev];
        const last = newStack.pop();
        setCurrQuestion(last);
        return newStack;
      });
    } else {
      setCurrQuestion("1");
    }
  }

  function nextQuestion(currQuestion) {
    if (answers[currQuestion] != "") {
      let nextQuestion = findNextQuestion(currQuestion);
      if (nextQuestion != "done") {
        setQuestionStack((prev) => [...prev, currQuestion]);
        setCurrQuestion(nextQuestion);
      } else {
        console.log("done");
        getResponse(answers);
        // navigate to response/responseCode
        // at that page a get request will be sent
      }
    }
  }

  function getResponse(answers) {}

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
            answers={answers}
          />
          <div id="buttons" className="flex justify-center gap-10 mx-5 mb-5">
            <button
              onClick={prevQuestion}
              className="bg-blue2 hover:bg-blue3 text-white font-bold py-2 px-4 rounded h-xsm w-45"
            >
              Back
            </button>
            <button
              onClick={() => nextQuestion(currQuestion)}
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
