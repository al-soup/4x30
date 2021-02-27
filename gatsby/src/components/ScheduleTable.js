import React from "react";
import styled from "styled-components";

const ScheduleTableStyled = styled.table`
  margin-top: 2rem;
  margin-bottom: 2rem;
  position: relative;
  width: 100%;
  font-size: 1.6rem;
  border: none;
  th {
    text-align: left;
    padding: 1rem;
  }
  td, tr {
    background-color: var(--green);

  }
  tr > td {
    border: 4px solid var(--yellow);
    padding: 1rem;
    filter: brightness(120%);
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
  .saturday {
    filter: brightness(110%);
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
          <td className="when day" rowspan="2">Freitag 9. Juli</td>
          <td className="when time">17:30</td>
          <td className="what">Woodstock-Marsch vom Bahnhof Aarberg nach Niederried (ca. X km)</td>
        </tr>
        <tr>
          <td className="when time">Abend</td>
          <td className="what">Einquartieren auf Zeltplatz, dann BBQ am Lagerfeuer</td>
        </tr>
        <tr>
          <td className="when day saturday" rowspan="5">Samstag 10. Juli</td>
          <td className="when time saturday">Mittag</td>
          <td className="what saturday">Eröffnung Foodtrucks</td>
        </tr>
        <tr>
          <td className="when time saturday">Nachmittag</td>
          <td className="what saturday">
            <ul>
              <li>Pingpong</li>
              <li>Beachvolleyball</li>
              <li>Brückenspringen</li>
              <li>Kube</li>
              <li>Cornhole</li>
              <li>Spikeball</li>
              <li>Petanque</li>
              <li>...und vieles mehr</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td className="when time saturday">Vorabend</td>
          <td className="what saturday">Barbetrieb und Foodtrucks <br/> Ansprache der vier Geburtstagsjungen</td>
        </tr>
        <tr>
          <td className="when time saturday">Abend</td>
          <td className="what saturday">Musik von <a href="https://copyandshake-1.jimdosite.com/" target="_blank">Tschäppi und Manu</a> am Lagerfeuer</td>
        </tr>
        <tr>
          <td className="when time saturday">Nacht</td>
          <td className="what saturday">Woodstock-Party im Zelt mit DJ’s von Hospitium Crew sowie Comeback von Tim & Struppi</td>
        </tr>
        <tr>
          <td className="when day" rowspan="3">Sonntag 11. Juli</td>
          <td className="when time">Vormittag</td>
          <td className="what">Brunch</td>
        </tr>
        <tr>
          <td className="when time">Mitte Nachmittag</td>
          <td className="what">Baden & Chillen <br/> Zelt abbauen, aufräumen</td>
        </tr>
        <tr>
          <td className="when time">Späterer Nachmittag</td>
          <td className="what">Gemeinsamer Woodstock-Marsch zurück nach Aarberg</td>
        </tr>
      </ScheduleTableStyled>
    </>
  )
}