import { Component, OnInit } from '@angular/core';
import { SharedService } from 'src/app/shared.service';
import { interval, Subscription } from 'rxjs';
import { switchMap, distinctUntilChanged, startWith } from 'rxjs/operators';

@Component({
  selector: 'app-material',
  templateUrl: './material.component.html',
//   styleUrls: ['./material.component.scss']
})
export class MaterialComponent implements OnInit {

    constructor(private service: SharedService) { }

    private materialListSubscription: Subscription;


    ngOnInit(): void {
        this.pollMaterialList();
    }

    MaterialList: any = [];

    material_one: number [] = [];

    pollMaterialList() {
        // Use startWith to trigger an initial HTTP request
        this.materialListSubscription = interval(10000).pipe(
          startWith(0), // emit 0 immediately
          // Use switchMap to switch to a new observable (HTTP request) each time the interval emits
          switchMap(() => this.service.getMaterialTransactionList()),
          // Use distinctUntilChanged to filter out repeated values
          distinctUntilChanged((prev, curr) => JSON.stringify(prev) === JSON.stringify(curr))
        ).subscribe((data: any) => {
          this.MaterialList = data;
          this.material_one = data.map(item => item.material_one);
        });
    }

    ngOnDestroy() {
        // Unsubscribe from the interval observable
        if (this.materialListSubscription) {
            this.materialListSubscription.unsubscribe();
        }
    }


}
