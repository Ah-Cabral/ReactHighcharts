import styled from 'styled-components'

/*Styled Components*/
export const MainHeader = styled.header`
  width: 100%;
  background-color: var(--main-white);
  color: var(--main-dark);
  font-weight: 500;
  margin: 0 auto;
  padding: 1rem;
  & .container{
    max-width: 960px;
    margin: 0 auto;
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    @media all and (max-width: 500px) {
      max-width: 100%;
      flex-direction: column;
      text-align: center;
      margin: 0 1rem;
      gap: .5rem;
    }
  }
  & a i{
    color: var(--orange-primary)
  }
  @media all and (max-width: 500px) {
    padding: 1rem 0;
  }

`;