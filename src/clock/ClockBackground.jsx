import styled from "styled-components";

const ClockBackGround = styled.div`
  width: ${(props) => props.size};
  height: ${(props) => props.size};
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: rgba(255, 255, 255, 0.1);
  padding: 20px;
  margin: 2rem;
`;

ClockBackGround.defaultProps = {
  size: "400px",
};

export default ClockBackGround;
