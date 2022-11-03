import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule,FormsModule } from '@angular/forms';
import { BuilderRoutingModule } from './builder-routing.module';
import { BuilderComponent } from './builder/builder.component';
import { PageComponent } from './page/page.component';


@NgModule({
  declarations: [
    BuilderComponent,
    PageComponent
  ],
  imports: [
    CommonModule,
    BuilderRoutingModule,ReactiveFormsModule,FormsModule
  ]
})
export class BuilderModule { }
