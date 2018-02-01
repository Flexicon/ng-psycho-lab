import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';


import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginComponent } from './login/login.component';
import { GamesComponent } from './games/games.component';
import { Game1Component } from './games/game1/game1.component';
import { Game2Component } from './games/game2/game2.component';
import { RankingComponent } from './ranking/ranking.component';
import { AuthService } from './shared/services/auth.service';
import { OnlyLoggedInUsersGuard } from './shared/guards/only-logged-in-users.guard';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';
import { FormsModule } from '@angular/forms';
import { RegisterComponent } from './register/register.component';
import { UserService } from './shared/services/user.service';


@NgModule({
    declarations: [
        AppComponent,
        HomeComponent,
        LoginComponent,
        GamesComponent,
        Game1Component,
        Game2Component,
        RankingComponent,
        RegisterComponent
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule.forRoot(),
        HttpClientModule,
        FlashMessagesModule.forRoot(),
        FormsModule
    ],
    providers: [
        AuthService,
        OnlyLoggedInUsersGuard,
        UserService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
