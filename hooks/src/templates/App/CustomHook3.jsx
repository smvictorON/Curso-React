/* eslint-disable */
import { useCallback, useEffect, useState } from 'react';

//este código não está bem feito, fiz um comentário no curso

const useAsync = (asyncFunc, shouldRun) => {
  const [state, setState] = useState({
    result: null,
    error: null,
    status: 'idle'
  })

  const run = useCallback(async () => {
    console.log(new Date().toLocaleDateString());
    await new Promise(r => setTimeout(r, 2000))

    setState({
      result: null,
      error: null,
      status: 'pending'
    })
    await new Promise(r => setTimeout(r, 2000))

    return asyncFunc()
      .then((res) => {
        setState({
          result: res,
          error: null,
          status: 'settled'
        })
      })
      .catch((err) => {
        setState({
          result: null,
          error: err,
          status: 'error'
        })
      });
  }, [asyncFunc]);

  useEffect(() => {
    if (shouldRun) run();
  }, [run, shouldRun]);

  return [run, state.result, state.error, state.status];
};

const fetchData = async () => {
  //para testar situações de erro
  // throw new Error("Falhou!")
  await new Promise(r => setTimeout(r, 2000))
  const data = await fetch('https://jsonplaceholder.typicode.com/posts');
  const json = await data.json();
  return json;
};

export const App = () => {
  const [posts, setPosts] = useState(null);
  //se colocar o segundo parametro como false só executar o useEffect abaixo
  const [reFetchData, result, error, status] = useAsync(fetchData, true);

  // useEffect(() => {
  //   reFetchData();
  // }, []);

  if(status === 'idle')
    return <pre>idle</pre>;

  if(status === 'pending')
    return <pre>pending</pre>;

  if(status === 'error')
    return <pre>{error.message}</pre>;

  if(status === 'settled')
    return <pre>{JSON.stringify(result, null, 2)}</pre>;
};

export default App;
