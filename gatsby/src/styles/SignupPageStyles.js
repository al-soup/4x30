import styled from "styled-components";

// TODO: Finsih styling
// TODO: Make checkboxes bigger
const SignupPageStyles = styled.div`
  font-size: 2rem;
  input {
    font-family: Roboto;
  }
  form {
    display: grid;
    grid-template-rows: 1fr 1fr;
    gap: 20px;
  }
  .who {
    /* display: grid; */
    /* grid-template-rows: 1fr 1fr 1fr 1fr */
  }
  .zuppy {
    display: none;
  }
`;

export default SignupPageStyles;