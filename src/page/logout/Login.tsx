import axios from 'axios';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styled from 'styled-components';
import { Contents as HomeContents, Container as HomeContainer, Title as HomeTitle, TitleText as HomeTitleText } from './Home';

interface IForm {
   email: string;
   password: string;
   extraError?: string;
   existUser?: string;
   wrongPassword?: string;
}

const Container = styled(HomeContainer)``;
const Contents = styled(HomeContents)``;
const Title = styled(HomeTitle)``;
const TitleText = styled(HomeTitleText)``;
const Content = styled.div``;
const Form = styled.form``;
const InputWrapper = styled.div`
   padding: 20px;
`;
const Input = styled.input``;
const Button = styled.button``;

const Login = () => {
   const [errorMessage, setErrorMessage] = useState('');
   const [userEmail, setUserEmail] = useState('');
   const [userPassword, setUserPassword] = useState('');
   const {
      register,
      handleSubmit,
      clearErrors,
      setError,
      formState: { errors },
   } = useForm<IForm>({
      mode: 'onChange',
   });

   const onValid = async (data: IForm): Promise<void> => {
      const { email, password } = data;
      console.log(email);
      try {
         const {
            data: { data: userData },
         } = await axios({
            url: 'http://localhost:8080/user/login',
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            data: {
               email,
               password,
            },
         });

         console.log(userData.ok);
         console.log(userData.token);
      } catch (error) {
         console.log(error);
      }
   };
   return (
      <Container>
         <Contents>
            <Title>
               <TitleText>LOGIN</TitleText>
            </Title>
            <Content>
               <Form
                  onSubmit={handleSubmit(onValid)}
                  onClick={() => {
                     setErrorMessage('');
                     clearErrors();
                  }}
               >
                  <Input
                     placeholder={'email'}
                     type={'email'}
                     {...register('email', {
                        required: {
                           value: true,
                           message: '이메일을 제대로 작성 해 주세요.',
                        },
                        minLength: { value: 4, message: '이메일이 너무 짧습니다' },
                     })}
                  />
                  <Input
                     placeholder={'password'}
                     type={'password'}
                     {...register('password', {
                        required: {
                           value: true,
                           message: '비밀번호를 제대로 작성 해 주세요.',
                        },
                     })}
                  />
                  <Button>로그인</Button>
               </Form>
            </Content>
         </Contents>
      </Container>
   );
};

export default Login;
