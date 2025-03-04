import Breadcrumb from "@/sheardComponent/Breadcrumb";
import React from "react";
import FullTeam from "./FullTeam";
import Cta from "../home/Cta";
const TeamMain = () => {
  return (
    <>
      <Breadcrumb pageTitle="Team" />
      <FullTeam />
      <Cta/>
    </>
  );
};

export default TeamMain;
