import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'mr-app-footer',
  templateUrl: './footer.component.html',
  styles: [`.footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 50px; /* Set the fixed height of the footer here */
    line-height: 50px; /* Vertically center the text there */
    background-color: #f5f5f5;
  }`]
})
export class FooterComponent {

  constructor() { }
}
