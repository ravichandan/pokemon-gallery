import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <img src="../../assets/images/hero-background.jpg" alt="Hero background image"/>
        <!--<h1>Universal Demo using Angular and Angular CLI-1</h1>-->
        <!--<h2 >Universal Demo using Angular and Angular CLI-2</h2>-->
        <!--<a routerLink="/">Home</a>-->
        <!--<a routerLink="/lazy">Lazy</a>-->
        <!--<a routerLink="/lazy/nested">Lazy_Nested</a>-->
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
