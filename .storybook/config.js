import { configure, addDecorator } from "@storybook/react";
import { withInfo } from "@storybook/addon-info";
import * as React from "react";
import { createGlobalStyle } from 'styled-components'

// automatically import all files ending in *.stories.js
const req = require.context("./../packages", true, /stories/);
const loadStories = () => {
  req.keys().forEach(filename => req(filename));
};

const GlobalStyle = createGlobalStyle`
  @import url('https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap');
  @import url('https://fonts.googleapis.com/css?family=Nunito+Sans&display=swap');

  body {
    padding: 0;
    margin: 0;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: antialiased;
    font-smoothing: antialiased
  }
`;

const withGlobal = cb => (
  <React.Fragment>
    <GlobalStyle />
    {cb()}
  </React.Fragment>
);

addDecorator(withInfo());
addDecorator(withGlobal);

configure(loadStories, module);
