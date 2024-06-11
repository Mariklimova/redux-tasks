import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { hide, show } from "../../slice/swapFlag";

function Task5() {
    const flag = useSelector((state) => state.swapFlag);
    const dispatch = useDispatch();

    return <>
        <p>5. Создайте компонент, который предоставляет две кнопки: "Показать" и "Скрыть".
            При нажатии на "Показать" отображается текст, а при нажатии на "Скрыть" текст
            скрывается.</p>

        <button onClick={() => dispatch(show())}>Показать</button>
        <button onClick={() => dispatch(hide())}>Скрыть</button>
        <h1>{flag ? 'TEXT' : ''}</h1>


        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task5