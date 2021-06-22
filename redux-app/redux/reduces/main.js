const main = (state = { userInfo: { name: 'guest' } }, action) => {
  switch (action.type) {
    case 'SET_NAME':
      return {
        userInfo: {
          name: action.payload,
        },
      };
    default:
      return { ...state };
  }
};

export default main;
