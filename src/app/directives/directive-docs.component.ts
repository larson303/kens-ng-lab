import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-docs',
  templateUrl: './directive-docs.component.html',
  styleUrls: ['./directive-docs.component.scss']
})
export class DirectiveDocsComponent {

  public log() {
    console.log('clicked once');
  }

  handleClick() {
    console.log('Debounce 2 in the house!');
  }

}
