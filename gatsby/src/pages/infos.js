import { graphql } from "gatsby";
import React from 'react';
import ScheduleTable from "../components/ScheduleTable";

export default function InfosPage() {

  return (
    <>
      <h1>Infos</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi. Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aliquid sed dignissimos consequatur cumque exercitationem iure ipsum quaerat fugiat repudiandae quisquam perferendis repellendus illo tempore numquam, eaque quo molestiae placeat odio.</p>
      <h1>Ablauf</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <ScheduleTable />
      <h1>Anfahrt</h1>
      <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum aliquam eius, sapiente iure ipsum rem ut voluptatibus asperiores ab, placeat, vero quia error! Adipisci corporis maxime aperiam inventore, aspernatur nisi.</p>
      <p>TODO: Google Maps Karte einbinden</p>
    </>
  )  
}
