import { Routes } from '@angular/router';
import { provideRouter } from '@angular/router';

// Import your components
import { AboutComponent } from './components/about/about.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { SkillsComponent } from './components/skills/skills.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { ContactComponent } from './components/contact/contact.component';

// Define Routes
export const routes: Routes = [
  { path: '', component: AboutComponent },
  { path: 'experience', component: ExperienceComponent },
  { path: 'skills', component: SkillsComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'contact', component: ContactComponent }
];

export const routingProviders = [
  provideRouter(routes)  // ✅ Use provideRouter() for standalone projects
];
