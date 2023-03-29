///* eslint-disable */
import { useEffect, useRef, useState } from 'react';

//este código não está bem feito, fiz um comentário no curso

const isObjEqual = (objA, objB) => {
  return JSON.stringify(objA) === JSON.stringify(objB);
};

const useFetch = (url, options) => {
  const [result, setResult] = useState(null);
  const [loading, setLoading] = useState(false);
  const [shouldLoad, setShouldLoad] = useState(false);

  const urlRef = useRef(url);
  const optionsRef = useRef(options);

  console.log(options.headers);

  useEffect(() => {
    let changed = false;

    if (urlRef.current !== url) {
      urlRef.current = url;
      changed = true;
    }

    if (!isObjEqual(optionsRef.current, options)) {
      optionsRef.current = options;
      changed = true;
    }

    if (changed) setShouldLoad((sl) => !sl);
  }, [url, options]);

  useEffect(() => {
    let wait = false;
    //usado para abortar o fetch no momento em que desmonta o component
    const controller = new AbortController();
    const signal = controller.signal;
    setLoading(true);
    const fetchData = async () => {
      await new Promise((r) => setTimeout(r, 1000));

      try {
        const res = await fetch(urlRef.current, { ...optionsRef.current, signal });
        const jsonResult = await res.json();
        if (!wait) {
          setResult(jsonResult);
          setLoading(false);
        }
      } catch (err) {
        if (!wait) {
          setLoading(false);
        }
        console.log(err);
        throw err;
      }
    };

    fetchData();
    return () => {
      wait = true;
      controller.abort();
    };
  }, [shouldLoad]);

  return [result, loading];
};

export const App = () => {
  const [postId, setPostId] = useState('');
  const [result, loading] = useFetch('https://jsonplaceholder.typicode.com/posts/' + postId, {
    method: 'GET',
    headers: {
      abc: 12 + postId,
    },
  });

  const handleClick = (id) => {
    setPostId(id);
  };

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!loading && result) {
    return (
      <div>
        {result?.length > 0 ? (
          result.map((p) => (
            <p key={p.id} onClick={() => handleClick(p.id)}>
              {p.title}
            </p>
          ))
        ) : (
          <p key={result.id} onClick={() => handleClick('')}>
            {result.title}
          </p>
        )}
      </div>
    );
  }

  return <h1>oi</h1>;
};

export default App;
