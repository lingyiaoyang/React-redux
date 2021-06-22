import '../styles/globals.css';
// import { Provider } from 'react-redux';
// import withRedux,  from 'next-redux-wrapper';
import { wrapper } from '../redux/store';

function MyApp({ Component, pageProps }) {
  return (
    <div>
      <Component {...pageProps} />;
    </div>
  );
}

export default wrapper.withRedux(MyApp);
