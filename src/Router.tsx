import useLogin, { ILoginCheck } from './hooks/useLogin';

const Router = () => {
  const { login } = useLogin() as ILoginCheck;
  localStorage.setItem('Login', JSON.stringify(login));

  return <div>Router</div>;
};

export default Router;
