import { BrowserModule, } from '@angular/platform-browser';
import { RichTextEditorModule } from '@syncfusion/ej2-angular-richtexteditor';
import { NgModule } from '@angular/core';
import { FormsModule }   from '@angular/forms';

import { AppComponent } from './app.component';

@NgModule({

  imports: [
    BrowserModule, FormsModule, RichTextEditorModule, AppComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule { }
