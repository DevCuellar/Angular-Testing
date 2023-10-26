import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Character } from '../models/character.model';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private apiUrl = 'https://rickandmortyapi.com/api/character';

  constructor(private http: HttpClient) {}

  getCharacters(page: number): Observable<any> {
    const url = `${this.apiUrl}?page=${page}`;
    return this.http.get(url);
  }

  getCharacterById(characterId: number): Observable<Character> {
    const url = `${this.apiUrl}/${characterId}`;
    return this.http.get<Character>(url);
  }
}
