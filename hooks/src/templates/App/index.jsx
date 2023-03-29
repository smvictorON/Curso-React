/* eslint-disable */
import { useState, lazy, Suspense } from 'react';
//método normal
// import LazyComponent from '../../components/LazyComponent';
//método lazy
// const LazyComponent = lazy(() => import ('../../components/LazyComponent'))
//método lazy externando a função

const loadComponent = () => {
  console.log('importando')
  return import ('../../components/LazyComponent')
}
const LazyComponent = lazy(loadComponent)

export const App = () => {
  const [show, setShow] = useState(false)
  return (
    <div>
      {/* podemos usar essa abordagem para carregar algo vinculado a uma ação */}
      <button onClick={() => setShow(c => !c)} onMouseOver={loadComponent}>Show</button>
      <Suspense fallback={<p>Carregando!</p>}>
        {show && <LazyComponent></LazyComponent>}
      </Suspense>
    </div>
  );
};

export default App;
