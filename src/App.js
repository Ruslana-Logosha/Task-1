import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import React, { Suspense } from 'react';
import { ThemeProvider } from '@material-ui/core';
import theme from './common/theme';
import StoryBook from './components/StoryBook/StoryBook';
import SignUp from './components/SignUp/SignUp';

export default function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path="/story-book" exact>
              <StoryBook />
            </Route>
            <Route path="/sign-up" exact>
              <SignUp />
            </Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </Suspense>
  );
}
