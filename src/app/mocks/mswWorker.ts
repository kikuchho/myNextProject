

import { setupWorker }from 'msw/browser';
import { handlers } from './handlers';

// this is supposed to be running on client  
export const mswWorker = setupWorker()