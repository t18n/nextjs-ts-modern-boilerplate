import { FunctionComponent } from 'react';
import Link from 'next/link';

interface Props {
  post: {
    id: string,
    name: string,
  };
  key: string;
}

const PostLink: FunctionComponent<Props> = ({ post, key }) => (
  <li key={key}>
    <Link href={`/post/[id]`} as={`/post/${post.id}`}>
      <a>{post.name}</a>
    </Link>
  </li>
);

export default PostLink;
