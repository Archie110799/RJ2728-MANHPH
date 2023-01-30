import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { IUser } from "../../9-Redux-Ad/interfaces/common";

function HomePage() {
  const navigate = useNavigate();

  const [users, setUsers] = useState<Array<IUser>>([]);
  useEffect(() => {
    // CALL API  get list Users
    handleGetUsers();
  }, []);

  const handleGetUsers = () => {
    const url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
    fetch(url, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý kết quả JSON ở đây
        console.log(data);
        setUsers(data);
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  const handleDelete = (id: string | undefined) => {
    const url = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + id;
    fetch(url, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        // Xử lý kết quả JSON ở đây
        console.log(data);
        handleGetUsers()
      })
      .catch((error) => {
        // Nếu có lỗi
        console.error(error);
      });
  };

  return (
    <table className="table table-light table-responsive table-striped table-hover w-75 m-auto border border-secondary">
      <thead>
        <tr>
          <th scope="col">ID</th>
          <th scope="col">Name</th>
          <th scope="col"></th>
        </tr>
      </thead>
      <tbody>
        {users.map((user: IUser) => {
          return (
            <tr key={user?.id}>
              <th scope="row" onClick={() => navigate(`/${user?.id}`)}>
                {user?.id}
              </th>
              <td onClick={() => navigate(`/${user?.id}`)}>{user?.name}</td>
              <td>
                <button
                  className="btn btn-danger"
                  onClick={() => handleDelete(user?.id)}
                >
                  Delete
                </button>
              </td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default HomePage;
