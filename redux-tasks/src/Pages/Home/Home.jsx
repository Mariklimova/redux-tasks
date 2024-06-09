import { Link } from 'react-router-dom'

function Home() {
    return <>
        <h1>redux tasks</h1>

        <p><Link to={'/task9'}>Перейти к задаче 9</Link></p>
   
    </>
}
export default Home