import jjang from '../img/jjang.jpg';
import styled from "styled-components";

const ImageSize = styled.img`
  width: 35%;
  height: 35%;
`;

const ListStyle = styled.div`
  display:flex;
  flex-direction : row;
  align-items: center;
  padding: 5px;
  border : 3px solid darkgray;
  border-radius: 5px;
`;

const ArrangeBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-evenly;
`;

const AllBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  &>*{
    width: 80%;
  }
`;

const InputDivSize = styled.div`
   &>*{
    width: 100%;
  }
`;

const InputSize = styled.input`
  font-size: 20px;
  padding: 5px;
`;

const Pstyle = styled.p`
  font-size: 20px;
`;

const P = styled.p`
  font-size: 80%;
`;

export default function Receipt() {
  return(
    <>
    <AllBox>
    <Pstyle>주문상세</Pstyle>
       <ListStyle>
        <ImageSize src={jjang}></ImageSize>
        <ArrangeBox>
          <div>
            <P>작품이름</P>
            <P>작가이름</P>
            <P>낙찰가격</P>
          </div>
          <div>
            <P>종료날짜</P>
          </div>
          </ArrangeBox>
      </ListStyle> 
      <InputDivSize>
        <p>낙찰가격</p>
        <InputSize type="text" value="100000" disabled></InputSize>
        <p>배송방식</p>
        <InputSize type="text" value="픽업" disabled></InputSize>
      </InputDivSize>
      </AllBox>
    </>
  )
}