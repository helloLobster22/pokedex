import React from "react";
import Pokemon from "../components/Pokemon";
import AbilitiesCard from "../components/AbilitiesCard";
import Description from "../components/Description";

export default function InfoBox() {
  return (
    <section className="infoBox">
      <Pokemon />
      <AbilitiesCard />
      <Description />
    </section>
  );
}
