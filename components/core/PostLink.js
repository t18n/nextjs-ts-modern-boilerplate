import Link from 'next/link';

const PostLink = ({ post }) => (
  <li>
    <Link href={`/post?title=${post.title}`}>
      <a>{post.title}</a>
    </Link>
  </li>
);

export default PostLink;
