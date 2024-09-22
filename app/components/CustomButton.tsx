import { CustomButtonProps } from "../types";

const CustomButton = ({ text, background }: CustomButtonProps) => {
  return (
    <button
      style={{ backgroundColor: background }}
      className="mt-[2em] text-white font-bold py-[.8em] px-7 text-[14px] rounded-[50px] cursor-pointer"
    >
      {text}
    </button>
  );
};

export default CustomButton;
