import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: any[] = [];
  private deck: any[] = [];

  // Observables to track state changes
  private charactersSubject = new BehaviorSubject<any[]>([]);
  private deckSubject = new BehaviorSubject<any[]>([]);

  characters$ = this.charactersSubject.asObservable();
  deck$ = this.deckSubject.asObservable();

  constructor(private http: HttpClient) {}

  // Fetch characters once and store them in the service
  fetchCharacters() {
    this.http.get<any>('https://api.disneyapi.dev/character').subscribe((data) => {
      this.characters = data.data || []; // Ensure data exists
      this.charactersSubject.next(this.characters); // Emit updated value
    });
  }

  // Get characters from the stored array
  getCharacters(): any[] {
    return this.characters;
  }

  // Get deck from the stored array
  getDeck(): any[] {
    return this.deck;
  }

  // Add character to deck (removes from characters list)
  addToDeck(character: any): void {
    this.characters = this.characters.filter((c) => c._id !== character._id);
    this.deck.push(character);

    // Emit updates to subscribers
    this.charactersSubject.next(this.characters);
    this.deckSubject.next(this.deck);
  }

  // Remove character from deck (adds back to characters list)
  removeFromDeck(character: any): void {
    this.deck = this.deck.filter((c) => c._id !== character._id);
    this.characters.push(character);

    // Emit updates to subscribers
    this.deckSubject.next(this.deck);
    this.charactersSubject.next(this.characters);
  }

  // Get character details by name
  getCharacterByName(name: string): Observable<any> {
    return new Observable((observer) => {
      const character = this.characters.find(
        (char) => char.name.toLowerCase() === name.toLowerCase()
      );

      if (character) {
        observer.next(character);
      } else {
        observer.error('Character not found');
      }

      observer.complete();
    });
  }
}
