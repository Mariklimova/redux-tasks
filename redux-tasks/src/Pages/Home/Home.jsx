import { Link } from 'react-router-dom'

function Home() {
    return <>
        <h1>redux tasks</h1>

        <p><Link to={'/task1'}>Перейти к задаче 1</Link></p>
        <p><Link to={'/task2'}>Перейти к задаче 2</Link></p>
        <p><Link to={'/task3'}>Перейти к задаче 3</Link></p>
        <p><Link to={'/task4'}>Перейти к задаче 4</Link></p>
        <p><Link to={'/task5'}>Перейти к задаче 5</Link></p>
        <p><Link to={'/task6'}>Перейти к задаче 6</Link></p>
        <p><Link to={'/task9'}>Перейти к задаче 9</Link></p>
   
    </>
}
export default Home