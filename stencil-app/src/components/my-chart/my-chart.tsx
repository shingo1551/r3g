import { Component, h } from '@stencil/core';
import ApexCharts, { ApexOptions } from 'apexcharts';

@Component({
  tag: 'my-chart',
  styleUrl: 'my-chart.css',
  // shadow: true,
  scoped: true,
})
export class MyChart {
  div: HTMLDivElement;
  chart: ApexCharts;

  componentDidRender() {
    this.chartRender();
  }

  disconnectedCallback() {
    this.chart.destroy();
  }

  chartRender() {
    var options: ApexOptions = {
      chart: {
        type: 'line',
      },
      series: [
        {
          name: 'sales',
          data: [30, 40, 35, 50, 49, 60, 70, 91, 125],
        },
      ],
      xaxis: {
        categories: [1991, 1992, 1993, 1994, 1995, 1996, 1997, 1998, 1999],
      },
    };

    this.chart = new ApexCharts(this.div, options);
    this.chart.render();
  }

  render() {
    return <div ref={(el) => (this.div = el)}></div>;
  }
}
