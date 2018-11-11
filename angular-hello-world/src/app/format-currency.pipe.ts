import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'formatCurrency'
})
export class FormatCurrencyPipe implements PipeTransform {

  transform(value: any, locale = 'pt-BR', currenry = 'BRL'): any {
    return new Intl
      .NumberFormat(locale, {
      style: 'currency',
      currency: currenry,
      maximumFractionDigits: 2,
      minimumFractionDigits: 2
    }).format(value);
  }

}
