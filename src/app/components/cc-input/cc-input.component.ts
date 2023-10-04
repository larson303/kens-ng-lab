import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-cc-input',
  templateUrl: './cc-input.component.html',
  styleUrls: ['./cc-input.component.scss'],
})
export class CcInputComponent {
  /* Oi Vey.  This needs to be done as a pipe so that we are not ruining the current value of the credit card number and are instead transforming it for formatting and masking.
   * BECAUSE:  If you want to toggle visibility or the ability to clear the value the input can't be 'hard-coded' via property binding.  It needs to be a pipe. */

  @Input() public ccNumber = '';
  public ccType = '0';
  private readOnly = false;

  public get isReadOnly(): boolean {
    return this.readOnly;
  }

  @Input() public set isReadOnly(value: boolean) {
    this.readOnly = value;
    this.ccType = this.ccNumber[0];
    this.ccNumber = value ? this.maskCCNumber(this.ccNumber) : this.ccNumber;
    this.isReadOnly = value;
  }

  public getCCNumber(): string {
    return this.ccNumber;
  }

  public getCCType(): string {
    return this.ccType;
  }

  private maskCCNumber(ccNum: string): string {
    const last4 = ccNum.slice(-4);
    return `xxxx-xxxx-xxxx-${last4}`;
  }

  // private formatCCNumber(ccNum: string): string {
  //   const parts = ccNum.match(/[\s\S]{1,4}/g) || [];
  //   const formatted = parts.join('-');
  //   return formatted;
  // }

}
