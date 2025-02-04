import { Button } from ".";

export default {
  title: "Components/Button",
  component: Button,

  argTypes: {
    type: {
      options: ["just-icon", "with-icon"],
      control: { type: "select" },
    },
    stateProp: {
      options: ["hover", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    type: "just-icon",
    stateProp: "hover",
    className: {},
    text: "Login with Email",
  },
};
