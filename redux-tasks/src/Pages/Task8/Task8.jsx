import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { validationPwd } from "../../slice/validPass";

function Task7() {
    const password = useSelector((state) => state.validPass);
    const dispatch = useDispatch();

    return <>
        <p>8. Реализуйте компонент для ввода пароля с валидацией. Пользователь должен
            ввести пароль, который соответствует определенным требованиям (например,
            содержание букв, цифр и специальных символов).</p>
        <div>

            <input type="text" onChange={(e) => dispatch(validationPwd(e.target.value))} />
          
            <button onClick={() => console.log(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/gm.test(password))}>Check password</button>
           
        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7