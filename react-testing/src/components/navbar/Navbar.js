import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <ul>
      <li>
        <Link to="/" data-testid="link-home">
          Home
        </Link>
      </li>
      <li>
        <Link to="/about" data-testid="link-about">
          About
        </Link>
      </li>
      <li>
        <Link to="/dashboard" data-testid="link-dashboard">
          Dashboard
        </Link>
      </li>
      <li>
        <Link to="/users" data-testid="link-users">
          Users
        </Link>
      </li>
      <li>
        <Link to="/helloworld" data-testid="link-users">
          Hello World
        </Link>
      </li>
    </ul>
  );
}
