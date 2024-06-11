import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { increment,decrement } from "../../slice/counter2";

function Task2() {
    const count = useSelector((state) => state.counter2);
    const dispatch = useDispatch();

    return <>
        <p>2. Создайте компонент, который будет отображать числовое значение и кнопки "+1"
            и "-1". При нажатии на кнопку увеличивать и уменьшать значения счетчика.</p>

        <button onClick={() => dispatch(increment())}>+1</button>
        <button onClick={() => dispatch(decrement())}>-1</button>

        <h1>{count}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task2