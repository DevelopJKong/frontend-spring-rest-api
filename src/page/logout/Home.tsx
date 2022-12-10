import { Link } from 'react-router-dom';
import styled from 'styled-components';
import { MAIN_IMG } from '../../common/constants/constants';

export const Container = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const Contents = styled.div`
  width: 80%;
  height: 100%;
`;

export const Title = styled.div`
  width: 100%;
  height: 100%;
  margin-bottom: 20px;
`;

export const TitleText = styled.h2`
  font-weight: bold;
  font-size: ${({ theme }) => theme.TEXT_SIZE.LARGE};
  margin: 0;
`;

const Content = styled.div``;

const Btns = styled.div`
  width: 100%;
  display: flex;
`;

const LoginBtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 30px;
  border: 2px solid rgba(0, 0, 0, 0.2);
  border-radius: 2.222rem;
`;

const RegisterBtn = styled(LoginBtn)`
  margin-left: 10px;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 500px;
  margin-bottom: 20px;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Home = () => {
  return (
    <Container>
      <Contents>
        <Title>
          <TitleText>SPRING REST API PROJECT</TitleText>
        </Title>
        <Content>
          <ImageWrapper>
            <Image src={MAIN_IMG} alt='mainImg' />
          </ImageWrapper>
          <Btns>
            <LoginBtn>
              <Link to='/login'>LOGIN &rarr;</Link>
            </LoginBtn>
            <RegisterBtn>
              <Link to='/join'>JOIN &rarr;</Link>
            </RegisterBtn>
          </Btns>
        </Content>
      </Contents>
    </Container>
  );
};

export default Home;
