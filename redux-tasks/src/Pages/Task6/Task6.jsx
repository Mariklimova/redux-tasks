import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { validation } from "../../slice/validEmail";

function Task5() {
    const resInp = useSelector((state) => state.validEmail);
    const dispatch = useDispatch();

    return <>
        <p>6. Создайте компонент, который отображает проверку почты (true, false) на
            валидность регулярному выражению. Валидатор состоит из Input для ввода почты
            и кнопки для запуска валидатора.
        </p>
        <div>

            <input type="text" onChange={(e) => dispatch(validation(e.target.value))} />

            <button onClick={() => console.log(/^[a-zA-Z0-9]+@[A-Za-z]+\.+[a-zA-Z]+$/gm.test(resInp))}>CHECK</button>

        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task5