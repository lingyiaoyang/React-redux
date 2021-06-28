import { fetchData } from '../../../apis/user';
import { getServerSideProps } from '../../../pages/Connect';

export function requestGetUser() {
  return {
    id: 1,
    name: 'lingyiaoyang',
  };
}
