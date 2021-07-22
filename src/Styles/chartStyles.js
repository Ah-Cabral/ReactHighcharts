import styled from 'styled-components'
  
/*Styled Components*/
export const Container = styled.div`
  max-width: 960px;
  margin: 0 auto;
`;

export const Card = styled.div`
  width: 100%;
  height: 100%;
  margin: 3rem 0;
  background: rgba( 255, 255, 255, 0.75 );
  border-radius: 10px;
  border: 1px solid var(--light-gray);
`;

export const Chart = styled.div`
  font-family: var(--primary-font);
  width: 100%;
  border-radius: 10px;
`;

export const MainHeader = styled.header`
  background-color: var(--orange-primary);
  color: var(--main-white);
  font-weight: 500;
  letter-spacing: .2rem;
  padding: 1rem;
  text-align: center;
`;
