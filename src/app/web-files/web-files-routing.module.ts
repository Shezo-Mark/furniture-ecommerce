import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WebFilesComponent } from './web-files.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
   {
    path: '',
    component: WebFilesComponent,
    children: [
      { path: '', component: HomeComponent },
      { path: 'index', component: HomeComponent },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WebFilesRoutingModule { }
