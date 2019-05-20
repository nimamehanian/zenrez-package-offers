import React from 'react';
// import { Route, Switch } from 'react-router-dom';
import { hot } from 'react-hot-loader';
import styled from 'styled-components';
import GlobalStyles from 'styles/global';
import { $cream } from 'styles/colors';

const Test = styled.div`
  color: ${$cream};
  background: #444;
  height: 60px;
  font-size: 20px;
  line-height: 3;
  padding: 0px 0px 0px 8px;
`;

function App() {
  return (
    <div>
      <GlobalStyles />
      <Test>yolo, baby</Test>
      {/* <Header /> */}
      {/* <Switch> */}
      {/* <Route exact path="/pathA" component={CompA} /> */}
      {/* <Route exact path="/pathB" component={CompB} /> */}
      {/* </Switch> */}
      {/* <Footer /> */}
    </div>
  );
}

export default hot(module)(App);
