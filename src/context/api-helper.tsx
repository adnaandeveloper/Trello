export const login = async (identifier: string, password: string) => {
  const response = await fetch('https://tamalo.herokuapp.com/auth/local', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ identifier, password }),
  });
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
  const data = await response.json();
  return data;
};
