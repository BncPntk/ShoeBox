function Button({ children, rounded = true }) {
  const buttonClassName = `bg-zinc-900 text-gray-100 py-1.5 px-6 hover:bg-customBrown active:bg-customDarkBrown ${
    rounded ? 'rounded-md' : 'rounded-none'
  }`;

  return <button className={buttonClassName}>{children}</button>;
}

export default Button;
