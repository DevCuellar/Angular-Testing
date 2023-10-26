import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CharacterListComponent } from './components/character-list/character-list.component';
import { EpisodeListComponent } from './components/episode-list/episode-list.component';
import { CharacterDetailsComponent } from './components/character-details/character-details.component';
import { CharacterDetailsResolver } from './services/character-details-resolver.service';

const routes: Routes = [
  { path: '', redirectTo: '/characters', pathMatch: 'full' },
  { path: 'characters', component: CharacterListComponent },
  { path: 'episodes', component: EpisodeListComponent },
  {
    path: 'characters/:id',
    component: CharacterDetailsComponent,
    resolve: {
      character: CharacterDetailsResolver,
    },
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
