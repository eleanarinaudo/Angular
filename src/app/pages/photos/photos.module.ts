import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PhotosRoutingModule } from './photos-routing.module';

import { CityComponent } from './city/city.component';
import { PeoplesComponent } from './peoples/peoples.component';
import { ArchitectureComponent } from './architecture/architecture.component';
import { CatsComponent } from './cats/cats.component';


@NgModule({
  declarations: [CityComponent, PeoplesComponent, ArchitectureComponent, CatsComponent],
  imports: [
    CommonModule,
    PhotosRoutingModule
  ]
})
export class PhotosModule { }
