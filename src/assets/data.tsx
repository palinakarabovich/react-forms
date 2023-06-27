import Form from "../components/Form/Form";
import Plans from "../components/Plans/Plans";
import Summary from "../components/Summary/Summary";
import AddOns from "../components/AddOns/AddOns";
import { StepsValue, addOnsValue, dataPlanValue, pageDataValue } from "../types/types";
import arcadeIcon from '../img/icon-arcade.svg'
import proIcon from '../img/icon-pro.svg'
import advancedIcon from "../img/icon-advanced.svg"

export const dataSteps: Array<StepsValue> = [
  {
    step: 1,
    text: 'Your info'
  },
  {
    step: 2,
    text: 'Select plan'
  },
  {
    step: 3,
    text: 'Add-ons'
  },
  {
    step: 4,
    text: 'Summary'
  }
]

export const dataPage: Array<pageDataValue> = [
  {
    title: 'Personal info',
    caption: 'Please provide your name, telephone and phone number',
    page: 1,
    component: <Form />
  },
  {
    title: 'Select your plan',
    caption: 'You have the option of monthly or yearly billing',
    page: 2,
    component: <Plans />
  },
  {
    title: 'Pick add-ons',
    caption: 'Add-ons help enhance your experience',
    page: 3,
    component: <AddOns />
  },
  {
    title: 'Finishing up',
    caption: 'Double-check everything before confirmation',
    page: 4,
    component: <Summary />
  }
]

export const dataPlan: Array<dataPlanValue>= [
  {
    name: 'Arcade',
    price: 9,
    icon: arcadeIcon
  },
  {
    name: 'Advanced',
    price: 12,
    icon: advancedIcon
  },
  {
    name: 'Pro',
    price: 15,
    icon: proIcon
  },
]

export const dataAddons: Array<addOnsValue> = [
  {
    name: 'Online service',
    caption: 'Access to multiple services',
    price: 1
  },
  {
    name: 'Larger storage',
    caption: 'Extra 1TB of cloud service',
    price: 2
  },
  {
    name: 'Customizable profile',
    caption: 'Custom theme on your profile',
    price: 2
  },
]