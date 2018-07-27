import {Component} from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <img src="../../assets/images/hero-background.jpg" alt="Hero background image"/>
        <router-outlet></router-outlet>
    `,
    styleUrls: ['./app.component.scss']
})
export class AppComponent {

}
