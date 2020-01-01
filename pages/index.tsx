import Layout from '~/components/fractals/Layout';
import PostList from '~/components/fractals/Posts';
import { NextPage } from 'next';

const Index: NextPage = () => (
  <Layout>
    <PostList />
  </Layout>
);

export default Index;
