import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { NavigationEnd, Router } from '@angular/router';
import { MsAdalAngular6Service } from 'microsoft-adal-angular6';
// import { messages } from '../config/messages';
// import { DialogService } from '../services/dialog/dialog.service';
// import { LoggerService } from '../services/logger/logger.service';
// import { TokenService } from '../token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  // required = messages.fieldRequiredMsg;

  loginUser: any;
  loginForm: FormGroup;
  isSubmitted = false;
  msadService: any;
  isLoggedIn: boolean = false;



  constructor(private fb: FormBuilder, private adalSvc: MsAdalAngular6Service, private router: Router) {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  ngOnInit() {
    this.msadService = this.adalSvc
      .acquireToken("https://graph.microsoft.com")
      .subscribe((token: string) => {
        if (token) {
          sessionStorage.setItem("msad-token", token);
          this.isLoggedIn = true;
        }

      });
    this.getUsername();

  }
  getUsername() {
    var user = this.adalSvc.LoggedInUserEmail;
    var details = this.adalSvc.userInfo;
    console.log(details);
    localStorage.setItem('currentUser', user);
    console.log(user);
  }
  ngOnDestroy() {
    this.msadService.unsubscribe();

  }

  // login handler

  loginToMsad() {
    this.isLoggedIn
      ? this.router.navigate(["/comparefiles"])
      : this.adalSvc.login();
  }
  // async loginHandler() {
  //   const name = "/api/loginAuth/" + this.loginForm.value.username;

  //   //console.log('this.form.value.username',this.form.value.username);
  //   // await this.linesService.getUserInfo(name).then((resp) => {});
  // }
}
  //   if (this.loginForm.valid) {
  //     this.isSubmitted = true;
  //     this.loggerservice.log("login successfully");
  //     this.router.navigate(['/cluster-selection']);
  //   }
  //   else {
  //     this.adalSvc.login();
  //   }
  //   this.isSubmitted = false;
  //   const logindetails = this.loginForm.value;
  //   sessionStorage.setItem('Token', JSON.stringify(this.tokenService.token))
  //   localStorage.setItem('currentUser', logindetails.username);
  // }

