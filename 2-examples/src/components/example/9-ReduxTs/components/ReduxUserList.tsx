import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteUsersAsync, getUsersAsync } from "../actions/userAction";

interface IState {
  userReducers: IUserReducer;
}

interface IUser {
  name: string;
  avatar: string;
  email: string;
  code: string;
  id: string;
}

interface IUserReducer {
  users: Array<IUser>;
  loading: boolean;
  error: any;
}

function ReduxUserList() {
  const dispatch = useDispatch();
  const { users, loading } = useSelector((state: IState) => state.userReducers);

  useEffect(() => {
    dispatch(getUsersAsync());
  }, []);

  const handleDelete = (userId : string | number) =>{
    console.log(userId);
    dispatch(deleteUsersAsync(userId));
  }
  return (
    <>
      {loading ? <p>Loadding...</p> : null}
      <div className="d-flex justify-content-around flex-wrap">
        {users?.map((user) => (
          <div key={user.id} className="card w-25 m-1">
            <img src={user.avatar} className="card-img-top" alt="..." />
            <div className="card-body">
              <h5 className="card-title text-truncate">{user.name}</h5>
              <p className="card-text text-truncate">{user.email}</p>
              <div className="d-flex justify-content-around">
                <a href="#" className="btn btn-primary">
                  More...
                </a>
                <span onClick={()=>handleDelete(user.id)} className="btn btn-danger">Delete</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default ReduxUserList;
