import {Pipe, PipeTransform} from '@angular/core';
import {DatePipe} from '@angular/common';

export class GridColumnType {
  static DATE_TIME = 'DATE_TIME';
  static TIME = 'TIME';
  static DATE = 'DATE';
}

@Pipe({
  name: 'dateTime'
})
export class DateTimePipe implements PipeTransform {

  constructor(private datePipe: DatePipe) {
  }

  transform(value: any, columnType?: GridColumnType | string | undefined): string {
    return this.transformDate(value, columnType)
      .ifColumnTypeMatchesThen(GridColumnType.DATE, this.dateTransform)
      .ifColumnTypeMatchesThen(GridColumnType.DATE_TIME, (date: string) => this.formatUsingPipe(date, 'medium'))
      .ifColumnTypeMatchesThen(GridColumnType.TIME, (date: string) => this.formatUsingPipe(date, 'mediumTime'))
      .ifInvalid('-')
      .getDate();
  }

  private transformDate(value: string, columnType: GridColumnType | string | undefined): any {
    let transformDate: string | null = new Date(value).toString() === 'Invalid Date' ? null : value;

    const checker = {
      ifColumnTypeMatchesThen(gridColumnType: string, dateTimeTransform: (data: string) => (string | null)): any {
        if (transformDate && columnType && columnType === gridColumnType) {
          transformDate = dateTimeTransform(transformDate);
        }

        return checker;
      },

      ifInvalid(defaultValue: string): any {
        if (!transformDate) {
          transformDate = defaultValue;
        }

        return checker;
      },

      getDate(): string | null {
        return transformDate;
      }
    };

    return checker;
  }

  dateTransform(value: string): string | null {
    const localeDate = new Date(value).toLocaleDateString(window.navigator.language);
    return this.formatUsingPipe(localeDate, 'mediumDate');
  }

  private formatUsingPipe(value: string, format: string): string | null {
    return this.datePipe.transform(value, format);
  }

}
