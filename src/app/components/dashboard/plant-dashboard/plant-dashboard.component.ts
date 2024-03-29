import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-plant-dashboard',
  templateUrl: './plant-dashboard.component.html',
  styleUrls: ['./plant-dashboard.component.scss']
})
export class PlantDashboardComponent implements OnInit {
    yearlydata: any;

    ProdData: any;

    yearlyOptions: any;

    prodOptions: any;

    ngOnInit() {
        this.yearlyChart();
        this.productionChart();
    }

    yearlyChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.yearlydata = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'X',
                    backgroundColor: documentStyle.getPropertyValue('--blue-400'),
                    borderColor: documentStyle.getPropertyValue('--blue-400'),
                    data: [65, 59, 80, 81, 56, 55, 40, 43, 56, 63, 32, 80, 81, 56, 55, 40, 43]
                },
                {
                    label: 'Y',
                    backgroundColor: documentStyle.getPropertyValue('--red-400'),
                    borderColor: documentStyle.getPropertyValue('--red-400'),
                    data: [28, 48, 40, 19, 86, 27, 90,  63, 32, 80, 81, 56, 56, 63, 32, 80, 81, 56]
                },
                {
                    label: 'Z',
                    backgroundColor: documentStyle.getPropertyValue('--indigo-400'),
                    borderColor: documentStyle.getPropertyValue('--indigo-400'),
                    data: [28, 48, 40, 19, 86, 27, 90,  63, 32, 80, 81, 56, 56, 63, 32, 80, 81, 56]
                },
                // {
                //     type: 'line',
                //     label: 'Total Production',
                //     borderColor: documentStyle.getPropertyValue('--blue-500'),
                //     borderWidth: 2,
                //     fill: false,
                //     tension: 0.4,
                //     data: [50, 25, 12, 48, 56, 76, 42]
                // },
                {
                    type: 'bar',
                    label: 'Breakdown',
                    backgroundColor: documentStyle.getPropertyValue('--green-500'),
                    data: [21, 84, 24, 75, 37, 21, 84, 24, 75, 37, 65, 34],
                    borderColor: 'white',
                    borderWidth: 2
                },
                {
                    type: 'bar',
                    label: 'Dataset 3',
                    backgroundColor: documentStyle.getPropertyValue('--orange-500'),
                    data: [41, 52, 24, 74, 23, 41, 52, 24, 74, 23, 21, 32]
                }
            ]
        };

        this.yearlyOptions = {
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    stacked: true,
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }



    productionChart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');

        this.ProdData = {
            labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [
                {
                    label: 'Actual',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [65, 59, 80, 65, 81, 59, 80, 65, 81, 56, 55, 10]
                },
                {
                    label: 'Target',
                    fill: false,
                    borderColor: documentStyle.getPropertyValue('--green-500'),
                    yAxisID: 'y',
                    tension: 0.4,
                    data: [28, 48, 40, 19, 48, 40, 40, 19, 48, 86, 27, 90]
                }
            ]
        };

        this.prodOptions = {
            stacked: false,
            maintainAspectRatio: false,
            aspectRatio: 2,
            plugins: {
                legend: {
                    labels: {
                        color: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                },
                y: {
                    type: 'linear',
                    display: true,
                    position: 'left',
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder
                    }
                }
            }
        };
    }


}
