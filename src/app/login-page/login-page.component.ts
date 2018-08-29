import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService } from '../alert.service';
import { AuthenticationService } from '../authentication.service';
import { UtilService } from '../util.service';

//import { AlertService, AuthenticationService } from '../_services';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css'],

})
export class LoginPageComponent implements OnInit {
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  returnUrl: string;
  @ViewChild('pass') inputEl: ElementRef;
  public show:boolean = false;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router, private alertService: AlertService, 
    private authservice: AuthenticationService,
  private utilservice:UtilService) {
    UtilService.loginstate = false;
   }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });

    // reset login status
    //this.authenticationService.logout();

    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // stop here if form is invalid
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    // this.authservice.login(this.f.username.value, this.f.password.value)
    //   .pipe(first())
    //   .subscribe(
    //     data => {
    //       //this.router.navigate([this.returnUrl]);
    //       this.router.navigate(['/dashboard']);
    //     },
    //     error => {
    //       //this.alertService.error(error);
    //       this.loading = false;
    //       let err = "username and password are incorrect";
    //       this.alertService.error(err);
    //       this.router.navigate(['/login']);
    //     });

    if (this.f.username.value === 'vineeth' && this.f.password.value === 'vineeth') {
      this.loading = false;
      localStorage.setItem('dash','true');
      this.router.navigate(['/dashboard']);
    }
    else {
      this.loading = false;
      let err = "username and password are incorrect";
      this.alertService.error(err);
      //this.router.navigate(['/login']);
    }
  }

  showPassword()
  {
    //let inputEl: HTMLInputElement = this.inputEl.nativeElement;
    this.show = !this.show;
    if (this.show){
      this.inputEl.nativeElement.type='text';
   }
   else {
      this.inputEl.nativeElement.type='password';
   }
  }
}