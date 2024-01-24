import Card from './Card';

function CardGroup({ title, type }) {
  return (
    <section className='px-4 py-16'>
      <div className='max-w-[1152px] mx-auto'>
        <h2 className='px-4 mb-12 text-4xl font-bold text-center text-zinc-900 lg:text-start'>{title}</h2>
        <div className='grid grid-cols-1 px-2 justify-items-center sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
          {type.map((shoe, i) => (
            <Card key={i} brand={shoe.brand} name={shoe.name} price={shoe.price} img={shoe.imageCover} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default CardGroup;
