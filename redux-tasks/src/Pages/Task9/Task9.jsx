import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { plusSize, minusSize } from "../../slice/fontSize";

function Task9() {
    const size = useSelector((state) => state.fontSize);
    const dispatch = useDispatch();

    return <>
        <p>9. Создайте компонент, который позволяет пользователю управлять размером
            текста на странице с помощью кнопок "увеличить" и "уменьшить".
        </p>

        <button onClick={() => dispatch(plusSize())}>Увеличить</button>
        <button onClick={() => dispatch(minusSize())}>Уменьшить</button>
       
        <h1 style={{ fontSize: size }}>TEXT</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task9