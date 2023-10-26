import { Component, OnInit } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Character } from '../../models/character.model';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { NavigationService } from 'src/app/services/navigation.service';

@Component({
  selector: 'app-character-list',
  templateUrl: './character-list.component.html',
  styleUrls: ['./character-list.component.css'],
})
export class CharacterListComponent implements OnInit {
  characters: Character[] = [];
  selectedPage: number = 1;
  totalPages: number = -1;

  constructor(
    private characterService: CharacterService,
    private router: Router,
    private route: ActivatedRoute,
    private navigationService: NavigationService
  ) {}

  ngOnInit() {
    this.route.queryParams.subscribe((queryParams) => {
      const page = queryParams['page'];
      if (page) {
        this.selectedPage = Number(page);
        this.loadCharacters(this.selectedPage);
      } else {
        this.loadCharacters(this.selectedPage);
      }
    });
  }

  changePage(page: number) {
    this.selectedPage = page;
    this.navigationService.navigateTo([], {
      relativeTo: this.route,
      queryParams: { page: page },
    });

    this.loadCharacters(page);
  }

  loadCharacters(page: number) {
    this.characterService.getCharacters(page).subscribe((data) => {
      this.characters = data.results;

      if (this.totalPages == -1) {
        this.totalPages = data.info.pages;
      }
    });
  }

  navigateToCharacterDetails(characterId: number) {
    this.navigationService.navigateTo(['characters', characterId]);
  }
}
