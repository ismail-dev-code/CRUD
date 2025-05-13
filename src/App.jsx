import "./App.css";
import Users from "./components/Users";

const usersPromise = fetch("http://localhost:3000/users").then((res) =>
  res.json()
);

function App() {
  return (
    <>
      <div className="w-4/12 mx-auto mt-20">
        <h1 className="text-4xl text-nowrap">Simple CRUD Operation</h1>
        <Users usersPromise={usersPromise}></Users>
      </div>
    </>
  );
}

export default App;
