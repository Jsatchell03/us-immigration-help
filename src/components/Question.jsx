import React from "react";

const options = {
  yesNo: ["Yes", "No"],
  states: [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "Armed Forces - America",
    "Armed Forces - Europe",
    "Armed Forces - Pacific",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "District of Columbia",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Northern Mariana Islands",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Palau",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "US Virgin Islands",
    "Utah",
    "Vermont",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming",
  ],
  countries: [
    "Afghanistan",
    "Albania",
    "Algeria",
    "Andorra",
    "Angola",
    "Antigua and Barbuda",
    "Argentina",
    "Armenia",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bhutan",
    "Bolivia",
    "Bosnia and Herzegovina",
    "Botswana",
    "Brazil",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burma",
    "Burundi",
    "Cabo Verde",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Cook Islands",
    "Costa Rica",
    "Côte d'Ivoire",
    "Croatia",
    "Cuba",
    "Cyprus",
    "Czechia",
    "Democratic Republic of the Congo",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Eswatini",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Greece",
    "Grenada",
    "Guatemala",
    "Guinea",
    "Guinea-Bissau",
    "Guyana",
    "Haiti",
    "Holy See",
    "Honduras",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iran",
    "Iraq",
    "Ireland",
    "Israel",
    "Italy",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "North Korea",
    "South Korea",
    "Kosovo",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Liechtenstein",
    "Lithuania",
    "Luxembourg",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Mauritania",
    "Mauritius",
    "Mexico",
    "Micronesia",
    "Moldova",
    "Monaco",
    "Mongolia",
    "Montenegro",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nauru",
    "Nepal",
    "Netherlands",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Niue",
    "North Macedonia",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Portugal",
    "Qatar",
    "Romania",
    "Russia",
    "Rwanda",
    "Saint Kitts and Nevis",
    "Saint Lucia",
    "Saint Vincent and the Grenadines",
    "Samoa",
    "San Marino",
    "Sao Tome and Principe",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "Somalia",
    "South Africa",
    "South Sudan",
    "Spain",
    "Sri Lanka",
    "Sudan",
    "Suriname",
    "Sweden",
    "Switzerland",
    "Syria",
    "Tajikistan",
    "Taiwan",
    "Tanzania",
    "Thailand",
    "Timor-Leste",
    "Togo",
    "Tonga",
    "Trinidad and Tobago",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Tuvalu",
    "Uganda",
    "Ukraine",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Yemen",
    "Zambia",
    "Zimbabwe",
  ],
  nonimmigrantVisas: [
    [
      "A-1",
      "Ambassadors, Public Ministers, Career Diplomats or Consular Officers",
    ],
    ["A-2", "Other Foreign Government Officials or Employees"],
    [
      "A-3",
      "Personal Employees, Attendants, or Domestic Workers of A-1 or A-2 Visa Holders",
    ],
    ["B-1", "Business Visitors"],
    ["B-2", "Tourists or Visitors for Pleasure"],
    ["B-1/B-2", "Combination Business and Tourist Visitor"],
    ["C-1", "Aliens in Transit"],
    ["C-1/D", "Combined Transit and Crew Member Visa"],
    ["C-2", "Aliens in Transit to United Nations Headquarters District"],
    [
      "C-3",
      "Foreign Government Officials, Immediate Family, Attendants, Servants, or Personal Employees in Transit",
    ],
    ["C-4", "Transit to Meet a Lightering Vessel"],
    ["C-4/D-3", "Combined Transit and Lightering Crew Member Visa"],
    ["CW-1", "CNMI-Only Transitional Worker"],
    ["CW-2", "Dependents of CNMI-Only Transitional Workers"],
    ["D", "Crewmembers"],
    ["D-3", "Crewmembers Performing Lightering Activities"],
    ["E-1", "Treaty Traders"],
    ["E-2", "Treaty Investors"],
    ["E-3", "Specialty Occupation Workers from Australia"],
    ["F-1", "Academic Students"],
    ["F-2", "Dependents of F-1 Visa Holders"],
    [
      "G-1",
      "Principal Resident Representative of Recognized Foreign Government to International Organization",
    ],
    [
      "G-2",
      "Other Representative of Recognized Foreign Government to International Organization",
    ],
    [
      "G-3",
      "Representative of Nonrecognized Nonmember Foreign Government to International Organization",
    ],
    ["G-4", "International Organization Officers or Employees"],
    [
      "G-5",
      "Attendants, Servants, or Personal Employees of G-1 to G-4 Visa Holders",
    ],
    ["H-1B", "Specialty Occupation Workers"],
    ["H-2A", "Temporary Agricultural Workers"],
    ["H-2B", "Temporary Non-Agricultural Workers"],
    ["H-3", "Trainees or Special Education Visitors"],
    ["H-4", "Dependents of H-1B, H-2A, H-2B, or H-3 Visa Holders"],
    ["I", "Representatives of Foreign Information Media"],
    ["J-1", "Exchange Visitors (Various Categories)"],
    ["J-2", "Dependents of J-1 Visa Holders"],
    ["K-1", "Fiancé(e) of U.S. Citizen"],
    ["K-2", "Children of K-1 Visa Holders"],
    ["K-3", "Spouses of U.S. Citizens under the LIFE Act"],
    ["K-4", "Children of K-3 Visa Holders"],
    ["L-1A", "Intracompany Transferee Executives or Managers"],
    ["L-1B", "Intracompany Transferee with Specialized Knowledge"],
    ["L-2", "Dependents of L-1 Visa Holders"],
    ["M-1", "Vocational or Other Nonacademic Students"],
    ["M-2", "Dependents of M-1 Visa Holders"],
    ["NATO-1", "Principal Permanent Representative of NATO and Staff"],
    ["NATO-2", "Other Representatives of NATO Member States and Staff"],
    ["NATO-3", "Officials of NATO and Staff"],
    ["NATO-4", "Experts Employed in Missions for NATO"],
    ["NATO-5", "Public Ministers of NATO Member States"],
    ["NATO-6", "Official Clerks of NATO Missions"],
    ["NATO-7", "Attendants, Servants, or Personal Employees of NATO Officials"],
    ["O-1", "Persons With Extraordinary Ability"],
    ["O-2", "Persons Assisting an O-1 Nonimmigrant"],
    ["O-3", "Dependents of O Visa Holders"],
    ["P-1", "Internationally Recognized Athletes or Entertainers"],
    ["P-1S", "Essential Support Personnel of a P-1 Athlete"],
    [
      "P-2",
      "Artists or Entertainers Performing Under a Reciprocal Exchange Program",
    ],
    ["P-2S", "Essential Support Personnel of a P-2 Entertainer"],
    [
      "P-3",
      "Artists or Entertainers Performing, Coaching, or Teaching a Culturally Unique Program",
    ],
    ["P-3S", "Essential Support Personnel of a P-3 Entertainer"],
    ["P-4", "Dependents of P-1A, P-1B, P-2, or P-3 Visa Holders"],
    [
      "Q-1",
      "Persons Participating in a Cultural Exchange Program to Share the Traditions of Their Home Contry",
    ],
    ["R-1", "Religious Workers"],
    ["R-2", "Dependents of R-1 Visa Holderss"],
    ["S", "Witness or Informant"],
    ["T-1", "Victim of Human Trafficking"],
    ["T-2", "Spouse of T-1 Visa Holder"],
    ["T-3", "Unmarried Children Under 21 of T-1 Visa Holder"],
    ["T-4", "Parents of T-1 Visa Holder"],
    ["T-5", "Unmarried Siblings Under 21 of T-1 Visa Holder"],
    ["T-6", "Child of Family Member of T-1 Visa Holder"],
    ["TN", "USMCA Professional Workers"],
    ["TD", "Dependents of USMCA Professional Workers"],
    ["U-1", "Victim of Criminal Activity"],
    ["U-2", "Spouse of U-1 Visa Holder"],
    ["U-3", "Child of U-1 Visa Holder"],
    ["U-4", "Parent of U-1 Visa Holder"],
    ["U-5", "Unmarried Sibling Under 18 of U-1 Visa Holder"],
  ],
  nonimmigrantVisasNotSure: [
    ["Not Sure", "?"],
    [
      "A-1",
      "Ambassadors, Public Ministers, Career Diplomats or Consular Officers",
    ],
    ["A-2", "Other Foreign Government Officials or Employees"],
    [
      "A-3",
      "Personal Employees, Attendants, or Domestic Workers of A-1 or A-2 Visa Holders",
    ],
    ["B-1", "Business Visitors"],
    ["B-2", "Tourists or Visitors for Pleasure"],
    ["B-1/B-2", "Combination Business and Tourist Visitor"],
    ["C-1", "Aliens in Transit"],
    ["C-1/D", "Combined Transit and Crew Member Visa"],
    ["C-2", "Aliens in Transit to United Nations Headquarters District"],
    [
      "C-3",
      "Foreign Government Officials, Immediate Family, Attendants, Servants, or Personal Employees in Transit",
    ],
    ["C-4", "Transit to Meet a Lightering Vessel"],
    ["C-4/D-3", "Combined Transit and Lightering Crew Member Visa"],
    ["CW-1", "CNMI-Only Transitional Worker"],
    ["CW-2", "Dependents of CNMI-Only Transitional Workers"],
    ["D", "Crewmembers"],
    ["D-3", "Crewmembers Performing Lightering Activities"],
    ["E-1", "Treaty Traders"],
    ["E-2", "Treaty Investors"],
    ["E-3", "Specialty Occupation Workers from Australia"],
    ["F-1", "Academic Students"],
    ["F-2", "Dependents of F-1 Visa Holders"],
    [
      "G-1",
      "Principal Resident Representative of Recognized Foreign Government to International Organization",
    ],
    [
      "G-2",
      "Other Representative of Recognized Foreign Government to International Organization",
    ],
    [
      "G-3",
      "Representative of Nonrecognized Nonmember Foreign Government to International Organization",
    ],
    ["G-4", "International Organization Officers or Employees"],
    [
      "G-5",
      "Attendants, Servants, or Personal Employees of G-1 to G-4 Visa Holders",
    ],
    ["H-1B", "Specialty Occupation Workers"],
    ["H-2A", "Temporary Agricultural Workers"],
    ["H-2B", "Temporary Non-Agricultural Workers"],
    ["H-3", "Trainees or Special Education Visitors"],
    ["H-4", "Dependents of H-1B, H-2A, H-2B, or H-3 Visa Holders"],
    ["I", "Representatives of Foreign Information Media"],
    ["J-1", "Exchange Visitors (Various Categories)"],
    ["J-2", "Dependents of J-1 Visa Holders"],
    ["K-1", "Fiancé(e) of U.S. Citizen"],
    ["K-2", "Children of K-1 Visa Holders"],
    ["K-3", "Spouses of U.S. Citizens under the LIFE Act"],
    ["K-4", "Children of K-3 Visa Holders"],
    ["L-1A", "Intracompany Transferee Executives or Managers"],
    ["L-1B", "Intracompany Transferee with Specialized Knowledge"],
    ["L-2", "Dependents of L-1 Visa Holders"],
    ["M-1", "Vocational or Other Nonacademic Students"],
    ["M-2", "Dependents of M-1 Visa Holders"],
    ["NATO-1", "Principal Permanent Representative of NATO and Staff"],
    ["NATO-2", "Other Representatives of NATO Member States and Staff"],
    ["NATO-3", "Officials of NATO and Staff"],
    ["NATO-4", "Experts Employed in Missions for NATO"],
    ["NATO-5", "Public Ministers of NATO Member States"],
    ["NATO-6", "Official Clerks of NATO Missions"],
    ["NATO-7", "Attendants, Servants, or Personal Employees of NATO Officials"],
    ["O-1", "Persons With Extraordinary Ability"],
    ["O-2", "Persons Assisting an O-1 Nonimmigrant"],
    ["O-3", "Dependents of O Visa Holders"],
    ["P-1", "Internationally Recognized Athletes or Entertainers"],
    ["P-1S", "Essential Support Personnel of a P-1 Athlete"],
    [
      "P-2",
      "Artists or Entertainers Performing Under a Reciprocal Exchange Program",
    ],
    ["P-2S", "Essential Support Personnel of a P-2 Entertainer"],
    [
      "P-3",
      "Artists or Entertainers Performing, Coaching, or Teaching a Culturally Unique Program",
    ],
    ["P-3S", "Essential Support Personnel of a P-3 Entertainer"],
    ["P-4", "Dependents of P-1A, P-1B, P-2, or P-3 Visa Holders"],
    [
      "Q-1",
      "Persons Participating in a Cultural Exchange Program to Share the Traditions of Their Home Contry",
    ],
    ["R-1", "Religious Workers"],
    ["R-2", "Dependents of R-1 Visa Holderss"],
    ["S", "Witness or Informant"],
    ["T-1", "Victim of Human Trafficking"],
    ["T-2", "Spouse of T-1 Visa Holder"],
    ["T-3", "Unmarried Children Under 21 of T-1 Visa Holder"],
    ["T-4", "Parents of T-1 Visa Holder"],
    ["T-5", "Unmarried Siblings Under 21 of T-1 Visa Holder"],
    ["T-6", "Child of Family Member of T-1 Visa Holder"],
    ["TN", "USMCA Professional Workers"],
    ["TD", "Dependents of USMCA Professional Workers"],
    ["U-1", "Victim of Criminal Activity"],
    ["U-2", "Spouse of U-1 Visa Holder"],
    ["U-3", "Child of U-1 Visa Holder"],
    ["U-4", "Parent of U-1 Visa Holder"],
    ["U-5", "Unmarried Sibling Under 18 of U-1 Visa Holder"],
  ],
  immigrantVisas: [
    ["IR1", "Spouse of a U.S. Citizen (Immediate Relative)"],
    ["IR2", "Unmarried Child Under 21 of a U.S. Citizen (Immediate Relative)"],
    ["IR3", "Orphan Adopted Abroad by a U.S. Citizen (Immediate Relative)"],
    [
      "IR4",
      "Orphan to be Adopted in the U.S. by a U.S. Citizen (Immediate Relative)",
    ],
    ["IR5", "Parent of a U.S. Citizen (Immediate Relative)"],
    ["CR1", "Spouse of a U.S. Citizen (Conditional Resident)"],
    [
      "CR2",
      "Unmarried Child Under 21 of a U.S. Citizen (Conditional Resident)",
    ],
    ["F1", "Unmarried Sons and Daughters of U.S. Citizens (Family Preference)"],
    [
      "F2A",
      "Spouses and Unmarried Children Under 21 of Lawful Permanent Residents (Family Preference)",
    ],
    [
      "F2B",
      "Unmarried Sons and Daughters (21 years of age or older) of Lawful Permanent Residents (Family Preference)",
    ],
    ["F3", "Married Sons and Daughters of U.S. Citizens (Family Preference)"],
    ["F4", "Brothers and Sisters of U.S. Citizens (Family Preference)"],
    ["K1", "Fiancé(e) of a U.S. Citizen"],
    ["K2", "Children of K1 Visa Holders"],
    ["K3", "Spouse of a U.S. Citizen Awaiting Approval of an I-130 Petition"],
    ["K4", "Children of K3 Visa Holders"],
    ["E1", "Priority Workers (First Employment-Based Preference)"],
    [
      "E2",
      "Professionals Holding Advanced Degrees and Persons of Exceptional Ability (Second Employment-Based Preference)",
    ],
    [
      "E3",
      "Professionals and Other Workers (Third Employment-Based Preference)",
    ],
    ["E4", "Certain Special Immigrants (Fourth Employment-Based Preference)"],
    ["E5", "Immigrant Investors (Fifth Employment-Based Preference)"],
    [
      "C5",
      "Immigrant Investors (Fifth Employment-Based Preference) – Regional Center Program",
    ],
    [
      "T5",
      "Immigrant Investors (Fifth Employment-Based Preference) – Pilot Program",
    ],
    [
      "R5",
      "Immigrant Investors (Fifth Employment-Based Preference) – Regional Center Program",
    ],
    [
      "I5",
      "Immigrant Investors (Fifth Employment-Based Preference) – Pilot Program",
    ],
    [
      "S",
      "Certain Immigrants Seeking to Enter the U.S. for Law Enforcement Purposes",
    ],
    ["SD", "Special Immigrant Religious Workers"],
    ["SR", "Special Immigrant Religious Workers"],
    [
      "SI",
      "Iraqi and Afghan Translators/Interpreters and Certain Iraqis Who Worked for/on Behalf of the U.S. Government",
    ],
    ["SQ", "Afghans Who Worked for/on Behalf of the U.S. Government"],
    ["DV", "Diversity Immigrant Visa (Green Card Lottery)"],
    ["SB", "Returning Resident Visa"],
  ],
};

