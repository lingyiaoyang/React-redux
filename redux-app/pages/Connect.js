import React from 'react';
import { connect } from 'react-redux';
import { setInfo } from '../redux/actions/Index';

const tryConnect = (props) => {
  const { userInfo } = props;
  return <div>This is connect to {userInfo.name}</div>;
};

const mapStateToProps = (state) => ({
  userInfo: state.main,
});

const mapDispatchToProps = {
  setInfo: setInfo,
};

export default connect(mapStateToProps, mapDispatchToProps)(tryConnect);
