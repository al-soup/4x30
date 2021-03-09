import styled from "styled-components";

const BirthdayBoyCardStyles = styled.div`
  display: grid;
  @supports not (grid-template-rows: subgrid) {
    grid-template-rows: auto, 1fr, auto, auto
  }
  grid-template-rows: subgrid; /* Row sizing from BirthdayBoysGridStyles */
  grid-row: span 4;
  grid-gap: 1rem;
  h2 {
    transform: rotate(-1deg);
    text-align: center;
    display: inline;
    margin-bottom: -2rem;
    z-index: 4;
    background-color: var(--orange);
    padding: 0 2px 2px 2px;
  }
  .detail-container {
    transform: rotate(1deg);
    text-align: center;
    margin-top: -3.5rem;
  }
  .detail {
    background-color: var(--orange);
    font-size: 2rem;
    padding: 3px;
  }
`;

export default BirthdayBoyCardStyles;