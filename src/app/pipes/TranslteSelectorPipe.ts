import { Pipe, PipeTransform } from '@angular/core';


@Pipe({
  name: 'translateSelector'
})

export class TranslateSelectorPipe implements PipeTransform {

  transform(text: string, value: string | number): string {
    const match = text.match(/(([=<>][^}]+|other|else) ?{([^}]+))}/g);
    if (match) {
      const ret = match.map(
        m => m.match(/([=<>oe]) ?([^{]+) ?{([^}]+)}/)
      ).find(
        f => this.evalCondition(value, f[1], f[2].trim())
        );
      if (ret) { return ret[3]; }
    }
    return text;
  }

  private evalCondition(
    left: number | string,
    operator: string,
    right: string): boolean {

    if (['o', 'e'].includes(operator)) { return true; }

    const strings = typeof left === 'string';
    left = left.toString();
    const leftNumber = Number.parseInt(left);
    const rightNumber = Number.parseInt(right);

    if (strings && ['<', '>'].includes(operator)) {
      return false;
    } else if (!strings && (Number.isNaN(leftNumber) || Number.isNaN(rightNumber))) {
      return false;
    }
    switch (operator) {
      case '=': return strings ? left === right : leftNumber === rightNumber;
      case '<': return leftNumber < rightNumber;
      case '>': return leftNumber > rightNumber;
    }
    return false;
  }
}
