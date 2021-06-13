import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-top-navbar',
  templateUrl: './top-navbar.component.html',
  styleUrls: ['./top-navbar.component.scss'],
})
export class TopNavbarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  @Output() onDimmingClick = new EventEmitter<boolean>();

  dimmingClick() {
    this.onDimmingClick.emit(true);
  }
}
