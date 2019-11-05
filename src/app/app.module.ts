import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MaterialModule} from './shared/material/material.module';
import {HomeComponent} from './core/home/home.component';
import {AddComponent} from './components/series/add-series/add.component';
import {HeaderComponent} from './core/header/header.component';
import {SerieCardComponent} from './components/series/serie-card/serie-card.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {ProfileComponent} from './components/profile/profile.component';
import {CounterPageComponent} from './components/counter-page/counter-page.component';
import {ProfileCardComponent} from './components/profile/profile-card/profile-card.component';
import {SeriesComponent} from './components/series/series.component';
import {ShoppingListComponent} from './components/shopping-list/shopping-list.component';
import {AddItemFormComponent} from './components/shopping-list/add-item-form/add-item-form.component';
import {ListItemComponent} from './components/shopping-list/list-item/list-item.component';
import {StoreModule} from '@ngrx/store';
import {reducers} from './store/reducers';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {environment} from '../environments/environment';

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
    FormsModule,
    StoreModule.forRoot(reducers, {
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true
      }
    }),
    StoreDevtoolsModule.instrument({maxAge: 25, logOnly: environment.production})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
