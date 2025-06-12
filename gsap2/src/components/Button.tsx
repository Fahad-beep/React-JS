import type { IconType } from "react-icons/lib";

interface ButtonProp {
  className: string;
  title: string;
  icon: IconType;
  id: string;
}

const Button = ({ title, className, icon: Icon, id }: ButtonProp) => {
  return (
    <button
      className={`group rounded-full w-fit z-10 overflow-hidden bg-violet-50 px-7 py-3 text-black cursor-pointer ${className}`}
    >
      <Icon />
      <span className="relative inline-flex overflow-hidden font-general text-xs uppercase">
        <div>{title}</div>
      </span>
    </button>
  );
};

export default Button;
