//Modules
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

//Components
import { AppComponent } from './app.component';
import { MaterialUiModule } from './shared/material-ui.module';
import { CustomFormsModule } from 'ng2-validation'

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialUiModule,
    BrowserAnimationsModule
  ],
  providers: [
  ],
  
  bootstrap: [AppComponent]
})
export class AppModule { }
