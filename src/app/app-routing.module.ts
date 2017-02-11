import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { MenuComponent } from './menu/menu.component';
import { AboutComponent } from './about/about.component';
import { HistoryComponent } from './history/history.component';

const routes: Routes = [
{
	path: '',
	redirectTo: 'menu',
	pathMatch: 'full'
},
{
	path: 'menu',
	component: MenuComponent
},
{
	path: 'about',
	component: AboutComponent
},
{
	path: 'history',
	component: HistoryComponent
}
];

@NgModule({
	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule],
	providers: []
})
export class AppRoutingModule { }
