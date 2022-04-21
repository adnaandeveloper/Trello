import { AuthContext } from 'context/api-context';
import { login } from 'context/api-helper';
import React, { useContext } from 'react';
import { useNavigate } from 'react-router-dom';
// eslint-disable-next-line react-hooks/rules-of-hooks
const { logIn } = useContext(AuthContext);
// eslint-disable-next-line react-hooks/rules-of-hooks
const navigate = useNavigate();
export const authLogin = async (email: string, password: string) => {
  const sendtData = await login(email, password);
  if (sendtData.jwt) {
    logIn(sendtData.jwt, sendtData.user.firstName, sendtData.user.id);

    localStorage.setItem('token', sendtData.jwt);
    localStorage.setItem('userName', sendtData.user.firstName);
    navigate('/boards');

    return false;
  } else {
    return false;
  }
};
