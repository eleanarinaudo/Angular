import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ContactComponent } from './pages/contact/contact.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch:'full',
  },

  {
    path:'home',
    component:HomeComponent,
  },
  {
    path:'about',
    component:AboutComponent,
  },
  {
    path:'contact',
    component:ContactComponent,
  },
  {
    path:'shared',
    loadChildren: () => import('./shared/shared.module').then(m=>m.SharedModule),
  },
  {
    path:'photos',
    loadChildren: () => import('./pages/photos/photos.module').then(m=>m.PhotosModule),
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
