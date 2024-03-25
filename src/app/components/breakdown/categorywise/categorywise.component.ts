import { Component } from '@angular/core';

@Component({
  selector: 'app-categorywise',
  templateUrl: './categorywise.component.html',
  styleUrls: ['./categorywise.component.scss']
})
export class CategorywiseComponent {


    plant: any;
    shopfloor: any;
    assembly_line: any;
    machine_id: any;
    jobwork: any;
    product_id: any;
    category: any;

    ngOnInit(): void {

        this.plant = [
            { name: 'CHENNAI' },
          ],
          this.shopfloor = [
            { name: 'XYZ' },
          ],
          this.assembly_line = [
            { name: 'TSE' },
          ],
          this.machine_id= [
            { name: 'TSE-001' },
            { name: 'TSE-002' },
            { name: 'TSE-003' },
          ],
          this.jobwork = [
            { name: 'JW-12345678-54'}
          ],
          this.product_id = [
            { name: 'CASSEROLES' },
          ],
          this.category = [
            { name: 'TEST' },
          ]
    }


    dummyList = [
        {
            shopfloor: 'Piston',
            machine_id: 4353,
            status: 'Active',
            alert: 'June 16, 2023, 01:03:34'
        },
        {
            shopfloor: 'Piston',
            machine_id: 5433,
            status: 'Active',
            alert: 'June 16, 2023, 01:26:37'
        },
        {
            shopfloor: 'Piston',
            machine_id: 4353,
            status: 'Active',
            alert: 'June 16, 2023, 01:03:34'
        },
        {
            shopfloor: 'Piston',
            machine_id: 5433,
            status: 'Active',
            alert: 'June 16, 2023, 01:26:37'
        },
    ]

}
