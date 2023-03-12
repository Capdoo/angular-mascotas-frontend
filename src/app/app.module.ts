import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

//Us
import { AppComponent } from './app.component';
import { IndexComponent } from './index/index.component';
import { SharedModule } from './shared/shared.module';

//Third party
import { HttpClientModule } from '@angular/common/http';
import {FormsModule} from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';
import { AuthModule } from './auth/auth.module';
import { AuthreloadService } from './services/authreload.service';

@NgModule({
  declarations: [
    AppComponent,
    IndexComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    SharedModule,
    AuthModule
  ],
  providers: [AuthreloadService],
  bootstrap: [AppComponent]
})
export class AppModule { }
