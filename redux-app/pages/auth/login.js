import { Box } from 'reflexbox';
import getConfig from 'next/config';
import styled from '@emotion/styled';
import { useState } from 'react';
import { setCookie } from 'nookies';
import { useRouter } from 'next/router';
import { userLogin } from '../../apis/user';

const { publicRuntimeConfig } = getConfig();

const Login = () => {
  const router = useRouter();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  async function handleLogin() {
    const formData = {
      identifier: username,
      password: password,
    };
    const userLogin = userLogin(formData);

    console.log(
      '🚀 -> file: login.js -> line 30 -> handleLogin -> loginResponse',
      userLogin
    );

    localStorage.setItem('jwt', userLogin.jwt);

    router.push('/Connect');
  }

  return (
    <>
      <LoginStyled>
        <Box variant='container'>
          <Box as='h2' my={40}>
            You need to login to access this page
          </Box>

          <form onSubmit={() => handleLogin()}>
            <input
              type='email'
              placeholder='email'
              onChange={(e) => setUsername(e.target.value)}
              value={username}
            />
            <br />
            <input
              type='password'
              placeholder='password'
              onChange={(e) => setPassword(e.target.value)}
              value={password}
            />
            <br />
            <button type='button' onClick={(e) => e.preventDefault()}>
              Login
            </button>
          </form>
        </Box>
      </LoginStyled>
    </>
  );
};

const LoginStyled = styled.div`
  input {
    padding: 10px;
    margin-bottom: 20px;
    border: 1px solid #cccccc;
    border-radius: 4px;
  }
`;

export default Login;
