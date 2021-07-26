import styled from 'styled-components'

/*Styled Components*/
export const Badge = styled.div`
  width: 300px;
  height: 4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background-color: var(--main-white);
  border-radius: 10px;
  & i{
    color: var(--orange-primary);
  }
  & div{
    display: flex;
    flex-direction: column;
    gap: .3rem;
  }
`;