import { Component, OnInit, OnChanges } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import {filter} from 'rxjs/operators';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { forEach } from '@angular/router/src/utils/collection';

@Component({
  selector: 'app-checkout',
  templateUrl: './checkout.component.html',
  styleUrls: ['./checkout.component.scss']
})
export class CheckoutComponent implements OnInit {
  products$: Object;
  Cart$: String;
  display_control$: String;
  totalCost$: number;


  currentUrl: string;
  constructor(private router: Router,  private http: HttpClient, private data: DataService) {
   this.router.events.pipe(filter(event => event instanceof NavigationEnd)).subscribe((_: NavigationEnd) => { this.currentUrl = _.url; });
   this.totalCost$ = 0;
  }

  SessionData: Object;
  ngOnInit() {

    const array1 = [];
    for (let i = 0; i < localStorage.length; i++) {
      const key1 = localStorage.key(i);
      const value = localStorage.getItem(key1);

      if (parseFloat(value) < 1 || key1 === 'username') {
        continue;
      }
      const cost = (parseFloat(value.split(',')[1]) * parseFloat(value.split(',')[0]));
      this.totalCost$ = this.totalCost$ + cost;
    array1.push({value : value.split(',')[0], key: key1, price: value.split(',')[1], id: value.split(',')[2], stock: value.split(',')[3]});
     }
     this.SessionData = array1;
     localStorage.setItem( 'totalCost' , this.totalCost$.toString());


  if (localStorage.length === 0) {
    this.Cart$ = 'You Have No Items In Your Cart' ;
    this.display_control$ = 'display_control' ;

  }

  }
  sessionCall(name, number , price , id, stock) {

    console.log('writing to session');
    localStorage.setItem(name, number.toString() + ',' +  price.toString() + ',' + id.toString() + ',' + stock.toString());

  }



}
