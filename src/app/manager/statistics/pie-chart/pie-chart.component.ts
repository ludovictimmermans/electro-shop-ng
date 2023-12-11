import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-pie-chart',
  templateUrl: './pie-chart.component.html',
  styleUrls: ['./pie-chart.component.scss']
})
export class PieChartComponent {
  @Input()
  value:any;
  data: any;
  options: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');

    this.data = {
      labels: this.value.ref,
      datasets: [
        {
          data: this.value.value,
          backgroundColor: ['#00589F', '#016FC4', '#1891C3', '#3AC0DA','#3DC6C3','#50E3C2'],
          hoverBackgroundColor: ['rgba(0,88,156,0.8)', 'rgba(1,111,196,0.8)', 'rgba(24,145,195,0.8)', 'rgba(58,192,218,0.8)','rgba(61,198,195,0.8)','rgba(80,227,194,0.8)']
        }
      ]
    };

    this.options = {
      plugins: {
        legend: {
          labels: {
            usePointStyle: true,
            color: textColor
          }
        }
      }
    };
  }

}
