import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-deck',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './deck.component.html',
  styleUrls: ['./deck.component.css'],
})
export class DeckComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  deck: any[] = [];
  defaultNoImage = 'assets/images/default-no-image.jpg';

  ngOnInit(): void {
    // Subscribe to deck changes from the CharacterService
    this.characterService.deck$.subscribe((deck) => {
      this.deck = deck;  // Update deck when it's changed
    });
  }

  removeFromDeck(character: any): void {
    this.characterService.removeFromDeck(character, this.deck);
  }

  viewDetails(character: any): void {
    this.router.navigate([`/character/${character.name}`]);
  }
}
