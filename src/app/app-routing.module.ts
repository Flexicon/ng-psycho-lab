import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';
import { Game1Component } from './game1/game1.component';
import { Game2Component } from './game2/game2.component';
import { GamesComponent } from './games/games.component';
import { RestartComponent } from './restart/restart.component';

const routes: Routes = [
{
	path: '',
	component: MenuComponent
},
{
	path: 'home',
	redirectTo: '/',
	pathMatch: 'full'
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'history',
	component: HistoryComponent
},
{
	path: 'game',
	children: [
	{
		path: '1',
		component: Game1Component
	},
	{
		path: '2',
		component: Game2Component
	}
	]
},
{
	path: 'games',
	component: GamesComponent
},
{
	path: 'restart/:id',
	component: RestartComponent }
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
