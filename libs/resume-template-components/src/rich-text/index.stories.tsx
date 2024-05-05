import { Meta, StoryFn } from "@storybook/react";
import { RichText } from ".";
import { useState } from "react";

export default {
  component: RichText,
  title: "RichText",
} as Meta<typeof RichText>;

const Template: StoryFn<typeof RichText> = (args) => {
  const [value, setValue] = useState(
    "<p>this is a test  <strong>bright-resume</strong> </p> "
  );
  return <RichText {...args} value={value} onChange={setValue} />;
};

export const WithToolbar = Template.bind({});
WithToolbar.args = { withToolbar: true };

export const WithoutToolbar = Template.bind({});
WithoutToolbar.args = { withToolbar: false };
