import { ButtonSidebar } from ".";

export default {
  title: "Components/ButtonSidebar",
  component: ButtonSidebar,

  argTypes: {
    state: {
      options: ["selected", "default"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    state: "selected",
    className: {},
    text: "Company",
  },
};
