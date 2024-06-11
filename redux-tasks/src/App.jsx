import {Routes,Route} from 'react-router-dom'
import Home from './Pages/Home/Home'


import Task1 from './Pages/Task1/Task1';
import Task2 from './Pages/Task2/Task2';
import Task3 from './Pages/Task3/Task3';
import Task4 from './Pages/Task4/Task4';
import Task5 from './Pages/Task5/Task5';
import Task6 from './Pages/Task6/Task6';
import Task9 from './Pages/Task9/Task9';

function App() {
  
  return <>
      <Routes>
        <Route path = '/' element ={<Home />}/>
        <Route path='/task1' element={<Task1 />} />
        <Route path='/task2' element={<Task2 />} />
        <Route path='/task3' element={<Task3 />} />
        <Route path='/task4' element={<Task4 />} />
        <Route path='/task5' element={<Task5 />} />
        <Route path='/task6' element={<Task6 />} />
        <Route path='/task9' element={<Task9 />} />
      </Routes>
    </>
  
}

export default App
