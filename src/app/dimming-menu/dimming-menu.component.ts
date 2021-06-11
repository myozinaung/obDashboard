import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dimming-menu',
  templateUrl: './dimming-menu.component.html',
  styleUrls: ['./dimming-menu.component.scss'],
})
export class DimmingMenuComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}

  setTheme(themeName: string) {
    document.documentElement.setAttribute('theme', themeName);
  }
}
