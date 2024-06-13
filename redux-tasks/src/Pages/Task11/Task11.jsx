import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import {getInp, validationPwd } from "../../slice/validPass3";


function Task7() {
    const result = useSelector((state) => state.validPass3);
    const dispatch = useDispatch();


    return <>
        <p>8.Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
            ввести пароль, который соответствует определенным требованиям (например,
            содержание букв, цифр и специальных символов).</p>
        <div>

            <input type="text" onChange={(e) => dispatch(getInp(e.target.value))} />
          
            <button onClick={() =>dispatch(validationPwd())}>Check password</button>
           
           <h1>{String(result.check)}</h1>

        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7