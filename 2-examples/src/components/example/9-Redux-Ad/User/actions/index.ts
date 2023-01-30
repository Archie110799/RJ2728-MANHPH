import { Dispatch } from "react";
import { callApi, callApiFinish } from "../../common/CommonAction";
import { IAction } from "../../interfaces/common";
import { PATH } from "../../path";
import Types from "../../type";

export const getUsersAsync = (): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(callApi());

    fetch(PATH.USER_URL)
      .then((response) => response.json())
      .then((data) => {
        dispatch(getUsers_Success(data));
        dispatch(callApiFinish());
      })
      .catch((error) => {
        dispatch(callApiFinish(error));
      });
  };
};

// CÁC DISPATCH báo trạng thái của ASYNC

//action -> action.type, action.payload
const getUsers_Success = (data?: object): IAction => ({
  type: Types.GET_USER_SUCCESS, // ACTION TYPE
  payload: data, // PARAMETER
});

export const deleteUserAsync = (id: string | undefined): any => {
  return (dispatch: Dispatch<any>) => {
    dispatch(callApi());
    fetch(`${PATH.USER_URL}/${id}`, {
      method: "DELETE",
    })
      .then((response) => response.json())
      .then((data) => {
        dispatch(deleteUser_Success(data?.id));
        dispatch(callApiFinish());
      })
      .catch((error) => {
        dispatch(callApiFinish(error));
      });
  };
};

// CÁC DISPATCH báo trạng thái của ASYNC
const deleteUser_Success = (id: string) => ({
  type: Types.DELETE_USER_SUCCESS, // ACTION TYPE
  payload: id, // PARAMETER
});
