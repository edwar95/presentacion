import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './components/test/test.component';
import {HttpClientModule} from "@angular/common/http";
import {GitUsersService} from "./services/gitUsersService/git-users.service";

@NgModule({
  declarations: [
    AppComponent,
    TestComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserModule,
    HttpClientModule,
  ],
  providers: [GitUsersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
