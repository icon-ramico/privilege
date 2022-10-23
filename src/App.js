import {Routes, Route} from 'react-router-dom';

import Login from './Login';
import ProtextA from './ProtextA';
import ProtextB from './ProtextB'
import A from './A'
import AB from './AB'
import B from './B'

function App() {
  const users = [
    {id:1,type:'a'},
    {id:2,type:'b'},
  ]

  return (
    <div className="App">
      <Routes>
      <Route element={<ProtextA />}>
          <Route element={<A />} path='/A' exact />
          <Route element={<AB />} path='/AB'/>
        </Route>
        <Route element={<ProtextB />}>
          <Route element={<B />} path='/B' exact />
          <Route element={<AB />} path='/AB'/>
        </Route>
             <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
