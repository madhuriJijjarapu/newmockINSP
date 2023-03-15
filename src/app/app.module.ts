import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComparefilesComponent } from './comparefiles/comparefiles.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { httpInterceptorProviders } from './http-inteceptors';
import { HttpInterceptor } from './http-inteceptors/http-interceptor';
import { MatSelectFilterModule } from 'mat-select-filter';
import { AuthenticationGuard, MsAdalAngular6Module } from 'microsoft-adal-angular6';
import { LoginComponent } from './login/login.component';
export function getAdalConfig() {
  return {

    tenant: '432a4219-1a46-4b7f-92ce-aae7bc705c26',

    clientId: '6fd1b378-1ab8-4704-a35a-23ecb2997bef',
    redirectUri: window.location.origin + "/auth/callback"
  };

}
@NgModule({
  declarations: [
    AppComponent,
    ComparefilesComponent, LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule, HttpClientModule, ReactiveFormsModule,
    BrowserAnimationsModule, MaterialModule, FormsModule, MatSelectFilterModule,
    MsAdalAngular6Module.forRoot(getAdalConfig)
  ],
  providers: [httpInterceptorProviders, AuthenticationGuard, {
    provide: HTTP_INTERCEPTORS,
    useClass: HttpInterceptor,
    multi: true
  }],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class AppModule { }
