import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {HomeComponent} from './core/home/home.component';
import {AddComponent} from './components/add-series/add.component';
import {HeaderComponent} from './core/header/header.component';
import {SerieCardComponent} from './components/serie-card/serie-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './components/profile/profile.component';
import {CounterPageComponent} from './components/counter-page/counter-page.component';
import { ProfileCardComponent } from './components/profile-card/profile-card.component';
import { SeriesComponent } from './components/series/series.component';
import { ShoppingListComponent } from './components/shopping-list/shopping-list.component';
import { AddItemFormComponent } from './components/shopping-list/add-item-form/add-item-form.component';
import { ListItemComponent } from './components/shopping-list/list-item/list-item.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AddComponent,
    HeaderComponent,
    SerieCardComponent,
    ProfileComponent,
    CounterPageComponent,
    ProfileCardComponent,
    SeriesComponent,
    ShoppingListComponent,
    AddItemFormComponent,
    ListItemComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    MaterialModule,
    FormsModule
    // TODO 1: Add redux devtools
    // TODO 2: Connect reducers
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
