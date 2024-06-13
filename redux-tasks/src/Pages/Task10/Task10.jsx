import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { validationPwd } from "../../slice/validPass2";
import { useState } from "react";

function Task7() {
    const result = useSelector((state) => state.validPass2);
    const dispatch = useDispatch();
    const [inp,setInp] = useState('')

    return <>
        <p>8.Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
            ввести пароль, который соответствует определенным требованиям (например,
            содержание букв, цифр и специальных символов).</p>
        <div>

            <input type="text" onChange={(e) => setInp(e.target.value)} />
          
            <button onClick={() =>dispatch(validationPwd(inp))}>Check password</button>
           
           <h1>{String(result)}</h1>

        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7