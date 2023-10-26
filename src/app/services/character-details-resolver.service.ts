import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve } from '@angular/router';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model'; // Asegúrate de importar el modelo Character
import { CharacterService } from './character.service'; // Importa el servicio CharacterService

@Injectable({
  providedIn: 'root',
})
export class CharacterDetailsResolver implements Resolve<Character> {
  constructor(private characterService: CharacterService) {}

  resolve(route: ActivatedRouteSnapshot): Observable<Character> {
    const characterId = +route.paramMap.get('id');
    return this.characterService.getCharacterById(characterId);
  }
}
