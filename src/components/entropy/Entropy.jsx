import { getStrength } from "../../utils/getStrength";

const Entropy = ({ entrophy }) => {
  const strength = getStrength(entrophy);

  const { color, label } = strength;
  const roundedEntrophy = Math.round(entrophy);

  return (
    <div className="flex gap-2 text-[18px]">
      <span>entropy</span>
      <span style={{ color }}>{roundedEntrophy}</span>
      <span style={{ color }}>{label}</span>
    </div>
  );
};

export default Entropy;
