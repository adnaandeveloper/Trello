export const login = async (identifier: string, password: string) => {
  const response = await fetch('https://tamalo.herokuapp.com/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  });
  // console.log(response);
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }

  const data = await response.json();
  return data;
};

export const isLogedIn = async () => {
  const response = await fetch('https://tamalo.herokuapp.com/users/me', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });
  const data = await response.json();

  return data;
};

export const signUp = async (
  identifier: FormDataEntryValue | null,
  password: FormDataEntryValue | null
) => {
  const response = await fetch(
    'https://tamalo.herokuapp.com/auth/local/register',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        email: identifier,
        password,
        username: identifier,
      }),
    }
  );
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
};

export const createBoar = async (
  identifier: FormDataEntryValue | null,
  description: FormDataEntryValue | null,
  userName: FormDataEntryValue | null
) => {
  const response = await fetch('https://tamalo.herokuapp.com/boards', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      title: identifier,
      description,
      owners: [userName],
    }),
  });
  if (!response.ok) {
    const message = `An error has occured: ${response.status}`;
    throw new Error(message);
  }
  const data = await response.json();
  return data;
};

export const getBoards = async () => {
  const response = await fetch('https://tamalo.herokuapp.com/boards', {
    method: 'GET',
    headers: {
      Authorization: `Bearer ${localStorage.getItem('token')}`,
      'Content-Type': 'application/json',
    },
  });
  return response.json();
};
