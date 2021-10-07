import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { UserHeaderComponent } from './components/user-header/user-header.component';



@NgModule({
  declarations: [
    SideBarComponent,
    UserHeaderComponent
  ],
  imports: [
    CommonModule
  ]
})
export class SharedModule { }
