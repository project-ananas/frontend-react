import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./About.css";

function About() {
  return (
    <view style={{ fles: 1 }}>
      <h1>Over het project</h1>
      <p>
        Het project Ananas is gemaakt voor het vak IMS. Het is gemaakt om te
        meten wat de drukte is op de 4de verdieping van Rachelsmolen 1, gebouw
        R1. De Raspberry Pie is verbonden met het FIND3 systeem die het signaal
        ontvangt van de drie sensoren. De data wordt verstuurd naar de backend,
        die het op slaat voor de Geschiedenis pagina, en doorverstuurd voor de
        Plattegrond pagina.
        <div>
          <br /> Verder bestaat het systeen uit de volgende componenten:
          <ul>
            <li>Raspberry Pie 3</li>
            <li>2 WiFi dongels</li>
            <li>3 Sensoren</li>
            <li>Java back-end met REST server</li>
            <li>mySQL database</li>
            <li>ReactJS Front-end</li>
            <li>Ticket systeem voor incidenten</li>
          </ul>
        </div>
        Om het gehele proces in kaart te brengen is hieronder een afbeelding ter
        verduidelijking.
      </p>
      <img src="12Connect.png" alt="" id="Image"></img>
    </view>
  );
}

export default About;
