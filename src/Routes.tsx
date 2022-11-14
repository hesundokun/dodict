import React, { Suspense } from 'react';
import { Routes as Switch, Route } from 'react-router-dom';

const NewWordForm = React.lazy(() => import('@/views/NewWord'));

const Routes = () => (
  <Suspense fallback={<>Loading...</>}>
    <Switch>
      <Route index element={<NewWordForm />} />
      <Route path="/create" element={<NewWordForm />} />
      <Route path="/dictionary" element={<>Dict</>} />
      <Route path="*" element={<>Not Found</>} />
    </Switch>
  </Suspense>
);

export default Routes;
