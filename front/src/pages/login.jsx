import kakaoLogo from '../img/kakao.png';
import styled from 'styled-components';

const Div = styled.div`
  display : flex;
  flex-direction: column;
  align-items: center;
  margin-top: 10%;

  &>*{
    margin-bottom: 5%;
  }
`;

const P = styled.p`
  font-size: 50px;
`;

const DetailP =styled.p`
  
  display: flex;
  flex-direction: column;
  align-items: center;

  &>*{
  margin: 0;
  color: darkgray;
  }
`;

export default function Login() {
  const link = `/oauth2/authorization/kakao`;

  const loginHandler = () => {
    window.location.href = link;
  };

  return(
    <>
      <Div>
        <P>Artion</P>
        <DetailP>
        <p>간편하게 로그인하고
        </p>
        <p>다양한 서비스를 이용해보세요.</p>
        </DetailP>
        <img src={kakaoLogo} onClick={loginHandler}></img>
      </Div>
    </>
  )
}