const Button = ({
  label,
  iconURL,
  backgroundColor,
  textColor,
  borderColor,
}) => {
  return (
    <button
      className={`cursor-pointer rounded-full flex justify-center items-center gap-2 px-7 py-4 border font-montserrat text-lg leading-none
        ${backgroundColor ? backgroundColor : "bg-coral-red"} 
        ${textColor ? textColor : "text-white"} 
        ${borderColor ? borderColor : "border-coral-red"}`}
    >
      {label}
      {iconURL && (
        <img
          src={iconURL}
          className="ml-2 rounded-full w-5 h-5"
          alt="arrow right icon"
        />
      )}
    </button>
  );
};

export default Button;
