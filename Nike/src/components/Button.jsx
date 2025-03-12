const Button = ({ label, iconURL }) => {
  return (
    <button className="flex rounded-full justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none bg-coral-red text-white  border-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="w-5 h-5 rounded-full ml-2"
      />
    </button>
  );
};

export default Button;
