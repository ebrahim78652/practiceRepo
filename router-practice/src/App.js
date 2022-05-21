import { useEffect, useState } from "react";
import ReactDOM from "react-dom/client";
import {
  BrowserRouter,
  Route,
  Routes,
  Link,
  Outlet,
  NavLink,
  useParams,
  useNavigate,
  useSearchParams,
} from "react-router-dom";

const App = () => {
  //make an object which contains users.

  const [users, setUsers] = useState([
    { id: 1, name: "Friedrich Merz" },
    { id: 2, name: "Angela Merkel" },
  ]);

  useEffect(() => {
    console.log("users changed!");
    console.log(users);
  }, [users]);

  const navigate = useNavigate();

  const removeUser = (userId) => {
    setUsers((state) =>
      state.filter((user) => {
        console.log(user.id !== userId);
        console.log(user.id);
        return user.id !== +userId;
      })
    );
    navigate("/about");
  };
  return (
    <>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="home" element={<Home />} />
          <Route path="about" element={<About users={users} />}>
            <Route
              path=":userId"
              element={<User removeHandler={removeUser} />}
            />
          </Route>
        </Route>
        <Route path="*" element={<NoMatch />} />
      </Routes>
    </>
  );
};

const NoMatch = () => {
  return <p>There's nothing here: 404!</p>;
};

const Navigate = () => {
  const styleFunction = ({ isActive }) => {
    return { fontWeight: isActive ? "bold" : "normal", margin: "10px" };
  };
  return (
    <>
      <NavLink style={styleFunction} to="/home">
        Home
      </NavLink>
      <NavLink style={styleFunction} to="/about">
        About
      </NavLink>
    </>
  );
};

const Home = () => {
  return (
    <>
      <h1>HOME</h1>
    </>
  );
};
const User = ({ removeHandler }) => {
  const { userId } = useParams();

  return (
    <>
      <h1>User {userId}</h1>
      <button onClick={() => removeHandler(userId)}>Remove</button>

      <Link to="/about">Back to About</Link>
    </>
  );
};

const About = (props) => {
  const { users } = props;
  console.log(users);
  const [searchParams, setSearchParams] = useSearchParams();

  const onInputChanged = (e) => {
    setSearchParams({ name: e.target.value });
  };

  return (
    <>
      <h1>Users</h1>
      <input
        type="text"
        onChange={onInputChanged}
        value={searchParams.get("name") || ""}
      />
      <ul>
        {users
          .filter((user) => user.name.includes(searchParams.get("name")))
          .map((user) => (
            <Link key={user.id} to={`${user.id}`}>
              {user.name}
              <br />
            </Link>
          ))}
      </ul>

      <Outlet />
    </>
  );
};

const Layout = () => {
  return (
    <>
      <Navigate></Navigate>
      <div style={{ color: "red", padding: "10px" }}>
        <Outlet />
      </div>
    </>
  );
};

export default App;
