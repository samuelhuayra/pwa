import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { MatToolbarModule, 
        MatButtonModule, 
        MatSidenavModule, 
        MatIconModule, 
        MatListModule, 
        MatGridListModule, 
        MatCardModule, 
        MatMenuModule, 
        MatInputModule, 
        MatSelectModule, 
        MatSnackBarModule,
        MatDialogModule,
        MatRadioModule,
        MatTabsModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    MatToolbarModule, 
    MatButtonModule, 
    MatSidenavModule, 
    MatIconModule, 
    MatListModule, 
    MatGridListModule, 
    MatCardModule, 
    MatMenuModule, 
    MatInputModule, 
    MatSelectModule, 
    MatSnackBarModule,
    MatDialogModule,
    MatRadioModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
