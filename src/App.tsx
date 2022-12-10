import styled from 'styled-components';
import Footer from './components/Footer';
import Header from './components/Header';
import Router from './Router';
import './common/styles/reset.css';

const RouterWrapper = styled.div`
  width: 100%;
  min-height: 650px;
`;

function App() {
  return (
    <>
      <Header />
      <RouterWrapper>
        <Router />
      </RouterWrapper>
      <Footer />
    </>
  );
}

export default App;
