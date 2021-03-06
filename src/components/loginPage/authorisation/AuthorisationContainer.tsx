import React from "react";
import { useMutation } from "@apollo/client";
import { LOGIN } from "../../../api/mutations";
import { useDispatch } from "react-redux";
import { setIsLogged, setLoginData } from "../../../store/actions";
import { message } from "antd";
import Authorisation from "./Authorisation";

const AuthorisationContainer = () => {
  let [login] = useMutation(LOGIN);
  let dispatch = useDispatch();
  const error = (errorMessage: string) => {
    message.error(errorMessage);
  };
  const success = () => {
    message.success("Вхід Успішний!");
  };
  const onFinish = async (values: { username: string; password: string }) => {
    let result = await login({
      variables: {
        input: {
          email: values.username,
          password: values.password,
        },
      },
    });
    if (result.data.login.user === null) {
      console.log(result.data.login.userErrors[0].message);
      error(result.data.login.userErrors[0].message);
    } else {
      localStorage.setItem("userId", result.data.login.user.id);
      localStorage.setItem("token", result.data.login.token);
      localStorage.setItem("isLogged", "true");
      dispatch(setIsLogged(true));
      dispatch(
        setLoginData({
          token: result.data.login.token,
          ...result.data.login.user,
        })
      );
      success();
    }
  };
  const onFinishFailed = (errorInfo: string) => {
    console.log(errorInfo);
  };

  return <Authorisation onFinish={onFinish} onFinishFailed={onFinishFailed} />;
};

export default AuthorisationContainer;
