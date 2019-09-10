import { configure } from '@storybook/react';
// automatically import all files ending in *.stories.tsx
const req = require.context('../src', true, /\.stories\.tsx$/);
import '!style-loader!css-loader!sass-loader!../src/styles/index.scss';

function loadStories() {
  req.keys().forEach(req);
}

configure(loadStories, module);
