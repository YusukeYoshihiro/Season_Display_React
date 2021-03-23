import styled from 'styled-components';

export const IconLeft = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
`;

export const IconRight = styled.i`
  position: absolute;
  bottom: 10px;
  right: 10px;
`;

export const SeasonCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: ${({season})=> season === 'summer' ? 'orange':'blue'};
`;





