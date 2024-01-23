function Button({ children, rounded = true, className, onClick, bgColor }) {
  const buttonClassName = `flex items-center justify-center ${
    bgColor || 'bg-zinc-900'
  } text-gray-100 py-1.5 px-6 hover:bg-customBrown active:bg-customDarkBrown transition duration-300 ${
    rounded ? 'rounded-md' : 'rounded-none'
  } ${className || ''}`;

  return (
    <button className={buttonClassName} onClick={onClick}>
      {children}
    </button>
  );
}

export default Button;
