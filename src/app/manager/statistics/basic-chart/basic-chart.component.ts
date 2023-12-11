import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-basic-chart',
  templateUrl: './basic-chart.component.html',
  styleUrls: ['./basic-chart.component.scss']
})
export class BasicChartComponent {
  @Input()
  value:any;


  basicData: any;

  basicOptions: any;

  ngOnInit() {
    const documentStyle = getComputedStyle(document.documentElement);
    const textColor = documentStyle.getPropertyValue('--text-color');
    const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
    const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

    let dataYear:number[];


    this.basicData = {
      labels: this.value.ref,
      datasets: [
        {
          label: 'Ventes',
          data: this.value.value,
          backgroundColor: ['#00589C', '#016FC4', '#1891C3', '#3AC0DA','#3DC6C3','#50E3C2'],
          borderWidth: 1
        }
      ]
    };

    this.basicOptions = {
      plugins: {
        legend: {
          labels: {
            color: textColor
          }
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        },
        x: {
          ticks: {
            color: textColorSecondary
          },
          grid: {
            color: surfaceBorder,
            drawBorder: false
          }
        }
      }
    };

  }
}
