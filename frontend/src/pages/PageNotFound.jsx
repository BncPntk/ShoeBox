import { Helmet } from 'react-helmet';
import { getPageTitle } from '../App';
import PageNav from '../components/PageNav';
import Button from '../components/Button';

function PageNotFound() {
  const pageTitle = 'Page Not Found.';

  return (
    <div>
      <Helmet>
        <title>{getPageTitle(pageTitle)}</title>
      </Helmet>
      <PageNav />
      <div className=''>
        <div className='h-screen py-32 mx-auto bg-customDarkPurple max-w'>
          <div className='grid grid-cols-1 gap-4 px-8 mt-8'>
            <h4 className='font-bold text-center text-white text-8xl md:text-9xl'>404</h4>
            <p className='text-2xl font-bold text-center text-white md:text-3xl'>
              The page you were looking for does not exist
            </p>
            <div className='flex justify-center mt-6 md:mt-12'>
              <a href='https://bncpntk-shoebox.netlify.app/'>
                <Button rounded={false}>Home</Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PageNotFound;
