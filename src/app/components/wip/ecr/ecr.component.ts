import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ecr',
  templateUrl: './ecr.component.html',
//   styleUrls: ['./ecr.component.scss']
})
export class EcrComponent implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        const dataset = {
            label: 'Status',
            backgroundColor: documentStyle.getPropertyValue('--blue-500'),
            borderColor: documentStyle.getPropertyValue('--blue-500'),
            data: [65, 27], // Data points for "Open" and "Closed"
          };

          this.data = {
            labels: ['Open', 'Closed'], // Labels for the data points
            datasets: [dataset],
          };

        // this.data = {
        //     labels: ['Open', 'Closed'],
        //     datasets: [
        //         {
        //             label: 'Open',
        //             backgroundColor: documentStyle.getPropertyValue('--blue-500'),
        //             borderColor: documentStyle.getPropertyValue('--blue-500'),
        //             data: [65, 27]
        //         },
        //         {
        //             label: 'Inprocess Rejection Rate',
        //             backgroundColor: documentStyle.getPropertyValue('--green-500'),
        //             borderColor: documentStyle.getPropertyValue('--green-500'),
        //             data: [27]
        //         }
        //     ]
        // };

        this.options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        color: textColor,
                        filter: function (legendItem, chartData) {
                            return !legendItem.text.includes('Status');
                        }
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                },
                y: {
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
