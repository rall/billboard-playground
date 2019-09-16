import {ChangeDetectionStrategy, Component, ElementRef, Input, OnChanges, OnInit} from '@angular/core';
import {bb, Chart, ChartConfiguration, Data} from 'billboard.js';

@Component({
  selector: 'app-bb-chart',
  template: '',
  styles: [':host { width: 100%; height: 100%; display: block; }'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  exportAs: 'bbChart'
})
export class BbChartComponent implements OnInit, OnChanges {
  @Input() options: ChartConfiguration = <any>{};
  @Input() data: Data = {};
  chart: Chart;

  constructor(private _elementRef: ElementRef) {
  }

  ngOnInit() {
  }

  redraw() {
    if (!this.chart) {
      throw new Error('Chart is not ready.');
    } else {
      this.chart.flush();
    }
  }

  ngOnChanges(): void {
    if (!this.data) {
      return;
    }
    this.chart = bb.generate({
      bindto: this._elementRef.nativeElement,
      data: this.data,
      ...this.options,
    });
  }
}
