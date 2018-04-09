import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MDBBootstrapModule } from './typescripts/free';
import { AgmCoreModule } from '@agm/core';
import { AppComponent } from './app.component';

import { Navbar } from './components/navbar/navbar.component';
import { MainBanner } from './components/mainBanner/mainBanner.component';
import { CardContainer } from './components/cardContainer/cardContainer.component';
import { Offerings } from './components/offerings/offerings.component';
import { GetStarted } from './components/getStarted/getStarted.component';
import { Footer } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    Navbar,
    MainBanner,
    CardContainer,
    Offerings,
    GetStarted,
    Footer,
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    MDBBootstrapModule.forRoot(),
    AgmCoreModule.forRoot({
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en#key
      apiKey: 'Your_api_key'
    })
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas:      [ NO_ERRORS_SCHEMA ]
})
export class AppModule { }
