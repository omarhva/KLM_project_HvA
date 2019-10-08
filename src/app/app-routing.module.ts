import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from "./components/mainpage/home/home.component";
import {MaintenanceComponent} from "./components/maintenance/maintenance.component";
import {MechanicComponent} from "./components/mechanic/mechanic.component";
import {GeneralComponent} from "./components/general/general.component";
import {ErrorPageComponent} from "./components/mainpage/error-page/error-page.component";

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'maintenance', component: MaintenanceComponent},
  {path: 'mechanic', component: MechanicComponent},
  {path: 'general', component: GeneralComponent},
  {path: 'not-found', component: ErrorPageComponent, data: {message: 'page not found'}},
  {path: '**', redirectTo: '/not-found'},

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
