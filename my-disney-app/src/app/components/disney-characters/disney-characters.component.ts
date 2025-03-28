import { Component, OnInit, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-disney-characters',
  standalone: true,
  imports: [CommonModule, NgOptimizedImage],
  templateUrl: './disney-characters.component.html',
  styleUrls: ['./disney-characters.component.css'],
})
export class DisneyCharactersComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  characters: any[] = [];
  defaultNoImage = 'assets/images/default-no-image.jpg';

  ngOnInit(): void {
    // Subscribe to characters from the service
    this.characterService.characters$.subscribe((characters) => {
      this.characters = characters;
    });

    // If no characters are loaded yet, fetch them once
    if (this.characterService.getCharacters().length === 0) {
      this.characterService.fetchCharacters();
    }
  }

  addToDeck(character: any): void {
    this.characterService.addToDeck(character);
  }

  viewDetails(character: any): void {
    this.router.navigate([`/character/${character.name}`]);
  }
}
