import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { HttpClientModule } from '@angular/common/http';
import { SeasonPipe } from './pipes/season.pipe';
import { EpisodePipe } from './pipes/episode.pipe';
import { FormsModule } from '@angular/forms';
import { PaginationComponent } from './components/pagination/pagination.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';

@NgModule({
  declarations: [
    AppComponent,
    CharacterListComponent,
    EpisodeListComponent,
    SeasonPipe,
    EpisodePipe,
    PaginationComponent,
    CharacterDetailsComponent
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
