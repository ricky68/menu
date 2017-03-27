import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { UniversalModule } from 'angular2-universal';
import { AppComponent } from './app.component'
import { GRBHeader } from './grbheader/grbheader.component';
import { GRBMenu } from './grbheader/grbmenu/grbmenu.component';
import { GRBHistory } from './grbheader/grbhistory/grbhistory.component';
import { GRBTicker } from './grbheader/ticker/ticker.component';
import { HomeComponent } from './components/home/home.component';
import { FetchDataComponent } from './components/fetchdata/fetchdata.component';
import { CounterComponent } from './components/counter/counter.component';
import { MdMenuModule } from '@angular2-material/menu';

@NgModule({
    bootstrap: [ AppComponent ],
    declarations: [
        AppComponent,
        GRBHeader,
        GRBMenu,
        GRBHistory,
        GRBTicker,
        CounterComponent,
        FetchDataComponent,
        HomeComponent
    ],
    imports: [
        UniversalModule, // Must be first import. This automatically imports BrowserModule, HttpModule, and JsonpModule too.
        MdMenuModule,
        RouterModule.forRoot([
            { path: '', redirectTo: 'home', pathMatch: 'full' },
            { path: 'home', component: HomeComponent },
            { path: 'counter', component: CounterComponent },
            { path: 'fetch-data', component: FetchDataComponent },
            { path: '**', redirectTo: 'home' }
        ])
    ]
})
export class AppModule {
}
