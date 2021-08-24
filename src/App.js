import React, { lazy, Suspense } from 'react';

import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import { WaitSkeleton } from './components/Skeleton';
import { Layout } from './views/Layout';

const Home = lazy(() => import('./views/Home'));
const Detail = lazy(() => import('./views/Detail'));

const App = () => {
  return (
    <Suspense fallback={<WaitSkeleton />}>
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/pokemon/:name" component={Detail} />
          </Switch>
        </Layout>
      </Router>
    </Suspense>
  );
};

export default App;
