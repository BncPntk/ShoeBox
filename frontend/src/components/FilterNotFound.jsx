function FilterNotFound({ title }) {
  return (
    <section className='px-4 py-16'>
      <div className='max-w-[1152px] mx-auto'>
        <h2 className='px-4 mb-12 text-4xl font-bold text-center text-zinc-900 lg:text-start'>{title}</h2>
        <div className='flex flex-col gap-4 px-6 py-4 text-xl font-medium text-center md:py-16'>
          <p>Oops! It seems we couldn&apos;t find any shoes that match your current filters.</p>
          <p>Consider adjusting your preferences or exploring our full collection.</p>
        </div>
      </div>
    </section>
  );
}

export default FilterNotFound;
