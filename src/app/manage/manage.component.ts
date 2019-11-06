import { Component, OnInit } from '@angular/core';

declare const _init: any;

@Component({
  selector: 'app-manage',
  templateUrl: './manage.component.html'
})
export class ManageComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    _init();
  }

}
