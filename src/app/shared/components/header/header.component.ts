import { Component, Input, input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Input() fixed: boolean = false;

  constructor(private _router: Router) {}

  redirectToHistoric(): void {
    this._router.navigate(['/historic']);
  }

  redirectToHome(): void {
    this._router.navigate(['/home']);
  }

}
