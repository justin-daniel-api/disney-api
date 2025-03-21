import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CharacterService {
  private deck: any[] = [];
 
  getDeck(): any[] {
    return this.deck;
  }

  addToDeck(character: any, characters: any[]): void {
    this.deck.push(character);
    const index = characters.findIndex(c => c._id === character._id);
    if (index !== -1) {
      characters.splice(index, 1); // Remove from characters list
    }
  }
}
