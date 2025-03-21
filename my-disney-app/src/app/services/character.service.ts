import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CharacterService {
  private characters: any[] = [];
  private deck: any[] = [];

  // Observable to track deck changes
  private deckSubject = new BehaviorSubject<any[]>(this.deck);
  deck$ = this.deckSubject.asObservable();

  constructor(private http: HttpClient) {
    // Load the deck from localStorage if available
    const savedDeck = localStorage.getItem('deck');
    if (savedDeck) {
      this.deck = JSON.parse(savedDeck);
      this.deckSubject.next(this.deck);
    }
  }

  // API call to fetch characters
  getAllCharacters() {
    return this.http.get<any>('https://api.disneyapi.dev/character');
  }

  // Method to fetch character details by name

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

  // Save characters fetched from API
  setCharacters(characters: any[]): void {
    this.characters = characters;
  }

  // Get all characters
  getAllCharactersData(): any[] {
    return this.characters;
  }

  // Get the deck
  getDeck(): any[] {
    return this.deck;
  }

  // Add to deck
  addToDeck(character: any, characters: any[]): void {
    this.deck.push(character);
    this.deckSubject.next(this.deck);
    localStorage.setItem('deck', JSON.stringify(this.deck)); // Save to localStorage

    const index = characters.findIndex((c) => c._id === character._id);
    if (index !== -1) {
      characters.splice(index, 1); // Remove from characters list
    }
  }

  // Remove from deck
  removeFromDeck(character: any, deck: any[]): void {
    const index = deck.findIndex((c) => c._id === character._id);
    if (index !== -1) {
      deck.splice(index, 1); // Remove from deck
      this.deckSubject.next(this.deck);
      localStorage.setItem('deck', JSON.stringify(this.deck)); // Save to localStorage
    }
    this.characters.push(character); // Add it back to the characters list
  }
}
