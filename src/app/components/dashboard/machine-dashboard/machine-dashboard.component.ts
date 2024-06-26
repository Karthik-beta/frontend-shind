import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-machine-dashboard',
  templateUrl: './machine-dashboard.component.html',
  styleUrls: ['./machine-dashboard.component.scss']
})
export class MachineDashboardComponent implements OnInit {
    data: any;

    options: any;

    ngOnInit() {
        this.piechart();
    }
    
    piechart() {
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');

        this.data = {
            labels: ['A', 'B', 'C'],
            datasets: [
                {
                    data: [540, 325, 702],
                    backgroundColor: [documentStyle.getPropertyValue('--blue-500'), documentStyle.getPropertyValue('--yellow-500'), documentStyle.getPropertyValue('--green-500')],
                    hoverBackgroundColor: [documentStyle.getPropertyValue('--blue-400'), documentStyle.getPropertyValue('--yellow-400'), documentStyle.getPropertyValue('--green-400')]
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

