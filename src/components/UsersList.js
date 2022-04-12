const UsersList = ({ users }) => {
  return (
    <ul>
      {users.map(user => (
        <li key={user.id}>{`${user.username} ${user.age} year${
          user.age > 1 ? "s" : ""
        } old`}</li>
      ))}
    </ul>
  );
};

export default UsersList;
