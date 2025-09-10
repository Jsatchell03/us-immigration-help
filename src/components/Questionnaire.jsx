import React from "react";
import { useState } from "react";

const choices = {
  yesNo: ["Yes", "No"],
  states: [],
  countries: [],
  nonImmigrantVisas: [],
  immigrantVisas: [],
};

export default function Questionnaire() {
  const [currQuestion, setCurrQuestion] = useState(0);

  return <div>Questionnaire</div>;
}
