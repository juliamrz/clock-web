// External deps
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import {FormManagerProvider} from '@s-chat/form-manager';

// Local deps
import App from './App.tsx'
import './index.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <BrowserRouter>
      <FormManagerProvider
        fieldValueSelector={{
          select: (value: string | number) => value,
          default: (e: any) => {
            if (e?.target) {
              return e.target.value;
            }
            return e;
          },
        }}
      >
        <App />
      </FormManagerProvider>
    </BrowserRouter>
  </StrictMode>,
)
