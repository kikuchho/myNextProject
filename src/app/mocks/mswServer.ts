'use client'
//import { http, HttpResponse } from 'msw';
import { setupServer }  from 'msw/node';
import { handlers } from './handlers';




//this is supposed to be running on server side 
export const mswServer = setupServer( ...handlers )


