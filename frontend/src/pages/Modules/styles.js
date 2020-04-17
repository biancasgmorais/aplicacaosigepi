import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  height: 100%;
  display: flex;
`;

export const Navigation = styled.div`
  display: flex;
  max-width: 600px;
  flex-direction: row;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap');

  .epis {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;

    img {
      height: 95px;
      margin-bottom: 25px;
    }

    button {
      width: 260px;
      height: 90px;
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
  }
  .deliver {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-right: 10px;

    img {
      height: 95px;
      margin-bottom: 25px;
    }

    button {
      width: 260px;
      height: 90px;
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
  }
  .reports {
    display: flex;
    flex-direction: column;
    align-items: center;

    img {
      height: 95px;
      margin-bottom: 25px;
    }

    button {
      width: 260px;
      height: 90px;
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
  }
`;
