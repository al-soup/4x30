import styled from "styled-components";

const SignupPageStyles = styled.div`
  font-size: 2rem;
  input {
    font-family: Roboto;
  }
  form {
    margin-top: 5rem;
    display: grid;
    grid-template-rows: 1fr;
    gap: 30px;
  }
  fieldset.who {
    display: grid;
    grid-template-rows: 1fr;
    gap: 1rem;
    @media (max-width: 500px) {
      padding: 5px;
    }
  }
  .user-detail {
    display: grid;
    gap: 1rem;
    align-content: start;
  }
  label + label {
    margin-top: 2rem;
  }
  button {
    width: 100%;
    @media (max-width: 380px) {
    max-width: 290px;
    }
  }
  .checkbox-container {
    margin-bottom: 2rem;
  }
  input[type=checkbox]:focus {
    outline: 1px solid rgba(0, 0, 0, 0.2);
  }
  input[type=checkbox]:hover {
    background: whitesmoke;
    background-color: whitesmoke;
  }
  input[type=checkbox] {
    background-color: white;
    border: solid 1px;
    border-radius: 2px;
    border-color: grey;
    appearance: none;
    -webkit-appearance: none;
    -moz-appearance: none;
    width: 21px;
    height: 21px;
    cursor: pointer;
    position: relative;
    top: 5px;
  }
  input[type=checkbox]:checked {
    background-color: var(--orange);
    background: var(--orange) url("data:image/gif;base64,R0lGODlhCwAKAIABAP////3cnSH5BAEKAAEALAAAAAALAAoAAAIUjH+AC73WHIsw0UCjglraO20PNhYAOw==") 4px 4px no-repeat;
  }
  .deadline {
    color: var(--orange);
  }
  .hint {
    font-size: 1.5rem;
    margin-bottom: 0;
  }
  .zuppy {
    display: none;
  }
  .success {
    background-color: #D8FF88;
    border-style: solid;
    border-color: #B9F458
  }
  .error {
    background-color: #FFBFBF;
    border-style: solid;
    border-color: #FF6969
  }
`;

export default SignupPageStyles;