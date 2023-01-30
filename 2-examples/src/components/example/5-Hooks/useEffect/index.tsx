import React, { useState, useEffect } from "react";

interface IProps {
  user: IUser;
}
interface IUser {
  name: string;
  avatar: string;
}
function UseEffect() {
  const [users, setUsers] = useState<IUser[]>([]);

  useEffect(() => {
    fetch("https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users?page=1&limit=10", {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => setUsers(data))
      .catch((error) => {
        console.error("Error:", error);
      });
  }, []);

  const RenderUserItem = ({ user }: IProps) => {
    return (
      <div className="card m-3" style={{ width: "20%" }}>
        <img
          className="card-img-top"
          src={user?.avatar}
          alt={user?.name}
          style={{ objectFit: "contain" }}
        ></img>
        <div className="card-body">
          <h5 className="card-title">{user?.name}</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a
            href="https://getbootstrap.com/docs/4.0/components/card/"
            className="btn btn-primary"
            target="_blank"
            rel="noreferrer"
          >
            Go somewhere
          </a>
        </div>
      </div>
    );
  };

  return (
    <div className="d-flex flex-wrap justify-content-around">
      {users.map((user, index) => {
        return <RenderUserItem key={`user-${index}`} user={user} />;
      })}
    </div>
  );
}

export default UseEffect;
