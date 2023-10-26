// character-details.component.ts
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Character } from '../../models/character.model';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-character-details',
  templateUrl: './character-details.component.html',
  styleUrls: ['./character-details.component.css'],
})
export class CharacterDetailsComponent {
  character: Character;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private navigationService: NavigationService
  ) {
    this.character = this.route.snapshot.data['character'];
  }

  hasPreviousRoute() {
    return this.navigationService.hasPreviousRoute();
  }

  goBack() {
    this.navigationService.goBack();
  }
}
