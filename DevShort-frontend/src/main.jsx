// import { StrictMode } from 'react'
// import { createRoot } from 'react-dom/client'
// import './index.css'
// import App from './App.jsx'
// import { StoreProvider } from './contextApi/ContextApi.jsx'

// createRoot(document.getElementById('root')).render(
//   <StrictMode>
//      <StoreProvider>
//     <App />
//     </StoreProvider>
//   </StrictMode>,
// )

import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.jsx';
import { StoreProvider } from './contextApi/ContextApi.jsx';
import {
  QueryClient,
  QueryClientProvider,
} from '@tanstack/react-query';

// Step 1: Create QueryClient instance
const queryClient = new QueryClient();

// Step 2: Wrap App with QueryClientProvider
createRoot(document.getElementById('root')).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <StoreProvider>
        <App />
      </StoreProvider>
    </QueryClientProvider>
  </StrictMode>
);
