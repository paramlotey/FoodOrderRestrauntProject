import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { OtpComponent } from '../otp/otp.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private dialog: MatDialog){}

    openOTP(){
      this.dialog.open(OtpComponent);
    }

  ngOnInit(): void {
  }

}
