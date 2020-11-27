import { NoopAnimationsModule, BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { AuthguardService } from './auth/guards/authguard.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthModule } from './auth/auth.module';
import { HomeComponent } from './pages/home/home.component';
import { ModalComponent } from './components/modal/modal.component';
import { AlertComponent } from './components/alert/alert/alert.component';
import { DestaqueDirective } from './diretivas/destaque.directive';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ModalComponent,
    AlertComponent,
    DestaqueDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AuthModule,
    MatDialogModule,
    FormsModule,
    ReactiveFormsModule,
    NoopAnimationsModule,
    BrowserAnimationsModule,
  ],
  providers: [AuthguardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
