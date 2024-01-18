import { useState } from 'react';
import ArrowIcon from './ArrowIcon';

function Accordion({ question, answer }) {
  const [accOpen, setAccOpen] = useState(false);

  return (
    <div className='p-6 my-6 bg-zinc-200'>
      <button
        className={`flex justify-between items-end w-full ${accOpen ? ' border-b-4 border-zinc-900' : ''}`}
        onClick={() => setAccOpen(!accOpen)}
      >
        <h3 className='px-2 pb-2 text-base font-medium md:px-0 md:text-lg lg:text-xl'>{question}</h3>
        <div className='flex items-center justify-center cursor-pointer min-h-12 min-w-12 bg-zinc-900 '>
          <ArrowIcon rotation={accOpen ? -90 : 90} size={27} />
        </div>
      </button>
      <div
        className={`grid overflow-hidden transition-all ease-in-out duration-300 ${
          accOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'
        }`}
      >
        <p
          className={`px-4 md:px-0 overflow-hidden text-sm font-medium max-w-4xl mx-auto ${
            accOpen ? 'pt-3' : ''
          }`}
        >
          {answer}
        </p>
      </div>
    </div>
  );
}

export default Accordion;
