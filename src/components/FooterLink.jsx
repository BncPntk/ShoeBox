function FooterLink({ title, href }) {
  return (
    <a href={href} className='hover:cursor-pointer hover:text-zinc-500'>
      {title}
    </a>
  );
}

export default FooterLink;
