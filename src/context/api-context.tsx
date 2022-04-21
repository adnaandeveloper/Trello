import React, { useState, FC } from 'react';

export interface IAuth {
  loggedIn: boolean;
  userName: string;
  logIn: (token: string, userName: string, userId: string) => void;
  logOut: () => void;
  saveUserCridentials: (
    userName: string,
    userId: string,
    userEmail: string
  ) => void;
  token: string;
  userId: string;
  userEmail: string;
  taskDiaglogState: boolean;
  taskeTitleName: string;
  taskListName: string;
  taskDiaglogOpen: () => void;
  taskDiaglogClose: () => void;
  setTaskListNameAndTasleTitleName: (
    taskeTitleName: string,
    taskListName: string
  ) => void;
}

export const AuthContext = React.createContext<IAuth>(null as unknown as IAuth);

export const useIsMounted = () => {
  const isMounted = React.useRef(false);
  React.useEffect(() => {
    isMounted.current = true;
    return () => {
      isMounted.current = false;
    };
  }, []);
  return isMounted;
};

export const AuthProvider: FC = ({ children }) => {
  const [auth, setAuth] = useState({
    loggedIn: false,
    userName: '',
    token: '',
    userId: '',
    userEmail: '',
    taskDiaglogState: false,
    taskListName: '',
    taskeTitleName: '',
  });

  const logIn = (token: string, userName: string, userId: string) => {
    setAuth((prevState) => ({
      ...prevState,
      userId: userId,
      loggedIn: true,
      token: token,
      userName: userName,
    }));
  };

  const logOut = () => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: false,
      token: '',
      userName: '',
      userId: '',
      userEmail: '',
    }));
    //localStorage.setItem('token', '');
    localStorage.removeItem('token');
  };

  const saveUserCridentials = (
    userName: string,
    userId: string,
    userEmail: string
  ) => {
    setAuth((prevState) => ({
      ...prevState,
      loggedIn: true,
      userName: userName,
      userId: userId,
      userEmail: userEmail,
    }));
  };

  const taskDiaglogOpen = () => {
    setAuth((prevState) => ({
      ...prevState,
      taskDiaglogState: true,
    }));
  };
  const taskDiaglogClose = () => {
    setAuth((prevState) => ({
      ...prevState,
      taskDiaglogState: false,
    }));
  };

  const setTaskListNameAndTasleTitleName = (
    taskeTitleName: string,
    taskListName: string
  ) => {
    setAuth((prevState) => ({
      ...prevState,
      taskeTitleName: taskeTitleName,
      taskListName: taskListName,
    }));
  };

  return (
    <AuthContext.Provider
      // Here as value you need to pass the same interface as IAuth
      // You can also just pass setAuth and do whatever you want
      // from the children
      value={{
        ...auth,
        logIn,
        logOut,
        saveUserCridentials,
        taskDiaglogOpen,
        taskDiaglogClose,
        setTaskListNameAndTasleTitleName,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
