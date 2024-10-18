import React from "react";
import SpecializationList from "./SpecializationList";
import { SpecializationProvider } from "../../context/SpecializationContext";

export default function Specializations(): JSX.Element {
  return (
    <SpecializationProvider>
      <SpecializationList />
    </SpecializationProvider>
  );
}
