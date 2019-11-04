import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {HomeComponent} from './core/home/home.component';
import {AddComponent} from './components/add-series/add.component';
import {ProfileComponent} from './components/profile/profile.component';
import {CounterPageComponent} from './components/counter-page/counter-page.component';
import {ProfileCardComponent} from './components/profile-card/profile-card.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';


const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'add', component: AddComponent},
  {path: 'profile', component: ProfileComponent},
  {path: 'counter', component: CounterPageComponent},
  {path: 'profile-card', component: ProfileCardComponent},
  {path: 'shopping-list', component: ShoppingListComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
