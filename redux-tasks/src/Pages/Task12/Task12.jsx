import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { changeLang } from "../../slice/language";


function Task7() {
    const lang = useSelector((state) => state.language);
    const dispatch = useDispatch();

    const input = {
        ru: 'привет',
        en: 'hi',
        bel: 'прывiтанне'
        }

    return <>
        <p>10. Создайте компонент, который позволяет пользователю выбирать язык
            интерфейса. При выборе языка текст на странице должен изменяться
            соответствующим образом.</p>
        <div>

           

            <button onClick={() => dispatch(changeLang('ru'))}>Русский</button>
            <button onClick={() => dispatch(changeLang('bel'))}>Белорусский</button>
            <button onClick={() => dispatch(changeLang('en'))}>English</button>

            <h1>{input[lang]}</h1>

        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7