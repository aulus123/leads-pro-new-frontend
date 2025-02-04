import { ButtonPrev } from ".";

export default {
  title: "Components/ButtonPrev",
  component: ButtonPrev,

  argTypes: {
    state: {
      options: ["disable"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "disable",
    className: {},
  },
};
