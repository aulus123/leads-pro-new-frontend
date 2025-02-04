import { PaginaO } from ".";

export default {
  title: "Components/PaginaO",
  component: PaginaO,

  argTypes: {
    property1: {
      options: ["pag-1"],
      control: { type: "select" },
    },
  },
};

export const Default = {
  args: {
    property1: "pag-1",
    className: {},
  },
};
