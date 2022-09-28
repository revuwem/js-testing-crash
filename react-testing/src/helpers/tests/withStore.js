import { Provider } from "react-redux";
import { createStore } from "../../store/store";

const withStore = (component, initialStore = {}) => (
  <Provider store={createStore(initialStore)}>{component}</Provider>
);

export default withStore;
