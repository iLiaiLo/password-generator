import { generateSuccess, generateWarn } from "../messages/toastMessages";
import GeneratedPassword from "../utils/generatePassword";
import formDataArray from "../utils/globalFormVariables";
import randomCharRanges from "../utils/randomCharRanges";

const UseFormSubmit = ({ range, setFormData, formData, setDisplayButton }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      const Data = formDataArray(formData);
      const someFiledNotFilled = Data.every((elem) => !elem);
      if (someFiledNotFilled) {
        generateWarn();
        return;
      }
      const RandRages = randomCharRanges(Data);
      const generatedPassword = GeneratedPassword(range, RandRages);
      setFormData({ ...formData, generatedPassword });
      setDisplayButton(true);
      generateSuccess();
    } catch (error) {
      console.log(error.message);
    }
  };
  return { handleSubmit };
};

export default UseFormSubmit;
