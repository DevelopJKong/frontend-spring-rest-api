import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import ScrollTop from './components/utils/ScrollTop';
import useLogin, { ILoginCheck } from './hooks/useLogin';
import Home from './page/logout/Home';
import Login from './page/logout/Login';
import Register from './page/logout/Register';

interface IRouteComponent {
  path: string;
  component: React.ReactNode;
}

const Router = () => {
  const BASIC_RENDER_COMPONENT = 'BASIC_RENDER_COMPONENT';
  const { login } = useLogin() as ILoginCheck;
  localStorage.setItem('Login', JSON.stringify(login));

  // ! 로그인을 하지 않았을때 route 리스트
  const logoutRoutes = [
    {
      path: '/',
      component: <Home />,
    },
    {
      path: '/login',
      component: <Login />,
    },
    {
      path: '/join',
      component: <Register />,
    },
  ];

  // ! 로그인을 성공한후 board-route 리스트
  const boardRoutes = [
    {
      path: BASIC_RENDER_COMPONENT,
      component: <div></div>,
    },
  ];

  // ! 로그인을 성공한후 user-route 리스트

  /**
   * @title 라우팅 컴포넌트 랜더 api
   * @description 라우팅 컴포넌트가 map api로 돌때 첫번째 랜더와 나머지를 구분해주는 api 입니다
   * @param {IRouteComponent} route
   * @param {number} index
   * @returns {React.ReactElement} Route Component
   */
  const routeComponentShow = (route: IRouteComponent, index: number): React.ReactElement =>
    route.path === BASIC_RENDER_COMPONENT ? (
      <Route key={index} index element={route.component} />
    ) : (
      <Route key={index} path={route.path} element={route.component} />
    );

  return (
    <BrowserRouter>
      <ScrollTop />
      <Routes>
        {logoutRoutes.map((route, index) => (
          <Route key={index} path={route.path} element={route.component} />
        ))}
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
