//TextField.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import TextField from './DatePicker';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/DatePicker',
  component: TextField,
} as ComponentMeta<typeof TextField>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof TextField> = (args) => <TextField {...args} />;

export const FirstStory = Template.bind({});

FirstStory.args = {
  /*π The args you need here will depend on your component */
};
