import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  piorkowski = 'http://www.alfa-electronics.eu/index.php/aparat-piorkowski';
  krzyzowy = 'http://www.alfa-electronics.eu/index.php/aparat-krzyzowy';
  team: string[];

  constructor() {
    this.team = [
      'Alex Oliinykov',
      'Alexander Voloshyn',
      'Anastasia Kovrizhenko',
      'Julia Zelenska',
      'Kamil Paryż',
      'Ivan Kopko',
      'Kristina Napreienko',
      'Michał Repeć',
      'Natalia Lasek',
      'Olena Bondarenko',
      'Stas Polishchuk',
      'Wiola Migas',
      'Dymitri Zozulya'
    ];
  }

  ngOnInit() {
  }

}
