import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  display: flex;
`;

export const Content = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');
  display: flex;
  max-width: 900px;
  flex-direction: column;
  margin: 0 auto;
  align-items: center;
  justify-content: center;

  img {
    margin-top: 10px;
    margin-bottom: 10px;
    width: 50px;
    height: 50px;
  }

  h1 {
    text-align: center;
    width: 300px;
    height: 25px;
    font: 16px 'Roboto', sans-serif;
    font-weight: bold;
    color: #fff;
    background #243e6a;
    border: 4px solid #243E6A;
    border-radius: 4px;
    text-transform: uppercase;
  }

  form {
    display: flex;
    flex-direction: column;
    margin-top: 10px;
    width: 300px;

    h2 {
      margin-top: 5px;
      font: 14px 'Roboto', sans-serif;
      font-weight: bold;
      color: #243e6a;
      text-transform: uppercase;
    }

    input {
      height: 27px;
      font: 14px 'Roboto', sans-serif;
      color: #030303;
      background-color: #fff;
      border: 1px solid #243e6a;
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
  }

  .term h2 {
    margin-top: 5px;
    font: 12px 'Roboto', sans-serif;
    font-weight: bold;
    color: #243e6a;
    text-transform: uppercase;
  }

  .botoes {
    display: flex;
    flex-direction: row;
    margin-top: 10px;
    justify-content: center;
    align-center: center;

    button {
      margin-right: 10px;
      width: 100px;
      height: 50px;
      font: 14px 'Roboto', sans-serif;
      font-weight: bold;
      color: #fff;
      background: #243e6a;
      border: 1px solid #99cc33;
      border-radius: 6px;
      transition: background 0.2s;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.08, '#243e6a')};
      }
    }
  }

  .back {
    margin-top: 10px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-end;
    justify-content: center;
    a {
      background: transparent;
      opacity: 0.8;

      &:hover {
        opacity: 1;
      }

      img {
        width: 50px;
        height: 50px;
      }
    }
  }
`;