export default function Question({
  id,
  text,
  highlighted,
  choices,
  answers,
  setAnswers,
}) {
  function handleChange(e) {
    if (choices === "yesNo" && !["yes", "no"].includes(e.target.value)) return;

    console.log(e.target.value);
    setAnswers((prev) => ({
      ...prev,
      [id]: e.target.value,
    }));
  }
  return (
    <div className="mt-20 m-8">
      <hr className="mx-25 border-5 border-red"></hr>
      <h1 className="text-3xl text-center pt-15">{text}</h1>
      {choices === "yesNo" ? (
        <div className="mt-8 flex flex-col gap-4">
          <label
            htmlFor={`${id}-yes`}
            className={`cursor-pointer border-2 border-grey1 rounded-lg w-full h-15 text-xl flex items-center justify-center
                   ${
                     answers[id] == "yes" ? "bg-gray-200" : ""
                   } hover:bg-gray-300 `}
          >
            <input
              type="radio"
              id={`${id}-yes`}
              name={id} // same group
              value="yes"
              checked={answers[id] === "yes"}
              onChange={handleChange}
              className="hidden peer"
            />
            Yes
          </label>
          <label
            htmlFor={`${id}-no`}
            className={`cursor-pointer border-2 border-grey1 rounded-lg w-full h-15 text-xl flex items-center justify-center
                   ${
                     answers[id] == "no" ? "bg-gray-200" : ""
                   } hover:bg-gray-300 `}
          >
            <input
              type="radio"
              id={`${id}-no`}
              name={id}
              value="no"
              checked={answers[id] === "no"}
              onChange={handleChange}
              className="hidden peer"
            />
            No
          </label>
        </div>
      ) : choices === "numberInput" ? (
        <div className="flex justify-center mt-8 md:mx-50 lg:mx-75 xlg:mx-75">
          <input
            className="border-2 border-grey1 w-full h-15 px-5"
            type="number"
            min="1"
            max="200"
            name={id}
            onChange={handleChange}
          />
        </div>
      ) : [
          "nonimmigrantVisas",
          "nonimmigrantVisasNotSure",
          "immigrantVisas",
        ].includes(choices) ? (
        <div className="flex justify-center mt-8 md:mx-50 lg:mx-75 xlg:mx-75">
          <select
            onChange={handleChange}
            value={answers[id] || ""}
            className="border-2 border-grey1 w-full h-15"
          >
            <option value="" disabled>
              Select one...
            </option>
            {options[choices].map((option, index) => (
              <option key={index} value={option[0]}>
                {`${option[0]}: ${option[1]}`}
              </option>
            ))}
          </select>
        </div>
      ) : (
        <div className="flex justify-center mt-8 md:mx-50 lg:mx-75 xlg:mx-75">
          <select
            onChange={handleChange}
            value={answers[id] || ""}
            className="border-2 border-grey1 w-full h-15"
          >
            <option value="" disabled>
              Select one...
            </option>
            {options[choices].map((option, index) => (
              <option key={index} value={option}>
                {`${option}`}
              </option>
            ))}
          </select>
        </div>
      )}
    </div>
  );
}
