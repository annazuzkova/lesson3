import "./App.css";
import users from "./users.json";
import { UserList } from "./components/UserList";
import { Container } from "./components/Container";
function App() {
  return (
    <>
      <Container title={"Наші користувачи"}>
        <UserList users={users} />
      </Container>
    </>
  );
}

export default App;
