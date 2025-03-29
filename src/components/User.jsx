export const User = ({ user }) => {
  return (
    <article className="user">
      <h2 className="user__name">{user.name}</h2>
      <p className="user__age user__text">Age {user.age}</p>
      <p className="user__is-student  user__text">
        {user.isStudent ? "is Student" : "iss-Student"}
      </p>
      <p className="user__hobbies  user__text">
        Hobbies:{user.hobbies.join(", ")}
      </p>
      <p className="user__city  user__text">City:{user.address.city}</p>
      <p className="user__code  user__text">Zip Code:{user.address.zipCode}</p>
    </article>
  );
};
