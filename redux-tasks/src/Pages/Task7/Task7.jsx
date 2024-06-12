import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { getInp_1, getInp_2, resultSumInp } from "../../slice/sumInp";

function Task7() {
    const resultInputs = useSelector((state) => state.sumInp);
    const dispatch = useDispatch();

    return <>
        <p>7. Создайте компонент, который отображает сумму значений input. Компонент
            состоит из Input для ввода математического значения и кнопки сложения для
            высчитывания результата внутри строки.</p>
        <div>

            <input value={resultInputs.inp_1} type="number" onChange={(e) => dispatch(getInp_1(e.target.value))} />
            <input value={resultInputs.inp_2} type="number" onChange={(e) => dispatch(getInp_2(e.target.value))} />

            <button onClick={() => dispatch(resultSumInp())}>RESULT</button>
            <h1>{resultInputs.result}</h1>
        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7