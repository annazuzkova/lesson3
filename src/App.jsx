import "./App.css";
import users from "./users.json";
import { UserList } from "./components/UserList";
function App() {
  return (
    <>
      <UserList users={users} />
    </>
  );
}

export default App;
