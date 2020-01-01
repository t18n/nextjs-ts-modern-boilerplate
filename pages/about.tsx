import Layout from '~/components/fractals/Layout';
import { NextPage } from 'next';
import { useAmp } from 'next/amp';

export const config = { amp: 'hybrid' };

const About: NextPage = () => {
  const isAmp = useAmp();

  return (
    <Layout>
      <div>
        <p>This is the about page</p>
        {isAmp ? (
          <amp-img
            width="300"
            height="200"
            src="http://placekitten.com/200/300"
            alt="Kitten"
            layout="responsive"
          />
        ) : (
          <img src="http://placekitten.com/200/300" alt="Kitten" width="300" height="200" />
        )}
      </div>
    </Layout>
  );
};

export default About;
