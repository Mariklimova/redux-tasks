import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { checkValue } from "../../slice/palindrom";

function Task2() {
    const inp = useSelector((state) => state.palindrom);
    const dispatch = useDispatch();

    return <>
        <p>4. Создайте компонент формы. По клику на кнопку собрать данные из input и
            проверить вводимую строку на палиндром</p>

        <input type="text" onChange={(e) => dispatch(checkValue(e.target.value))} />
        <h1>{inp==''?'': inp === inp.split('').reverse().join('') ? 'palindrom' : 'not palindrom'}</h1>


        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task2