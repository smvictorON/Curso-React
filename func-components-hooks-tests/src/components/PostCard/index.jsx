import './styles.css';
import proptypes from 'prop-types';

export const PostCard = ({ title, cover, body, id }) => (
  <div key={id} className="post">
    <img src={cover} alt={title}></img>
    <div className="post-content">
      <h2>{title}</h2>
      <p>{body}</p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: proptypes.string.isRequired,
  cover: proptypes.string.isRequired,
  body: proptypes.string.isRequired,
  id: proptypes.number.isRequired,
};
