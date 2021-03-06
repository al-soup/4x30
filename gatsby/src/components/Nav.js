import React from "react";
import { Link } from "gatsby";
import styled from "styled-components";

const NavStyles = styled.nav` // is scoped
  margin-bottom: 5rem;
  ul {
    margin: 0;
    padding: 0;
    text-align: center;
    list-style: none;

    display: grid;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    grid-gap: 2rem;
    align-items: center;
  }
  li {
    --rotate: -2deg;
    transform: rotate(var(--rotate));
    order: 1;
    &:nth-child(1) {
      --rotate: 0.5deg;
    }
    &:nth-child(2) {
      --rotate: -0.5deg;
    }
    /* &:nth-child(4) {
      --rotate: 1.5deg;
    } */
    &:hover {
      --rotate: 1.5deg;
    }
  }
  a {
    font-size: 5rem;
    text-decoration: none;
    &:hover {
      color: var(--red)
    }

    @media (max-width: 650px) {
      font-size: 4rem;
    }
  }
  @media (max-width: 500px) {
    ul {
      grid-template-rows: auto auto;
      grid-template-columns: 1fr 1fr;
    }
  }
`;

export default function Nav() {
  return (
    <NavStyles>
      <ul>
        <li><Link to="/">Start</Link></li>
        <li><Link to="/infos">Infos</Link></li>
        <li><Link to="/signup">Anmelden</Link></li>
        <li><Link to="/faq">FAQ</Link></li>
      </ul>
    </NavStyles>
  )
}