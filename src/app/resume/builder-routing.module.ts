import { BuilderComponent } from './builder/builder.component';
import { PageComponent } from './page/page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  
  { path:'builder' , component:BuilderComponent },
  { path:'page' , component:PageComponent }
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BuilderRoutingModule { }
