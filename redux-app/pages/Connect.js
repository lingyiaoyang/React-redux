import React, { useState, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { fetchRequest, fetchSuccess, fetchFail } from '../redux/actions';
import { fetchData } from '../apis/user';

const tryConnect = ({ article }) => {
  console.log(
    '🚀 -> file: Connect.js -> line 7 -> tryConnect -> article',
    article
  );

  const [name, setName] = useState('');
  const [age, setAge] = useState('');
  const dispatch = useDispatch();

  // dispatch(fetchSuccess(article));

  function handleButton(e) {
    e.preventDefault();
    const identifier = {
      name: name,
      age: age,
    };
    localStorage.setItem('name', identifier.name);
    localStorage.setItem('age', identifier.age);
    dispatch(fetchSuccess(identifier));
  }

  // const handleButton = (event) => {
  //   // event.preventDefault();

  // };
  const identifier = {
    name: name,
    age: age,
  };

  return (
    <div>
      This is connect to {JSON.stringify(identifier)}
      <form onSubmit={handleButton}>
        <input
          type='text'
          placeholder='text'
          onChange={(e) => setName(e.target.value)}
          value={name}
        />
        <input
          type='number'
          placeholder='text'
          onChange={(e) => setAge(e.target.value)}
          value={age}
        />

        <button onClick={(e) => e.preventDefault()}>Click me</button>
      </form>
    </div>
  );
};


export async function getServerSideProps() {
  const { API_URL } = process.env;

  const res = await fetch(`${API_URL}/articles`);
  const article = await res.json();

  return {
    props: {
      article: article,
    },
  };
}

export default tryConnect;
