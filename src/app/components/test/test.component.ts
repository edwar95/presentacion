import { Component, OnInit} from '@angular/core';
import {AuthService} from "../../services/AuthService/auth.service";

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {




  constructor(private auth: AuthService) { }



  ngOnInit() {
  }

   compute(numero:number){
    if (numero<0)
      return 0;

    return numero+1;
  }


  needsLogin() {
    return !this.auth.isAuthenticated();
  }




}
