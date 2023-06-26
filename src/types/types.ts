import React from "react";

export interface SidebarProps {
}

export interface ConstructorProps {
}

export interface CheckoutProps {
}

export interface StepsValue {
  text: string,
  step: number
}

export interface pageDataValue {
  title: string,
  caption: string,
  page: number,
  component: React.JSX.Element
}

export interface formValues {
  name: string,
  email: string,
  phone: string
}

export interface dataPlanValue {
  name: string,
  price: number,
  icon: string
}

export interface planValue {
  name: string,
  price: number,
  yearly: boolean;
}
