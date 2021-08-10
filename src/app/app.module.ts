import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UAppBarModule, UButtonModule, UDrawerModule } from '@nelnet/unifi-components-angular';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { NavigationComponent } from './navigation/navigation.component';
import { FooterComponent } from './footer/footer.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { AdoptComponent } from './adopt/adopt.component';
import { FaqComponent } from './faq/faq.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    NotFoundComponent,
    NavigationComponent,
    FooterComponent,
    AboutComponent,
    ContactComponent,
    AdoptComponent,
    FaqComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    UAppBarModule,
    UButtonModule,
    UDrawerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
