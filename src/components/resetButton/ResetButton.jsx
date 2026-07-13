import UseFormReset from "../../hooks/UseFormReset";

const ResetButton = ({
  setFormData,
  setRange,
  setDisplayButton,
  setShowPassword,
  displayButton,
}) => {
  const { handleReset } = UseFormReset({
    setFormData,
    setRange,
    setDisplayButton,
    setShowPassword,
  });
  return (
    <>
      {displayButton ? (
        <div className="flex flex-col justify-center mt-4">
          <button
            type="button"
            onClick={handleReset}
            className="p-2 cursor-pointer border-2 border-gray-300 rounded-md hover:bg-blue-400 hover:text-white"
          >
            Reset
          </button>
        </div>
      ) : null}
    </>
  );
};

export default ResetButton;
