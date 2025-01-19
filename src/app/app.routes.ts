import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { PropertiesComponent } from './pages/properties/properties.component';
import { PropertyComponent } from './pages/property/property.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';

export const routes: Routes = [
  {
    title: 'Home',
    path: '',
    component: HomeComponent,
  },
  {
    title: 'About Us',
    path: 'about',
    component: AboutComponent,
  },
  {
    title: 'Properties',
    path: 'properties',
    component: PropertiesComponent,
  },
  {
    title: 'Property Details',
    path: 'properties/:id',
    component: PropertyComponent,
  },
  {
    title: 'Services',
    path: 'services',
    component: ServicesComponent,
  },
  {
    title: 'Contact',
    path: 'contact',
    component: ContactComponent,
  },
];
