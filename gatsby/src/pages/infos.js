import React from 'react';
import styled from "styled-components";
import ScheduleTable from "../components/ScheduleTable";
import SEO from "../components/SEO";

export default function InfosPage() {

  const InfosPageStyles = styled.div`
    .deadline {
      color: var(--orange);
    }
  `;

  return (
    <>
      <SEO title="Infos" />
      <InfosPageStyles>
        <h3 className="deadline">Anmeldefrist bis 25. Mai!</h3>
        <h1>4x30 Party Infos</h1>
        <h2>Freitag 9. Juli bis Sonntag 11. Juli 2021</h2>
        <p>Im Aareböötli sitzend wurde uns im vergangenen Jahr endgültig bewusst: Die 30 naht und damit verbunden die Frage; wie soll dieses runde Jubiläum würdig gefeiert werden? Anstelle vier Sausen zu schmeissen bot sich aufgrund unseres teils gemeinsamen Umfelds die Gelegenheit, diese Vorfreude und Motivation zu bündeln und zu einem grossen Event zu vereinen. Als Austragungsort einigten wir uns auf die Zieldestination des damaligen Bootsausflugs im letzten Sommer: Der Zeltplatz Niederried.</p>
        <p>Ob gross oder klein, ob jung oder jung geblieben, ob gemütlich oder sportlich motiviert, ob am Lagerfeuer oder Tanzbein schwingend im Partyzelt; für alle Gäste ist etwas dabei.</p>
        <p>Eure Teilnahme an diesem Anlass ist das grösste Geschenk, dass ihr uns machen könnt. Seid ihr mit uns die ganzen drei Tage an Bord, so verstärkt sich der Woodstock-Spirit. Jeder und jede soll sich wohlfühlen, kommt und geht wann er will.</p>
        <p>Falls ihr uns dennoch etwas geben möchtet, könnt ihr uns gerne mit einem kleinen Unkostenbeitrag in die Kollekte unterstützen.</p>
        <h1>Ablauf</h1>
        <ScheduleTable />
        <h1>Anfahrt</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
        {/* TODO: Google Maps Karte einbinden */}
        {/* TODO: Link to Anmeldung */}
      </InfosPageStyles>
    </>
  )  
}
