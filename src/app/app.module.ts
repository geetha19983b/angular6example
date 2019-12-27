import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModelModule } from "./model/model.module";
import { CoreModule } from "./core/core.module";
import { TableComponent } from "./core/table.component";
import { FormComponent } from "./core/form.component";
import { MessageModule } from "./messages/message.module";
import { MessageComponent } from "./messages/message.component";
import { routing } from "./app.routing";
import { NbClassDirective } from './nb-class.directive';
import { HelloComponent } from './hello.component';
import { TermsGuard } from "./terms.guard"
import { LoadGuard } from "./load.guard";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({

  imports: [
    BrowserModule,
    AppRoutingModule,
    ModelModule, CoreModule, MessageModule, routing,BrowserAnimationsModule
    ],
  providers: [TermsGuard, LoadGuard],
  declarations: [AppComponent,HelloComponent, NbClassDirective],
  bootstrap: [AppComponent]
})
export class AppModule { }
