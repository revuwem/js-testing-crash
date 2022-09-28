import { MemoryRouter } from "react-router-dom";
import AppRouter from "../../components/app-router/AppRouter";

export default function withRouter(component, initialRoute = "/") {
  return (
    <MemoryRouter initialEntries={[initialRoute]}>
      <AppRouter />
      {component}
    </MemoryRouter>
  );
}
