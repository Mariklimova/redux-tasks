import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { increment} from "../../slice/counter";

function Task1() {
    const count = useSelector((state) => state.counter);
    const dispatch = useDispatch();

    return <>
        <p>1. Создайте компонент инкремента. Компонент возвращает кнопку и параграф, в
            котором отображается значение (первоначальное значение 1). Ваша задача так
            реализовать функционал, чтобы при клике на кнопку автоматически
            прибавлялась +1 к значению параграфа</p>

        <button onClick={() => dispatch(increment())}>+1</button>
        
        <h1>{count}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task1