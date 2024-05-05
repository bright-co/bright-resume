import { Meta, StoryFn } from "@storybook/react";
import { TemplateMinimalist } from ".";

export default {
  component: TemplateMinimalist,
  title: "TemplateMinimalist",
} as Meta<typeof TemplateMinimalist>;

const Template: StoryFn<typeof TemplateMinimalist> = (args) => {
  return <TemplateMinimalist {...args} />;
};

export const Main = Template.bind({});
Main.args = {};
