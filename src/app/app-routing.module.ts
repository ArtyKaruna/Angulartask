import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BiodataformComponent } from './biodataform/biodataform.component';
const routes: Routes = [
  { path: 'BioDataform', component: BiodataformComponent }
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 
  
}
