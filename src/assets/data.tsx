import FirstPage from "../components/FirstPage/FirstPage";
import SecondPage from "../components/SecondPage/SecondPage";
import Summary from "../components/Summary/Summary";
import ThirdPage from "../components/ThirdPage/ThirdPage";
import { StepsValue, pageDataValue } from "../types/types";

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
    component: <FirstPage />
  },
  {
    title: 'Select your plan',
    caption: 'You have the option of monthly or yearly billing',
    page: 2,
    component: <SecondPage />
  },
  {
    title: 'Pick add-ons',
    caption: 'Add-ons help enhance your experience',
    page: 3,
    component: <ThirdPage />
  },
  {
    title: 'Finishing up',
    caption: 'Double-check everything before confirmation',
    page: 4,
    component: <Summary />
  }
]