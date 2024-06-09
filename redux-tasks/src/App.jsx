import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'


import Task9 from './Pages/Task9/Task9';

function App() {
  
  return <>
      <Routes>
        <Route path = '/' element ={<Home />}/>
        <Route path='/task9' element={<Task9 />} />
      </Routes>
    </>
  
}

export default App
