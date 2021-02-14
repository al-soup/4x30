import React from "react";
import styled from "styled-components";

const ScheduleTableStyled = styled.table`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  font-size: 1.6rem;
  border: none;
  td, tr {
    background-color: var(--green);

  }
  tr > td {
    border: 4px solid var(--yellow);
    padding: 1rem;
  }
  .header {
    border: 4px solid var(--green);
    font-weight: bold;
    font-size: 2rem;
  }
  .when {
    width: auto;
  }
  .what {
    width: 100%;
  }
  .day {
    font-weight: bold;
  }
`;

export default function ScheduleTable() {

  return (
    <>
      <ScheduleTableStyled>
        <tr className="header">
          <th className="when day">Tag</th>
          <th className="when time">Wann</th>
          <th className="what">Was</th>
        </tr>
        <tr>
          <td className="when day">Freitag</td>
          <td className="when time">17:45</td>
          <td className="what">Treffpunk am Bahnhofe blablabla</td>
        </tr>
        <tr>
          <td className="when day">Freitag</td>
          <td className="when time">Abend</td>
          <td className="what">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda modi dicta accusantium esse sequi quo voluptate! Fugiat iure tenetur ullam, numquam architecto delectus quisquam ad voluptatibus excepturi. Ipsam, ad vel?</td>
        </tr>
        <tr>
          <td className="when day">Samstag</td>
          <td className="when time">Ab 12 Uhr</td>
          <td className="what">Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque numquam ad aspernatur error officiis, eos, nemo tempore necessitatibus commodi quis laborum ratione suscipit veniam nobis nam inventore possimus ipsum cupiditate.</td>
        </tr>
        <tr>
          <td className="when day">Samstag</td>
          <td className="when time">Nachmittag</td>
          <td className="what">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Deserunt recusandae nisi qui animi consequatur commodi unde aut, earum deleniti? Doloremque rem, cumque deserunt nostrum dolore assumenda maiores quisquam doloribus sit.</td>
        </tr>
        <tr>
          <td className="when day">Samstag</td>
          <td className="when time">Abend</td>
          <td className="what">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            <ul>
              <li>Odio libero labore quo maxime doloribus unde ad itaque.</li>
              <li>Atque blanditiis voluptatibus voluptatum numquam voluptatem asperiores commodi non porro tempora qui. Enim?</li>
              <li>Odio libero labore quo maxime doloribus unde ad itaque.</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="when day">Sonntag</td>
          <td className="when time">Vormittag</td>
          <td className="what">Brunch</td>
        </tr>
        <tr>
          <td className="when day">Sonntag</td>
          <td className="when time">Mitte Nachmittag</td>
          <td className="what">Zusammenpacken und gemeinsam zum Bahnhof laufen</td>
        </tr>
      </ScheduleTableStyled>
    </>
  )
}