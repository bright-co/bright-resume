import { Meta, StoryFn } from "@storybook/react";
import { RichText2 } from ".";
import { useState } from "react";

export default {
  component: RichText2,
  title: "RichText2",
} as Meta<typeof RichText2>;

const Template: StoryFn<typeof RichText2> = (args) => {
  const [value, setValue] = useState(
    "<p>this is a test  <strong>bright-resume</strong> </p> "
  );
  return <RichText2 {...args} value={value} onChange={setValue} />;
};

export const WithToolbar = Template.bind({});
WithToolbar.args = { withToolbar: true };

export const WithoutToolbar = Template.bind({});
WithoutToolbar.args = { withToolbar: false };
