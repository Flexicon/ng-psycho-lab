import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { NavItem } from '../navitem';

@Component({
	selector: 'app-nav',
	templateUrl: './nav.component.html',
	styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
	private route: string;
	private navItems: NavItem[];

	constructor(router: Router) {
		this.route = router.url;
	}

	ngOnInit() {
		this.navItems = [
		{
			path: '/restart',
			title: 'Restart',
			isShown: this.route.includes('game/')
		},
		{
			path: '/history/1',
			title: 'Game 1',
			isShown: this.route.includes('history')
		},
		{
			path: '/home',
			title: 'Home',
			isShown: true
		},
		{
			path: '/history/2',
			title: 'Game 2',
			isShown: this.route.includes('history')
		},
		{
			path: '/next-game',
			title: 'Next Game',
			isShown: this.route.includes('game/')
		}
		];
	}

}
