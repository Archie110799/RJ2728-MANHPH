import React from "react";
import axios from "axios";

interface IUser {
  id: string;
  name: string;
  avatar: string;
}

function Users() {
  const [loading, setLoading] = React.useState(true);
  const [users, setUsers] = React.useState<IUser[]>([]);

  React.useEffect(() => {
    const config = {
      method: "get",
      url: "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users",
    };

    axios(config)
      .then(function (response) {
        // Save to state
        console.log(response.data);
        setUsers(response.data);
        setLoading(false);
      })
      .catch(function (error) {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <h2>Danh sách người dùng</h2>
      {loading && (
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            height: "100vh",
            width: "100vw",
          }}
        >
          Loadding...
        </div>
      )}
      <ul>
        {users.map((user: IUser) => {
          return <li key={user.id}>{user?.name}</li>;
        })}
      </ul>
    </div>
  );
}

export default Users;
