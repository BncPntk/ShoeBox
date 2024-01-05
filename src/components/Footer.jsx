import FooterLink from './FooterLink';
import Logo from './Logo';

import { footerLinksData, helpLinksData, aboutLinksData, socialMediaIcons } from '../data/footerLinkData';

function Footer() {
  const styles = {
    width: '30px',
    height: '30px',
  };

  return (
    <footer className='w-full bg-zinc-900 pt-[48px] pb-[8px] px-4'>
      <div className='max-w-[1152px] mx-auto pr-3'>
        <div className='grid gap-10 text-center text-white md:gap-16 lg:grid-cols-4 lg:text-start'>
          <div className='font-semibold text-md md:text-lg '>
            {footerLinksData.map((link, index) => (
              <h3 key={index} className='mb-[18px]'>
                <FooterLink {...link} />
              </h3>
            ))}
          </div>
          <div className='text-md md:text-lg'>
            <h3 className='mb-6 font-semibold'>Get Help</h3>
            {helpLinksData.map((link, index) => (
              <p key={index} className='my-[8px] md:my-[14px] text-base'>
                <FooterLink {...link} />
              </p>
            ))}
          </div>
          <div className='text-md md:text-lg'>
            <h3 className='mb-6 font-semibold'>About ShoeBox</h3>
            {aboutLinksData.map((link, index) => (
              <p key={index} className='my-[8px] md:my-[14px] text-base'>
                <FooterLink {...link} />
              </p>
            ))}
          </div>
          <div className='flex gap-x-10 lg:gap-x-3.5 justify-center lg:justify-end order-first lg:order-last'>
            {socialMediaIcons.map((icon, index) => (
              <svg key={index} width='100%' height='100%' xmlns='http://www.w3.org/2000/svg' style={styles}>
                <image xlinkHref={icon} height='100%' width='100%' className='hover:cursor-pointer' />
              </svg>
            ))}
          </div>
        </div>
        <div className='grid text-xs sm:text-sm lg:grid-cols-2 text-zinc-700 mt-[52px]'>
          <div className='flex items-end gap-[24px] mx-auto lg:mx-0'>
            <Logo variant={'white'} sizeClass={'size-8'} />
            <p>© 2024 ShoeBox, Inc. All Rights Reserved</p>
          </div>
          <div className='flex items-end lg:justify-self-end gap-[14px] md:gap-[24px] justify-self-center my-8 lg:my-0 text-xs sm:text-sm'>
            {['Guides', 'Terms of Sale', 'Terms of Use', 'Privacy Policy'].map((text, index) => (
              <p key={index} className='hover:cursor-pointer hover:text-zinc-500'>
                {text}
              </p>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
