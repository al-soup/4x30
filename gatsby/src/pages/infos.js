import React from 'react';
import styled from "styled-components";
import ScheduleTable from "../components/ScheduleTable";
import SEO from "../components/SEO";
import NextStep from "../components/NextStep";

export default function InfosPage() {

  const InfosPageStyles = styled.div`
    .deadline {
      color: var(--orange);
    }
    .link, .price-list {
      font-size: 2rem;
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
        <p><i>Woodstock Marsch:</i><br/> Am Freitag um 17:30 sind alle dazu eingeladen, zusammen mit uns vom Bahnhof Aarberg gemütlich zum Campingplatz zu spazieren. Am Sonntagnachmittag werden wir zum Abschluss des Festes auch alle zusammen zurück nach Aarberg gehen. Falls du nicht von Anfang an dabei bist, bieten sich verschiedene Anreisemöglichkeiten an.</p>
        <p><i>ÖV ab Aarberg:</i><br/>Schöner Spaziergang entlang der Aare Richtung Sportplatz Radelfingen. Der Weg führt grössten Teils auf einer unbefahrenen Nebenstrasse entlang der Aare bis zum Campingplatz. Distanz = 4.5km / Dauer = ca. 60min.</p>
        <p><i>ÖV ab Kallnach:</i><br/> Gehweg entlang der Hauptstrasse und entlang Nebenstrassen. Distanz = 2.5km / Dauer = ca. 30min.</p>
        <p><i>Mit dem Auto:</i><br/> Die Anfahrt erfolgt von Kallnach über die Krosenrain in die Kallnachstrasse bis nach Niederried b. Kallnach. Ab Niederried ist der Camping beschildert. Vor Ort hat es Parkplätze, wenn auch nur in begrenzter Anzahl. Die Parkplätze gehören zum Campingplatz. Den Weisungen und Richtlinien des Campings ist Folge zu tragen.</p>
        <h1>Verpflegung</h1>
        <p><i>Freitag:</i><br/>Am Freitagabend ist jeder selber für die Verpflegung zuständig. Es gibt auf dem Camping Feuerstellen, welche benutzt werden können. Vor Ort wird es möglich sein, Bier und andere Getränke zu beziehen.</p>
        <p><i>Samstag:</i><br/>Ab Samstagmittag wird ein Foodtruck stationiert sein. Es werden asiatische und Italienische Spezialitäten angeboten gemäss Preisliste vor Ort. Im Verlaufe des Nachmittags wird dann zusätzlich der Barbetrieb lanciert. Weiterhin stehen auch die Feuerstellen zur Verfügung.</p>
        <p>Barbetrieb, Foodtrucks und Musikanlage wird von der <a href="http://www.hospitium.ch/" target="_blank" rel="noreferrer">Hospitium Lounge</a> organisiert.</p>
        <p><i>Sonntag:</i><br/>Am Sonntag wird von uns ein Brunch offeriert.</p>
        <h1>Camping</h1>
        <p>Von Freitag auf Samstag und von Samstag auf Sonntag besteht die Möglichkeit vor Ort zu Campieren. Wir bitten euch, wenn möglich die Übernachtungen bei der Anmeldung bereits anzugeben. Grundsätzlich kann auf dem Camping nicht reserviert werden. Wir gehen aber davon aus, dass genügend Plätze vorhanden sind. Bitte ein eigenes Zelt mitbringen :)</p>
        <p>
          <a href="https://goo.gl/maps/AvdBsikeJ7jRXfxa9" target="_blank" rel="noreferrer">Camping Niederried bei Kallnach</a>
          <br/><br/>
          Kosten:
        </p>
        <ul className="price-list">
          <li>Pro Nacht, Pro Person = 7.-</li>
          <li>Bezug von Feuerholz = 5.-</li>
        </ul>
        <NextStep link={"/signup"} text={"Hört sich gut an? Hier kannst du dich anmelden"}></NextStep>
      </InfosPageStyles>
    </>
  )  
}
