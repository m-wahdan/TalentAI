import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home.component';
import { AboutComponent } from './pages/about.component';
import { ResourcesComponent } from './pages/resources.component';
import { HelpComponent } from './pages/help.component';
import { JobsComponent } from './pages/jobs.component';
import { ApplyComponent } from './pages/apply.component';
import { HireComponent } from './pages/hire.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'about', component: AboutComponent },
  { path: 'resources', component: ResourcesComponent },
  { path: 'help', component: HelpComponent },
  { path: 'jobs', component: JobsComponent },
  { path: 'apply', component: ApplyComponent },
  { path: 'hire', component: HireComponent },
  { path: '**', redirectTo: '' }
];