import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalComponent {
  @Input() public title = '';
  isHidden = true;


  public open(): void {
    this.isHidden = false;
  }

  public close(): void {
    this.isHidden = true;
  }

}
