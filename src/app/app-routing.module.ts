import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './home/home.component';
import { GamesComponent } from './games/games.component';
import { RankingComponent } from './ranking/ranking.component';
import { OnlyLoggedInUsersGuard } from './shared/guards/only-logged-in-users.guard';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [OnlyLoggedInUsersGuard],
    },
    {
        path: 'login',
        component: LoginComponent,
    },
    {
        path: 'register',
        component: RegisterComponent,
    },
    {
        path: 'games',
        component: GamesComponent,
        canActivate: [OnlyLoggedInUsersGuard],
        children: [
            {
                path: '1',
                component: Game1Component
            },
            {
                path: '2',
                component: Game2Component
            },
        ],
    },
    {
        path: 'ranking',
        component: RankingComponent,
        canActivate: [OnlyLoggedInUsersGuard],
    },
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes),
    ],
    exports: [
        RouterModule
    ],
    declarations: []
})
export class AppRoutingModule {
}
