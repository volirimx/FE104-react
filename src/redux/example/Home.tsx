import { decrement, increment, incrementByAmount, selectCount } from "../counter/counter"
import { useAppDispatch, useAppSelector } from "../hooks"
import styles from "./home.module.css"
export const Home = () => {
    const counter = useAppSelector(selectCount)
        // (store) => store.counter.value);
    // ф-ция для отправки action-ов в store
    const dispatch = useAppDispatch();

    const handleIncrementClick = () => {
        dispatch(increment());
    }
    const handleDecrementClick = () => {
        dispatch(decrement());
    }
    const handleIncrementByAmount = () => {
        dispatch(incrementByAmount(5));
    }
    return (
        <div>
            <button className={styles.btn} onClick={handleIncrementClick}>+</button>
            <button className={styles.btn} onClick={handleDecrementClick}>-</button>
            <button className={styles.btn} onClick={handleIncrementByAmount}>incr amount</button>
            <div>{counter}</div>
        </div>
    )
}