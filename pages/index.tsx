import Layout from '~/components/fractals/Layout';
import { NextPage } from 'next';
import dynamic from 'next/dynamic';

const PostList = dynamic(() => import('~/components/fractals/Posts'), {
  loading: () => <p>Loading posts...</p>,
});

const Index: NextPage = () => (
  <Layout>
    <PostList />
  </Layout>
);

export default Index;
