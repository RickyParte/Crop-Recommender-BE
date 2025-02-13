import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CropComponent } from './crop/crop.component';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';

const routes: Routes = [
  { path: '', component: LandingComponent},
  { path: 'predict', component: CropComponent  },
  { path: 'login', component: AppComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
