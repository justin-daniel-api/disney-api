import { Component, EventEmitter, Input, OnInit, Output, inject } from '@angular/core';
import { CharacterService } from '../../services/character.service';
import { Router } from '@angular/router';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { NgbPaginationModule } from '@ng-bootstrap/ng-bootstrap';


@Component({
  selector: 'app-disney-characters',
  standalone: true,
  imports: [CommonModule,
    NgOptimizedImage,
    NgbPaginationModule
  ],
  templateUrl: './disney-characters.component.html',
  styleUrls: ['./disney-characters.component.css'],
})
export class DisneyCharactersComponent implements OnInit {
  private characterService = inject(CharacterService);
  private router = inject(Router);

  characters: any[] = [];
  defaultNoImage = 'assets/images/default-no-image.jpg';

  // Pagination
  // Does not work yet, will leave stylings
  page = 1;
  currentPage = 1;
  @Input() totalItems: number = 149;
  @Input() pageSize: number = 10;
  @Output() pageChanged = new EventEmitter<any>();

  onPageChanged(event: any) {
    this.characterService.fetchPages(this.page, this.pageSize);
    this.pageChanged.emit(event);
  }

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
