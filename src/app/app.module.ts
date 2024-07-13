import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FormComponent } from './components/messages/form/form.component';
import { FormsModule } from '@angular/forms';

import { HomeMessageComponent } from './components/messages/home-message/home-message.component';
import { MessageComponent } from './components/messages/message/message.component';
import { HttpClientModule } from '@angular/common/http';
import { DeleteMessageComponent } from './components/messages/delete-message/delete-message.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormComponent,
    HomeMessageComponent,
    MessageComponent,
    DeleteMessageComponent,
  ],
  imports: [BrowserModule, AppRoutingModule, FormsModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
