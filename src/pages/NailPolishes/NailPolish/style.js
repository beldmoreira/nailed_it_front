import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 90px;

  padding: 15px;
  margin: 20px 0 0px 0;

  background: #FFFFFF;
  border-radius: 5px;

  position: relative;

  img {
    width: 15px;

    position: absolute;
    top: 12px;
    right: 12px;
  }
`;

const Title = styled.h2`
  font-size: 20px;
  line-height: 25px;

  word-break: break-all;
  width: 80%;

  color: #666666;
`;

const Shade = styled.span`
  font-size: 15px;
  line-height: 25px;

  word-break: break-all;
  width: 60%;

  color: #D5D5D5;
`;

const Brand = styled.span`
    font-size: 15px;
    line-height: 25px;

    word-break: break-all;
    width: 60%;

    color: #D5D5D5;
`;

export {
  Container,
  Title,
  Shade,
  Brand
}