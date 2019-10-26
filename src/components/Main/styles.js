import styled from 'styled-components';

import 'react-toastify/dist/ReactToastify.min.css';

export const Container = styled.div`
  background: #f6f6f6;
  padding: 10px 20px;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  header {
    background-color: white;
    width: 100%;
    align-items: center;
    justify-content: center;
    text-align: center;
    padding: 10px;
  }

  h2 {
    max-width: 270px;
    margin: 30px 0px;
    font-size: 19px;
  }

  .logo {
    margin-bottom: 15px;
  }

  button {
    margin-bottom: 30px;
  }
`;
