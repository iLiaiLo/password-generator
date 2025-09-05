import { generateSuccess, generateWarn } from "../../messages/toastMessages";
import GeneratedPassword from "../generatePassword";
import formDataArray from "../globalFormVariables";
import randomCharRanges from "../randomCharRanges";
import { timeDelay } from "../timeDelay/timeDelay";

const UseFormSubmit = ({
  range,
  setFormData,
  formData,
  setDisplayButton,
  setLoading,
}) => {
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const Generate = (form) => {
        const Data = formDataArray(form);
        if (Data.every((elem) => !elem)) {
          generateWarn();
          return;
        }
        const RandRages = randomCharRanges(Data);
        const generatedPassword = GeneratedPassword(range, RandRages);
        setFormData({ ...formData, generatedPassword });
        setDisplayButton(true);
        generateSuccess();
      };

      setLoading(true);
      await timeDelay(2000);
      setLoading(false);
      Generate(formData);
    } catch (error) {
      console.log(error.message);
    }
  };
  return { handleSubmit };
};

export default UseFormSubmit;
