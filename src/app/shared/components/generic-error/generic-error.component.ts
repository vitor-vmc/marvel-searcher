import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-generic-error',
  templateUrl: './generic-error.component.html',
  styleUrl: './generic-error.component.scss'
})
export class GenericErrorComponent {


  @Input() error: string = 'Ops! Something went wrong.';
  @Input() message: string = 'An error occurred. Please try again later.';
  @Input() icon: string = 'error';

}
