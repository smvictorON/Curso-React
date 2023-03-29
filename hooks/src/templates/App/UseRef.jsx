import './App.css';
import { useState, useEffect, useMemo, useRef } from 'react';
import proptypes from 'prop-types';

const Post = ({ post, handleClick }) => {
  console.log('filho');
  return (
    <div key={post.id}>
      <h1 onClick={() => handleClick(post.title)}>{post.title}</h1>
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
  handleClick: proptypes.func,
};
const App = () => {
  const [posts, setPosts] = useState([]);
  const [value, setValue] = useState('');
  const input = useRef(null);
  const contador = useRef(0);

  useEffect(() => {
    setTimeout(() => {
      fetch('https://jsonplaceholder.typicode.com/posts')
        .then((r) => r.json())
        .then((r) => setPosts(r));
    }, 1000);
  }, []);

  useEffect(() => {
    input.current.focus();
  }, [value]);

  useEffect(() => {
    contador.current++;
  });

  console.log('pai');

  const handleClick = (value) => {
    setValue(value);
  };

  return (
    <div className="App">
      <h1>Renderizou: {contador.current}</h1>
      <p>
        <input type="search" value={value} onChange={(e) => setValue(e.target.value)} ref={input}></input>
      </p>
      {useMemo(() => {
        return posts.length > 0 && posts.map((post) => <Post key={post.id} post={post} handleClick={handleClick} />);
      }, [posts])}

      {posts.length <= 0 && <p>Não existem Posts!</p>}
    </div>
  );
};

export default App;
