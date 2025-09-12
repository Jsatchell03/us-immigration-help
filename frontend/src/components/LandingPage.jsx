import { useNavigate } from "react-router";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

import "../App.css";
import fullLogo from "../assets/Full_Logo.jpg";

function LandingPage() {
  let navigate = useNavigate();
  return (
    <div className="mb-5">
      <div className="flex justify-center" id="main-logo">
        <img className="h-lg w-lg object-center" src={fullLogo} />
      </div>
      <h1 className="text-3xl font-bold text-center">
        Your step-by-step guide through the immigration process
      </h1>
      <div id="start-btn" className="flex justify-center py-5">
        <button
          className="bg-blue2 hover:bg-blue3 text-white font-bold py-2 px-4 rounded h-lg w-lg"
          onClick={() => navigate("/questionnaire")}
        >
          Get Started
        </button>
      </div>
      <h2 className="text-2xl font-bold text-center mb-5">How it works</h2>
      <div id="icons" className="grid grid-cols-1 md:grid-cols-3 gap-8 mx-5">
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md flex-1">
          <FontAwesomeIcon icon="fa-solid fa-question" className="text-8xl" />
          <p className="pt-5">Answer a few questions</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md flex-1">
          <FontAwesomeIcon icon="fa-solid fa-list-check" className="text-8xl" />
          <p className="pt-5">Get your personalized checklist</p>
        </div>
        <div className="flex flex-col items-center text-center p-6 rounded-xl shadow-md flex-1">
          <FontAwesomeIcon icon="fa-solid fa-timeline" className="text-8xl" />
          <p className="pt-5">Follow the step-by-step instructions</p>
        </div>
      </div>
    </div>
  );
}

export default LandingPage;
