import { Link } from "react-router-dom"
import { useDispatch, useSelector } from 'react-redux'
import { addTasks,inpValue,delTasks } from "../../slice/acceptTasks";


function Task7() {
    const result = useSelector((state) => state.acceptTasks);
    const dispatch = useDispatch();


    return <>
        <p>11. Реализуйте компонент "Список задач", который позволяет пользователю
            добавлять, удалять и отмечать задачи как выполненные.</p>
        <div>

            <input type="text" onChange={(e) => dispatch(inpValue(e.target.value))} />

            <button onClick={() => dispatch(addTasks())}>Add Tasks</button>

         <div>{result.arr.map((el,i)=>
         <div key ={i}><p>{el}</p><button onClick={()=>dispatch(delTasks(el))}>Delete</button></div>)}</div>

        </div>




        <Link to={'/'}>Вернуться на главную страницу</Link>
    </>
}
export default Task7