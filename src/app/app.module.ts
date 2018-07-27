import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule} from '@angular/router';

import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {TransferHttpCacheModule} from '@nguniversal/common';
import {CustomBreakPointsProvider} from './breakpoints/custom-breakpoints';
import {ImageService} from './services/image.service';
import {HttpClientModule} from '@angular/common/http';
import {MatFormFieldModule, MatInputModule, MatPaginatorModule} from '@angular/material';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgxPaginationModule} from 'ngx-pagination';
import {FormsModule} from '@angular/forms';
import {Ng2SearchPipeModule} from 'ng2-search-filter';

@NgModule({
    declarations: [
        AppComponent,
        HomeComponent
    ],
    imports: [
        BrowserModule.withServerTransition({appId: 'my-app'}),
        BrowserAnimationsModule,
        RouterModule.forRoot([
            {path: '', component: HomeComponent, pathMatch: 'full'},
            {path: 'lazy', loadChildren: './lazy/lazy.module#LazyModule'},
            {path: 'lazy/nested', loadChildren: './lazy/lazy.module#LazyModule'}
        ]),
        FormsModule,
        HttpClientModule,
        MatPaginatorModule,
        MatFormFieldModule,
        MatInputModule,
        Ng2SearchPipeModule,
        NgxPaginationModule,
        TransferHttpCacheModule,
    ],
    providers: [CustomBreakPointsProvider, ImageService],
    bootstrap: [AppComponent]
})
export class AppModule {
}
