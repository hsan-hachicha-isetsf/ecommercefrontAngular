import { Component } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

import { Router } from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email:string
  password:string
  constructor(private userServ:UserService,private router:Router){}

  signIn=()=>{
    let userlogin={email:this.email,password:this.password}
    this.userServ.login(userlogin).subscribe(data=>
    {
        localStorage.setItem('token',data.token)
    localStorage.setItem('id',data.user._id)
    
    this.router.navigate(['/','home'])

  }
      
)
}
}