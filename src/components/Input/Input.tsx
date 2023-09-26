import { InputHTMLAttributes, useEffect, useState } from "react";
import { useParams, useSearchParams } from "react-router-dom";

type CustomInput = InputHTMLAttributes<HTMLInputElement> & Input;

type Modes = {
  withBorder: string;
  withoutBorder: string;
};

const modes: Modes = {
  withBorder: "border-[red] border-[1px]",
  withoutBorder: "",
};

interface Input {
  rightIcon?: JSX.Element;
  mode?: keyof Modes;
}

export const Input = ({
  rightIcon,
  mode = "withoutBorder",
  ...props
}: CustomInput) => {
  const [searchParams, setSearchParams] = useSearchParams();
  const [showIcon, setShowIcon] = useState(true);
  const handleInputFocus = () => {
    setSearchParams({
      aboba: "asd",
      fff: "asd",
    });
  };

  ("htttp://asfasf/posts/124");
  const handleInputBlur = () => {
    setSearchParams({});
  };
  //   console.log(searchParams.get("fff"));

  return (
    <div className="relative w-full">
      <input
        className={`w-full pr-[15px] ${modes[mode]}`}
        {...props}
        onFocus={handleInputFocus}
        onBlur={handleInputBlur}
      />
      {rightIcon && showIcon && (
        <div className="absolute top-[50%] -translate-y-[50%] right-[5px]">
          {rightIcon}
        </div>
      )}
    </div>
  );
};
