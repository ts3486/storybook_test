// YourComponent.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';
import { withDesign } from 'storybook-addon-designs';

import FileInput from './FileInput';

//π This default export determines where your story goes in the story list
export default {
  /* π The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Atoms/FileInput',
  component: FileInput,
  decorators: [withDesign],
} as ComponentMeta<typeof FileInput>;

//π We create a βtemplateβ of how args map to rendering
const Template: ComponentStory<typeof FileInput> = (args) => <FileInput {...args} />;

export const FirstStory = Template.bind({});

FirstStory.parameters = {
  design: {
    type: 'figma',
    url: 'https://www.figma.com/file/6cLpgJCLxfkINbP6kt1Yz5/Storybook_test?node-id=0%3A1',
  },
};

FirstStory.args = {
  /*π The args you need here will depend on your component */
};
