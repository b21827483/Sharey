import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.tsx'
import { ClerkProvider } from '@clerk/clerk-react';
import React from 'react';

const clerkPubKey = import.meta.env.VITE_CLERK_PUB_KEY;

if (!clerkPubKey) {
  throw new Error("Missing Publishable Key")
}

createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <ClerkProvider publishableKey={clerkPubKey}>
        <App />
    </ClerkProvider>
  </React.StrictMode>
)
