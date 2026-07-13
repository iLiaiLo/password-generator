import { copySuccess } from "../messages/toastMessages";
const copyPassword = (password) => {
  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(password);
      copySuccess();
    } catch (error) {
      console.log(error.message);
    }
  };
  return { handleCopy };
};

export default copyPassword;
