import { Component, OnInit, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CharacterService } from '../../services/character.service';

@Component({
  selector: 'app-single-character',
  standalone: true,
  imports: [],
  templateUrl: './single-character.component.html',
  styleUrls: ['./single-character.component.css'],
})
export class SingleCharacterComponent implements OnInit {
  private characterService = inject(CharacterService);
  character: any = {};
  defaultNoImage = 'assets/images/default-no-image.jpg';
  characterName: string = '';

  constructor(private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      this.characterName = params.get('name')!;
      this.getCharacterDetails(this.characterName);
    });
  }

  getCharacterDetails(name: string): void {
    this.characterService.getCharacterByName(name).subscribe(
      (data) => {
        this.character = data;
      },
      (error) => {
        console.error('Error fetching character:', error);
      }
    );
  }
}
