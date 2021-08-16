import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // animation = 'headShake';
  // animationState = false;
  // animationWithState = false;
  // hueBtnState = false;


  productQuantity = 1;
  productUnitPrice = 1200;
  productAmount = 1200.99;
  condition = true;


  constructor() { }

  ngOnInit(): void {
  
  }
  cputeProductAmount() {
    this.productQuantity = this.productQuantity + 1;
    this.productAmount = this.productQuantity * this.productUnitPrice;
  }
  rduceProductAmount() {
    if (this.productQuantity > 1) {
      this.productQuantity = this.productQuantity - 1;
      this.productAmount = this.productAmount - this.productUnitPrice;
    }
  }

  // We will configure this method as soon as the corresponding data will come from the backend

  // setCardAnimation() {
  //   const element = document.querySelector('.list-group-item');
  //   element?.classList.add('animate__animated', 'animate__bounce');

  // }
  // animate() {
  //   this.animationState = false;
  //   setTimeout(() => {
  //     this.animationState = true;
  //     this.animationWithState = !this.animationWithState;
  //   }, 1);
  // }


  


}
