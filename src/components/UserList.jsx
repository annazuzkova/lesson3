import { User } from "./User";
export const UserList = ({ users }) => {
  return (
    <ul className="users">
      {users.map((user, index) => {
        return (
          <li key={index} className="users__item">
            <User user={user} />
          </li>
        );
      })}
    </ul>
  );
};
