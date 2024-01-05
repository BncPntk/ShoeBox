import Accordion from './Accordion';
import faqData from '../data/faqData';

function FAQ() {
  return (
    <div className='max-w-[956px] h-full mx-auto mb-24 px-4 lg:px-0'>
      <h2 className='mb-12 text-4xl font-bold text-center text-zinc-900'>Frequently Asked Questions</h2>
      {faqData.map((faq, i) => (
        <Accordion question={faq.question} answer={faq.answer} key={i} />
      ))}
    </div>
  );
}

export default FAQ;
