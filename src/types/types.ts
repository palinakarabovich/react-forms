import React from "react";

export interface SidebarProps {
  step: number,
}

export interface ConstructorProps {
  setStep: React.Dispatch<React.SetStateAction<number>>,
  step: number,
}

export interface CheckoutProps {
  setStep: React.Dispatch<React.SetStateAction<number>>
}

export interface StepsValue {
  step: number,
  text: string
}

export interface pageDataValue {
  title: string,
  caption: string,
  page: number,
  component: React.JSX.Element
}

