import './App.css';
import { useState, useEffect, useMemo } from 'react';
import proptypes from 'prop-types';

const Post = ({ post }) => {
  console.log('filho');
  return (
    <div key={post.id}>
      <h1>{post.title}</h1>
      <p>{post.body}</p>
    </div>
  );
};

Post.propTypes = {
  post: proptypes.shape({
    id: proptypes.number,
    title: proptypes.string,
    body: proptypes.string,
  }),
};
const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 1000);
  }, []);

  console.log('pai');

  return (
    <div className="App">
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)}></input>
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} />);
      }, [posts])}

      {posts.length <= 0 && <p>Não existem Posts!</p>}
    </div>
  );
};

export default App;
