import { Component, Input } from '@angular/core';

export interface CreditCardInfo {
  ccNum: string;
  ccType?: string;
  displayValue?: string;
}

@Component({
  selector: 'app-cc-input',
  templateUrl: './cc-input.component.html',
  styleUrls: ['./cc-input.component.scss'],
})
export class CcInputComponent {
  /* Oi Vey.  This needs to be done as a pipe so that we are not ruining the current value of the credit card number and are instead transforming it for formatting and masking. BECAUSE:  If you want to toggle visibility or the ability to clear the value the input can't be 'hard-coded' via property binding.  It needs to be a pipe. */

  @Input() public ccNumber: string = '';
  private readOnly = false;

  public ccInfo: CreditCardInfo = {
    ccNum: this.ccNumber,
    ccType: this.ccNumber[0],
    displayValue: '',
  };

  public get isReadOnly(): boolean {
    return this.readOnly;
  }

  @Input() public set isReadOnly(value: boolean) {
    this.ccInfo.ccType = this.ccInfo.ccNum[0];
    this.ccInfo.ccNum = value ? this.maskCCNumber(this.ccInfo.ccNum) : this.ccInfo.ccNum;
    this.readOnly = value;
  }

  public getCCNumber(): string {
    return this.ccInfo.ccNum;
  }

  public getCCType(): string | undefined {
    return this.ccInfo.ccType;
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
