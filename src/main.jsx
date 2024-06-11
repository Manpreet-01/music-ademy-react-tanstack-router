import React, { StrictMode } from 'react';
import ReactDOM from 'react-dom/client';

import { RouterProvider, createRouter } from '@tanstack/react-router';

// Import the generated route tree
import { routeTree } from './routeTree.gen';


const rootElement = document.getElementById('root');


if (!rootElement.innerHTML) {
  const router = createRouter({ routeTree });

  ReactDOM.createRoot(rootElement).render(
    <StrictMode>
      <RouterProvider router={router} />
    </StrictMode>,
  );
}
