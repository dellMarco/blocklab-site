import { ClipboardModule } from 'ngx-clipboard';
import { Web3Service } from './services/web3.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MDBBootstrapModule } from 'angular-bootstrap-md';
import { AppRoutingModule, routingComponents } from './app-routing.module';
import { AppComponent } from './app.component';
import { MembersComponent } from './members/members.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { VotesComponent } from './votes/votes.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';
import {
  MatFormFieldModule, MatGridListModule, MatCardModule, MatToolbarModule,
  MatMenuModule, MatIconModule, MatButtonToggleModule, MatButtonModule,
  MatSortModule, MatInputModule, MatSnackBarModule, MatTooltipModule, MatTableModule
} from '@angular/material';
import { MetaMaskComponent } from './meta-mask/meta-mask.component';

@NgModule({
  declarations: [
    AppComponent,
    MembersComponent,
    DashboardComponent,
    VotesComponent,
    NotFoundComponent,
    MetaMaskComponent
  ],
  imports: [
    BrowserModule,
    ClipboardModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatGridListModule,
    MatCardModule,
    MatMenuModule,
    MatIconModule,
    MatButtonModule,
    MatFormFieldModule,
    MatSortModule,
    MatInputModule,
    FormsModule,
    MatSnackBarModule,
    MatTooltipModule,
    MatButtonToggleModule,
    MatTableModule,
    MDBBootstrapModule.forRoot()
  ],
   providers: [
    Web3Service,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
