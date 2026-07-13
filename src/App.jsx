import { useState } from "react";

import { ToastContainer, Bounce } from "react-toastify";

import Password from "./components/generated-password/Password";
import PasswordRange from "./components/password-range/PasswordRange";
import UpperCaseCheck from "./components/checkBoxes/UpperCaseCheck";
import LowerCaseCheck from "./components/checkBoxes/LowerCaseCheck";
import NumberCheck from "./components/checkBoxes/NumberCheck";
import CharactersCheck from "./components/checkBoxes/CharactersCheck";
import Submit from "./components/submit/Submit.jsx";
import ShowHide from "./components/show-hide-button/ShowHide";
import ResetButton from "./components/resetButton/resetButton";
import CopyButton from "./components/copyButton/CopyButton";

import UseFormSubmit from "./hooks/UseFormSubmit";
import UseToggle from "./hooks/UseToggle";
import Entropy from "./components/entropy/Entropy.jsx";
import UseCalculateEntrophy from "./hooks/UseCalculateEntrophy";

function App() {
  const [showPassword, setShowPassword] = useState(false);
  const [displayButton, setDisplayButton] = useState(false);
  const [range, setRange] = useState(4);
  const [formData, setFormData] = useState({
    generatedPassword: "",
    upperCase: false,
    lowerCase: false,
    number: false,
    char: false,
  });

  const { entrophy } = UseCalculateEntrophy({ formData, range });

  const { handleSubmit } = UseFormSubmit({
    range,
    setFormData,
    formData,
    setDisplayButton,
  });

  const { showHide } = UseToggle({ setShowPassword });

  return (
    <>
      <section
        className="border-2 border-gray-300 rounded-lg mx-auto
        mt-[20px] p-4 bg-white shadow-md w-full max-w-[500px] text-2xl flex flex-col gap-4"
      >
        <form onSubmit={handleSubmit} className="flex flex-col gap-3">
          <Password showPassword={showPassword} formData={formData} />
          <PasswordRange range={range} setRange={setRange} />
          <UpperCaseCheck formData={formData} setFormData={setFormData} />
          <LowerCaseCheck formData={formData} setFormData={setFormData} />
          <NumberCheck formData={formData} setFormData={setFormData} />
          <CharactersCheck formData={formData} setFormData={setFormData} />
          <Entrophy entrophy={entrophy} />
          <Submit />
        </form>
        <ShowHide
          displayButton={displayButton}
          showHide={showHide}
          showPassword={showPassword}
        />
        <CopyButton formData={formData} displayButton={displayButton} />
        <ResetButton
          setFormData={setFormData}
          setRange={setRange}
          setShowPassword={setShowPassword}
          displayButton={displayButton}
          setDisplayButton={setDisplayButton}
        />
      </section>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
        transition={Bounce}
      />
    </>
  );
}

export default App;
