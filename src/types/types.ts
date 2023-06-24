import React from "react";

export interface SidebarProps {
  step: number,
}

export interface ConstructorProps {
  setStep:  React.Dispatch<React.SetStateAction<number>>,
  step: number
}

export interface StepsValue {
  step: number,
  text: string
}