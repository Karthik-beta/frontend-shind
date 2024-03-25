import { Component, OnInit, ChangeDetectorRef } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { Observable, Subscription } from 'rxjs';
import { interval } from 'rxjs';
import { map, switchMap, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-machine-details',
  templateUrl: './machine-details.component.html',
  styleUrls: ['./machine-details.component.scss']
})
export class MachineDetailsComponent implements OnInit {


    constructor(private service:SharedService, private cdr: ChangeDetectorRef) { }


    activityValues: number[] = [0, 100];

    machineWiseDataList: any[] = [];

    machineList = [
        {
            plant: 'Chennai',
            shopfloor: 'Shopfloor - 1',
            assemblyline: 'Assemblyline - 1',
            machine_id: 'BL-3-A',
            start_prod: '2024-01-11, 08 - 20 (11)',
            end_prod: '2024-03-09, 08 - 20 (6.0)',
            state: 'ACTIVE',
            activity: 0
        },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assemblyline: 'TSE',
        //     machine_id: 'TSE-002',
        //     state: 'IDLE',
        //     activity: 32
        // },
        // {
        //     plant: 'CHENNAI',
        //     shopfloor: 'XYZ',
        //     assemblyline: 'TSE',
        //     machine_id: 'TSE-003',
        //     state: 'BREAKDOWN',
        //     activity: 87
        // }
    ]


    ngOnInit(): void {
        this.refreshProdPlanList();
        this.getMachineStatus();
        this.loadMachineWiseData();
    }



    lineMachineList: any[] = [];
    assignedStartDate: string = '';
    expectedEndDate: string = '';


    rows: number = 10;
    currentPage: number = 1;
    totalRecords: number = 0;
    text: string = '';
    results: any[] = [];
    rowsPerPageOptions: number[] = [10, 20, 30];
    loading: boolean = false;

    refreshProdPlanList(){
        this.loading = true;

        const params = {
          page: this.currentPage.toString(),
          page_size: this.rows.toString()
        };

        this.service.getLineMachineConfig(params).subscribe((data: any) => {
          this.lineMachineList = data.results; // Assuming your API response has a 'results' property
          this.assignedStartDate = data.results[0].assigned_start_production;
            this.expectedEndDate = data.results[0].assigned_end_production;
        });
    }

    private subscription: Subscription;

    private machineStatusSubscription: Subscription;

    status: string="No Response";
    averagePerformance: number = 0;

    getStatusClass(status: string): string {
        // Logic to handle 'No Response' and other statuses
        if (status === 'No Response') {
            return 'NoResponse';
        }
        // Add other conditions as needed
        if (status === 'Active') {
            return 'Active';
        }
        if (status === 'Idle') {
            return 'Idle';
        }

        return status; // Default behavior if no match
    }

    getMachineStatus() {
        // Use startWith to trigger an initial HTTP request
        this.machineStatusSubscription = interval(10000).pipe(
          startWith(0), // emit 0 immediately
          // Use switchMap to switch to a new observable (HTTP request) each time the interval emits
          switchMap(() => this.service.getProductionAndon()),
          // Use distinctUntilChanged to filter out repeated values
          distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
        ).subscribe((data: any) => {
        //   this.status = data.map(item => item.r);
        this.status = data.map(item => {
            if (item.r === 'R') {
              return 'Active';
            } else if (item.r === 'I') {
              return 'Idle';
            } else {
              return item.r;
            }
          });
        //   console.log("String",this.status);
        });
    }

    private MachineListSubscription: Subscription;

    loadMachineWiseData() {
        // Use startWith to trigger an initial HTTP request
        this.MachineListSubscription = interval(10000).pipe(
          startWith(0), // emit 0 immediately
          // Use switchMap to switch to a new observable (HTTP request) each time the interval emits
          switchMap(() => this.service.getMachineWiseData()),
          // Use distinctUntilChanged to filter out repeated values
          distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
        ).subscribe((data: any) => {
          this.machineWiseDataList = data;
          this.calculateAveragePerformance(); // Call the function to update averagePerformance

          console.log("List",this.machineWiseDataList);
        //   console.log("List",this.AssemblyLineList);
        });
      }

    calculateAveragePerformance(): void {
        const performances = this.machineWiseDataList.map(item => item.performance);

        if (performances.length > 0) {
          const totalPerformance = performances.reduce((sum, performance) => sum + performance, 0);
          this.averagePerformance = parseFloat((totalPerformance / performances.length).toFixed(1));
        //   console.log("Average Performance",this.averagePerformance);
        } else {
          console.error("No performance data available.");
          this.averagePerformance = 0; // or any default value
        }
    }


    ngOnDestroy() {
      // Unsubscribe from the observable to avoid memory leaks
    //   this.subscription.unsubscribe();
    if (this.subscription) {
        this.subscription.unsubscribe();
    }

    // Unsubscribe from the interval observable
    if (this.MachineListSubscription) {
        this.MachineListSubscription.unsubscribe();
    }


      // Unsubscribe from the interval observable
      if (this.machineStatusSubscription) {
          this.machineStatusSubscription.unsubscribe();
      }
    }
}
