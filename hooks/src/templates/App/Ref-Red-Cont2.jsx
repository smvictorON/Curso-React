import { Posts } from '../../components/Posts';
import { PostsProvider } from '../../contexts/PostsProvider';
import { CounterProvider } from '../../contexts/CounterProvider';
import './styles.css';

const App = () => {
  return (
    <CounterProvider>
      <PostsProvider>
        <Posts></Posts>
      </PostsProvider>
    </CounterProvider>
  );
};

export default App;
