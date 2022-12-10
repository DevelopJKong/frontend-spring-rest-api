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
const Input = styled.input``;

const Login = () => {
   const [errorMessage, setErrorMessage] = useState('');

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
      const { email } = data;
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
               </Form>
            </Content>
         </Contents>
      </Container>
   );
};

export default Login;
