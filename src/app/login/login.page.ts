import { Component, OnInit } from '@angular/core';
import { MenuController } from "@ionic/angular";
import { Router } from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

  constructor(private menu: MenuController, private router: Router ) { 

  }

  ngOnInit() {
  }

goHome(){
    this.router.navigate(['list-class']);
}


}
