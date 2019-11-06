import { NgModule } from '@angular/core';
import {RouterModule, Routes, Router} from '@angular/router';
import { ManageComponent } from "./manage.component";
import { TopnavComponent } from "./layout/topnav/topnav.component";
import { SidebarComponent } from "./layout/sidebar/sidebar.component";
import { FooterComponent } from "./layout/footer/footer.component";

const routes: Routes = [{
  path: '',
  component: ManageComponent
}];

@NgModule({
  declarations: [
    ManageComponent,
    TopnavComponent,
    SidebarComponent,
    FooterComponent
  ],
  imports: [
    RouterModule,
    RouterModule.forChild(routes)
  ],
  providers: []
})
export class ManageModule { }
