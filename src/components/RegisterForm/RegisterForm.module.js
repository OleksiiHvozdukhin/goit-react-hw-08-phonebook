import styled from 'styled-components';

export const LoginBox = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  width: 400px;
  padding: 40px;
  transform: translate(-50%, -50%);
  background: rgba(0, 0, 0, 0.5);
  box-sizing: border-box;
  box-shadow: 0 15px 25px rgba(0, 0, 0, 0.6);
  border-radius: 10px;

  & h2 {
    margin: 0 0 30px;
    padding: 0;
    color: white;
    text-align: center;
  }

  & button {
    padding: 0;
    border: none;
    font: inherit;
    color: inherit;
    background-color: transparent;
    cursor: pointer;

    position: relative;
    display: inline-block;
    padding: 10px 20px;
    color: #b928cb;
    font-size: 16px;
    text-decoration: none;
    text-transform: uppercase;
    overflow: hidden;
    transition: 0.5s;
    margin-top: 40px;
    letter-spacing: 4px;
  }

  & button:hover {
    background: #b928cb;
    color: white;
    border-radius: 5px;
    box-shadow: 0 0 5px #b928cb, 0 0 25px #b928cb, 0 0 50px #b928cb,
      0 0 100px #b928cb;
  }

  & button span {
    position: absolute;
    display: block;
  }
  & button span:nth-child(1) {
    top: 0px;
    left: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(90deg, transparent, #b928cb);
    animation: btn-anim1 4s linear infinite;
    animation-delay: 1s;

    @keyframes btn-anim1 {
      0% {
        left: -100%;
      }
      50%,
      100% {
        left: 100%;
      }
    }
  }
  & button span:nth-child(2) {
    top: -100%;
    right: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(180deg, transparent, #b928cb);
    animation: btn-anim2 4s linear infinite;
    animation-delay: 2s;

    @keyframes btn-anim2 {
      0% {
        top: -100%;
      }
      50%,
      100% {
        top: 100%;
      }
    }
  }
  & button span:nth-child(3) {
    bottom: 0px;
    right: -100%;
    width: 100%;
    height: 2px;
    background: linear-gradient(270deg, transparent, #b928cb);
    animation: btn-anim3 4s linear infinite;
    animation-delay: 3s;

    @keyframes btn-anim3 {
      0% {
        right: -100%;
      }
      50%,
      100% {
        right: 100%;
      }
    }
  }
  & button span:nth-child(4) {
    bottom: -100%;
    left: 0;
    width: 2px;
    height: 100%;
    background: linear-gradient(360deg, transparent, #b928cb);
    animation: btn-anim4 4s linear infinite;
    animation-delay: 4s;

    @keyframes btn-anim4 {
      0% {
        bottom: -100%;
      }
      50%,
      100% {
        bottom: 100%;
      }
    }
  }
`;

export const UserBox = styled.div`
  position: relative;

  & input {
    width: 100%;
    padding: 10px 0;
    font-size: 16px;
    color: white;
    margin-bottom: 30px;
    border: none;
    border-bottom: 1px solid white;
    outline: none;
    background: transparent;
  }

  & input:-webkit-autofill,
  & input:-webkit-autofill:hover,
  & input:-webkit-autofill:focus {
    border-bottom: 1px solid white;
    -webkit-text-fill-color: white;
    -webkit-box-shadow: 0 0 0px 1000px #0000 inset;
    transition: background-color 5000s ease-in-out 0s;
  }

  & label {
    position: absolute;
    top: 0;
    left: 0;
    padding: 10px 0;
    font-size: 16px;
    color: white;
    pointer-events: none;
    transition: 0.5s;
  }

  & input:focus ~ label,
  & input:valid ~ label,
  & input:invalid ~ label,
  & input:placeholder-shown ~ label,
  & input:-webkit-autofill ~ label {
    top: -20px;
    left: 0;
    color: #b928cb;
    font-size: 12px;
  }

  & input:invalid {
    border-bottom-color: red;
  }
`;
