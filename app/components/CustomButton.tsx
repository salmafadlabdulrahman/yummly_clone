import { CustomButtonProps } from "../types";

const CustomButton = ({ text, background, height, width }: CustomButtonProps) => {
  return (
    <button
      style={{ backgroundColor: background, height: height, width: width }}
      className={`mt-[2em] text-white font-bold text-[14px] rounded-[50px] cursor-pointer`}
    >
      {text}
    </button>
  );
};

export default CustomButton;