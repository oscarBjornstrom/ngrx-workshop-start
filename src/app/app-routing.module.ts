import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AddComponent} from './components/add-series/add.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CounterPageComponent} from './components/counter-page/counter-page.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'counter', component: CounterPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
