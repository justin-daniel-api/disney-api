import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-disney-characters',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './disney-characters.component.html',
  styleUrl: './disney-characters.component.css',
})
export class DisneyCharactersComponent implements OnInit {
  private http = inject(HttpClient);
  private router = inject(Router);
  private characterService = inject(CharacterService);

  characters: any[] = [];

  ngOnInit(): void {
    this.getCharacters();
  }

  getCharacters(): void {
    this.http.get('https://api.disneyapi.dev/character').subscribe((data: any) => {
      this.characters = data.data;
    });
  }

  addToDeck(character: any): void {
    this.characterService.addToDeck(character, this.characters);
  }

  viewDetails(character: any): void {
    this.router.navigate([`/character/${character.name}`]);
  }
}
