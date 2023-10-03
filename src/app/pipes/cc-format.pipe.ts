import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'ccFormat'
})
export class CcFormatPipe implements PipeTransform {

  public transform(cardNumber: string): string {
    if(!this.hasCorrectLength(cardNumber)) {
      // if(this.isAllNumbers(cardNumber)) {
      //   return this.formatCardNumber(cardNumber);
      // }
      return 'Invalid Card Length.';
    }

    if(!this.isAllNumbers(cardNumber)) {
      return 'Invalid Characters.';
    }

    return this.formatCardNumber(cardNumber);

  }

  private hasCorrectLength(cardNumber: string): boolean {
    const cardNumberLength = cardNumber.length;
    const isMasterDiscoverVisaCardLength = 16;
    const isAmericanExpressCardLength = 15;
    // const isMasterCard = cardNumber.startsWith('5');
    // const isVisa = cardNumber.startsWith('4');
    // const isAmericanExpress = cardNumber.startsWith('34') || cardNumber.startsWith('37');
    // const isDiscover = cardNumber.startsWith('6011') || cardNumber.startsWith('65');

    if(cardNumberLength === isAmericanExpressCardLength || cardNumberLength === isMasterDiscoverVisaCardLength) {
      return true;
    }

    // if (isMasterCard || isVisa || isAmericanExpress || isDiscover || isDinersClub) {
    //   return cardNumberLength === 16;
    // }
    return false;

  }

  private isAllNumbers(cardNumber: string): boolean {
    const stringNumbers = ['0','1','2','3','4','5','6','7','8','9'];
    
    const cardNumberArray = cardNumber.split('');
    const totalValidCharacters = cardNumberArray.filter((char) => stringNumbers.includes(char)).length;

    return totalValidCharacters === cardNumber.length;
  }

  private formatCardNumber(cardNumber: string): string {
    const parts = cardNumber.match(/[\s\S]{1,4}/g) || [];
    return parts.join('-');
  }

}
