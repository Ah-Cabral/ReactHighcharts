import styled from 'styled-components'
  
  /*Styled Components*/
  export const Container = styled.div`
    max-width: 960px;
    margin: 0 auto;
  `;

  export const Card = styled.div`
    width: 100%;
    height: 100%;
    margin: .5rem;
    background: rgba( 255, 255, 255, 0.75 );
    -webkit-box-shadow: 6px 6px 9px 3px rgba(0,0,0,0.19); 
    box-shadow: 6px 6px 9px 3px rgba(0,0,0,0.19);
    border-radius: 10px;
    border: 1px solid rgba( 255, 255, 255, 0.18 );
  `;

  export const Chart = styled.div`
    font-family: var(--primary-font);
    width: 100%;
    border-radius: 10px;
  `;

