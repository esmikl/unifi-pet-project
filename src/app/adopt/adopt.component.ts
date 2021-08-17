import { Component, OnInit } from '@angular/core';
import data from '../../pets.json';

@Component({
  selector: 'app-adopt',
  templateUrl: './adopt.component.html',
  styleUrls: ['./adopt.component.scss']
})
export class AdoptComponent implements OnInit {

  pets = data;

  constructor() { }

  ngOnInit(): void {
  }

}
