import { Component, OnInit } from '@angular/core';
import { NgxOtpInputConfig } from "ngx-otp-input";

@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  ngOnInit(): void {
  }

  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
  };

}
