import getConfig from 'next/config';

const { publicRuntimeConfig } = getConfig();

const headers = {
  Accept: 'application/json',
  'Content-Type': 'application/json',
};

export const userLogin = async (formData) => {
  const result = await fetch(`${publicRuntimeConfig.API_URL}/auth/local/`, {
    method: 'POST',
    headers,
    body: JSON.stringify(formData),
  });

  return await result.json();
};

export const userRegister = async (formData) => {
  const result = await fetch(
    `${publicRuntimeConfig.API_URL}/auth/local/register`,
    {
      method: 'POST',
      headers,
      body: JSON.stringify(formData),
    }
  );

  return await result.json();
};

export const fetchData = async () => {
  const res = await fetch(`${publicRuntimeConfig.API_URL}/articles`);
  const aritlcles = res.json();

  return {
    aritlcles,
  };
};
