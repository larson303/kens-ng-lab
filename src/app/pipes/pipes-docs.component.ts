import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-docs',
  templateUrl: './pipes-docs.component.html',
  styleUrls: ['./pipes-docs.component.scss']
})
export class PipesDocsComponent {

  public flattenData = [1, 2, [3], [4, [5, 6, [7]]]];

  public modifyFlatten() {
    this.flattenData.push(3,5);
  }

  public resassignFlatten() {
    this.flattenData = [...this.flattenData];
  }

}
