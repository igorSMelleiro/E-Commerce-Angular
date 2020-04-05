import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Component({
  selector: 'app-card-registration',
  templateUrl: './card-registration.component.html',
  styleUrls: ['./card-registration.component.styl']
})
export class CardRegistrationComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  constructor() { }

  ngOnInit() {
  }

}
