import { Component, OnInit, inject } from '@angular/core';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';
import { CommonModule, NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-disney-characters',
  standalone: true,
  imports: [
    CommonModule,
    NgOptimizedImage,
  ],
  templateUrl: './disney-characters.component.html',
  styleUrls: ['./disney-characters.component.css'],
})
export class DisneyCharactersComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  characters: any[] = [];
  defaultNoImage = 'assets/images/default-no-image.jpg';

  ngOnInit(): void {
    // Fetch characters from the service and set them
    this.characterService.getAllCharacters().subscribe((data: any) => {
      this.characters = data.data;  // Assuming 'data' is the response body
      this.characterService.setCharacters(this.characters);  // Store characters in service
    });
  }

  addToDeck(character: any): void {
    this.characterService.addToDeck(character, this.characters);
  }

  viewDetails(character: any): void {
    this.router.navigate([`/character/${character.name}`]);
  }
}
