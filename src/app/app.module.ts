import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { S1BasicsComponent } from './s1-basics/s1-basics.component';
import { ServerComponent } from './s1-basics/server/server.component';
import { ServersComponent } from './s1-basics/servers/servers.component';
import { S1BasicsAssignmentComponent } from './s1-basics-assignment/s1-basics-assignment.component';
import { WarningAlertComponent } from './s1-basics-assignment/warning-alert/warning-alert.component';
import { SuccessAlertComponent } from './s1-basics-assignment/success-alert/success-alert.component';
import { S15HandlingFormsComponent } from './s15-handling-forms/s15-handling-forms.component';
import { TemplateDrivenComponent } from './s15-handling-forms/template-driven/template-driven.component';

@NgModule({
  declarations: [
    AppComponent,
    S1BasicsComponent,
    ServerComponent,
    ServersComponent,
    S1BasicsAssignmentComponent,
    WarningAlertComponent,
    SuccessAlertComponent,
    S15HandlingFormsComponent,
    TemplateDrivenComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
