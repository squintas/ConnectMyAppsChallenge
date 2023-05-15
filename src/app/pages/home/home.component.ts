import { Component, OnInit, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy{

public email: any  = ""
public currentTime: any;
public timerInterval: any;

  constructor(private router: Router) {
    this.email = localStorage.getItem('email')        
  }

  ngOnInit() {
    this.timerInterval = setInterval(() => {
      this.updateTime();
    }, 1000);
  }

  ngOnDestroy() {
    clearInterval(this.timerInterval);
  }

  updateTime() {
    const date = new Date();
    this.currentTime = date.toLocaleString();
  }

  logout(){
    localStorage.clear()
    this.router.navigate(['login']);
  }


}
