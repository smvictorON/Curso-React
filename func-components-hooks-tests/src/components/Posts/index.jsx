import { PostCard } from '../PostCard';
import './styles.css';
import proptypes from 'prop-types';

export const Posts = ({ posts = [] }) => (
  <div className="posts">
    {posts.map((post) => (
      <PostCard title={post.title} cover={post.cover} body={post.body} key={post.id} id={post.id} />
    ))}
  </div>
);

Posts.defaultProps = {
  posts: [],
};

Posts.propTypes = {
  posts: proptypes.arrayOf(
    proptypes.shape({
      title: proptypes.string.isRequired,
      cover: proptypes.string.isRequired,
      body: proptypes.string.isRequired,
      id: proptypes.number.isRequired,
    }),
  ),
};
