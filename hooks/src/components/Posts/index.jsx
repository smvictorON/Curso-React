import { useContext, useEffect, useRef } from 'react';
import { PostsContext } from '../../contexts/PostsProvider/context';
import { CounterContext } from '../../contexts/CounterProvider/context';
import { loadPosts } from '../../contexts/PostsProvider/actions';
import { decrementCounter, incrementCounter } from '../../contexts/CounterProvider/actions';

export const Posts = () => {
  const isMounted = useRef(true);

  const postsContext = useContext(PostsContext);
  const { postsState, postsDispatch } = postsContext;

  const counterContext = useContext(CounterContext);
  const { counterState, counterDispatch } = counterContext;

  useEffect(() => {
    //retornando uma função de loadPosts conseguimos executar ela somente
    //se o componente estiver montado, evitando que requisições sejam jogadas
    //no contexto mesmo após o componente ter sido desmontado
    loadPosts(postsDispatch).then((dispatch) => {
      if (isMounted.current) dispatch();
    });

    //na hora de desmontar colocar o valor atual de isMounted para falso, e como
    //é uma referencia ele vai ficar guardado mesmo na mudança de estado
    return () => {
      isMounted.current = false;
    };
  }, [postsDispatch]);

  return (
    <div>
      <button onClick={() => incrementCounter(counterDispatch)}>Counter {counterState.counter}+</button>
      <button onClick={() => decrementCounter(counterDispatch)}>Counter {counterState.counter}-</button>
      <h1>POSTS</h1>
      {postsState.loading && (
        <p>
          <strong>Carregando Posts...</strong>
        </p>
      )}
      {postsState.posts.map((post) => (
        <p key={post.id}>{post.title}</p>
      ))}
    </div>
  );
};
