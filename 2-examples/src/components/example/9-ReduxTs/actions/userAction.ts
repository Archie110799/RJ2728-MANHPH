import { Dispatch } from "react";

interface IAction {
  type: string;
  payload?: any;
}

export const getUsersAsync = (): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(getUsers_Pendding());
    const URL_USER = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users";
    fetch(URL_USER, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers_Success(data));
      })
      .catch((error) => {
        dispatch(getUsers_Error(error));
      });
  };
};

const getUsers_Pendding = (data?: object): IAction => ({
  type: "GET_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Success = (data?: object): IAction => ({
  type: "GET_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const getUsers_Error = (data?: object): IAction => ({
  type: "GET_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});


export const deleteUsersAsync = (userId: string | number): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(deleteUsers_Pendding());
    const URL_USER = "https://63284e93a2e90dab7bdd0fd7.mockapi.io/api/v1/users/" + userId;
    fetch(URL_USER, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteUsers_Success(data));
      })
      .catch((error) => {
        dispatch(deleteUsers_Error(error));
      });
  };
};

const deleteUsers_Pendding = (data?: object): IAction => ({
  type: "DELETE_PENDDING", // ACTION TYPE
  payload: data, // PARAMETER
});

const deleteUsers_Success = (data?: object): IAction => ({
  type: "DELETE_SUCCESS", // ACTION TYPE
  payload: data, // PARAMETER
});

const deleteUsers_Error = (data?: object): IAction => ({
  type: "DELETE_ERROR", // ACTION TYPE
  payload: data, // PARAMETER
});