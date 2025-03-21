import { Component, OnInit, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { CommonModule } from '@angular/common';
// import { MatCell, MatCellDef, MatHeaderCell, MatHeaderCellDef, MatRow, MatRowDef, MatTable, MatTableModule } from '@angular/material/table';

@Component({
  selector: 'app-disney-characters',
  imports: [CommonModule,
    // MatTable,
    // MatHeaderCell,
    // MatHeaderCellDef,
    // MatCell,
    // MatCellDef,
    // MatRow,
    // MatRowDef
  ],
  templateUrl: './disney-characters.component.html',
  styleUrl: './disney-characters.component.css',
  standalone: true,
})

export class DisneyCharactersComponent implements OnInit {
  private http = inject(HttpClient);
  characters: any[] = [];

  defaultNoImage = "assets/images/default-no-image.jpg";


  ngOnInit(): void {
    this.getCharacters();
  }

addToDeck(): any {
  
}

viewDetails(): any {

}


  getCharacters(): void {
    this.http.get('https://api.disneyapi.dev/character').subscribe((data: any) => {
      this.characters = data.data;
    });
  }
}
