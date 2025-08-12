import { Routes } from '@angular/router';
import { Home } from './pages/home/home';
import { Districts } from './pages/districts/districts';
import { Contact } from './pages/contact/contact';

export const routes: Routes = [

 {
  path: '',
  component: Home
},

{
  path: 'districts',
  component: Districts
},

{
  path: 'contact',
  component: Contact
}
];

