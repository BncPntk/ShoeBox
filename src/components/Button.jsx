function Button({ children }) {
  return (
    <button className='bg-zinc-900 text-gray-100 rounded-md py-1.5 px-6 hover:bg-customBrown active:bg-customDarkBrown'>
      {children}
    </button>
  );
}

export default Button;
