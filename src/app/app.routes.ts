import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ServicesComponent } from './services/services.component';
import { PartsComponent } from './parts/parts.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { JobsComponent } from './jobs/jobs.component';

export const routes: Routes = [
    {path:"", component: HomeComponent},
    {path: "app-services", component: ServicesComponent},
    {path: "app-parts", component: PartsComponent},
    {path: "app-dashboard",component: DashboardComponent},
    {path: "app-jobs",component:JobsComponent}
];
