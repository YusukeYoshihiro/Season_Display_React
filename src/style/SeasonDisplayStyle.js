import styled from 'styled-components';

export const IconLeft = styled.i`
  position: absolute;
  top: 10px;
  left: 10px;
  color: ${({season})=> season === 'summer' ? 'red': 'blue'};

`;

export const IconRight = styled.i`
  z-index: 1;
  position: absolute;
  bottom: 10px;
  right: 10px;
  color: ${({season})=> season === 'summer' ? 'red': 'blue'};
`;

export const SeasonCtn = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background: ${({season})=> season === 'summer' ? 'orange':'cyan'};
`;





