import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AboutUsComponent } from './Public-compnents/about-us/about-us.component';
import { SharedModule } from './shared/shared.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './Public-compnents/home/home.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import { CounterService } from './shared/services/counter.service';
import { Counter2Service } from './shared/services/counter2.service';
import { TestService } from './shared/services/test.service';


@NgModule({
  declarations: [
    AppComponent,
    AboutUsComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    SharedModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatIconModule
  ],
  providers:[{provide:CounterService,useFactory:(testservice:TestService)=>testservice.value?
  new CounterService():new Counter2Service(),
deps:[TestService]},
TestService], 
  // providers: [{provide:CounterService,useExisting:Counter2Service},Counter2Service],
  bootstrap: [AppComponent]
})
export class AppModule { }
