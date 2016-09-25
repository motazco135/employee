import { Component }  from '@angular/core';
import {  LoginService } from '../services/login.service';


@Component  ({
  selector : 'login',
  templateUrl : 'app/components/login.component.html'

})

export class  LogingComponent {
  private model = {'username':'', 'password':''};
  private  curruntUserName  ;

  onlogin (){
    console.log("model-based form submitted");
    this.loginService.doLogin(this.model).subscribe(
      date=>{
           alert('yeeee');
      },
      error => {
        alert('Please try one more time ...');
        console.log('error ');
      }

    );
  }

constructor (private loginService : LoginService ){}
}
