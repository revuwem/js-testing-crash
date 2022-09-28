import { useDispatch, useSelector } from "react-redux";
import { incremented, decremented } from "../../store/reducers/counter";
import getCounterValue from "../../store/selectors/getCounterValue";

export default function Counter() {
  const dispatch = useDispatch();
  const value = useSelector(getCounterValue);

  const onIncrement = () => dispatch(incremented());
  const onDecrement = () => dispatch(decremented());

  return (
    <div className="counter">
      <button onClick={onDecrement}>-</button>
      <span data-testid="counter-value">{value}</span>
      <button onClick={onIncrement}>+</button>
    </div>
  );
}
