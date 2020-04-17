import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: #fff;
  display: flex;
  justify-content: center;
  align-center: center;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  width: 100%;
  max-width: 315px;
  text-align: center;

  img {
    margin-top: 30px;
    height: 155px;
  }

  h1 {
    margin-top: 30px;
    font-family: 'Roboto', sans-serif;
    font-size: 32px;
    font-weight: bold;
    color: #243e6a;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 30px;

    h2 {
      margin-top: 5px;
      font: 16px 'Roboto', sans-serif;
      font-weight: bold;
      color: #243e6a;
    }

    input {
      height: 25px;
      font: 14px 'Roboto', sans-serif;
      color: #fff;
      background-color: #243e6a;
      border: 1px solid #99cc33;
      border-radius: 4px;
      padding: 0 15px;
      margin: 0 0 10px;

      &::placeholder {
        color: rgba(255, 255, 255, 0.7);
      }
    }

    span {
      color: #e91010;
      align-self: flex-start;
      margin: 0 0 10px;
      font-weight: bold;
    }

    button {
      margin: 10px 0 0;
      height: 44px;
      font: 21px 'Roboto', sans-serif;
      font-weight: bold;
      color: #fff;
      background: #243e6a;
      border: 1px solid #99cc33;
      border-radius: 6px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.08, '#243e6a')};
      }
    }

    a {
      color: #243e6a;
      margin-top: 15px;
      font: 16px 'Roboto', sans-serif;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }
    }
  }

  .fimpage img {
    margin-top: 30px;
    height: 44px;
  }
`;
