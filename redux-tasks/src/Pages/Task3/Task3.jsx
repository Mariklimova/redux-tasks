import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { saveValue } from "../../slice/inpValue";

function Task2() {
    const inp = useSelector((state) => state.inpValue);
    const dispatch = useDispatch();

    return <>
        <p>3. Создайте компонент текстового поля, который позволяет пользователю вводить
            текст и отображает его в реальном времени.</p>

        <input type="text" onChange={(e)=>dispatch(saveValue(e.target.value))}/>

        <h1>{inp}</h1>

        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task2