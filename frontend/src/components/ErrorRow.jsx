function ErrorRow() {
  return (
    <section className='px-4 py-16 '>
      <div className='max-w-[1152px] mx-auto'>
        <div className='flex justify-center'>
          <div className='px-8 py-4 text-2xl text-center text-white bg-black'>
            <p>Oops! Something went wrong while fetching data from the server.</p>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ErrorRow;
