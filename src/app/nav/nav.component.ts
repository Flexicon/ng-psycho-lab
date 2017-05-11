import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {NavItem} from '../navitem';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  private navItems: NavItem[];

  constructor(private router: Router) {
  }

  ngOnInit() {
    this.navItems = [
      {
        path: '/restart/' + this.router.url.split('/').pop(),
        title: 'Restart',
        isShown: this.router.url.includes('game/')
      },
      {
        path: '/history/1',
        title: 'Game 1',
        isShown: this.router.url.includes('history')
      },
      {
        path: '/home',
        title: 'Home',
        isShown: true
      },
      {
        path: '/history/2',
        title: 'Game 2',
        isShown: this.router.url.includes('history')
      },
      {
        path: '/restart/2',
        title: 'Next Game',
        isShown: this.router.url.includes('game/1')
      }
    ];
  }

}
