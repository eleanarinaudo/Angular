import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ArchitectureComponent } from  './architecture/architecture.component';
import { CityComponent } from  './city/city.component';
import { PeoplesComponent } from  './peoples/peoples.component';
import { CatsComponent } from './cats/cats.component';


const routes: Routes = [
  {
    path: 'architecture',
    component: ArchitectureComponent,
  },
  {
    path: 'city',
    component: CityComponent,
  },
  {
    path: 'peoples',
    component: PeoplesComponent,
  },
  {
    path: 'cats',
    component: CatsComponent,
  }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PhotosRoutingModule { }
