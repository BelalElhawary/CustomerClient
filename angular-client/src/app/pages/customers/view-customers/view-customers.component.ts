import { Component } from '@angular/core';
import { Customer } from '../../../shared/interfaces/customer';
import { CustomerService } from '../../../shared/services/customer.service';
import { RowInsertedEvent, RowRemovedEvent, RowUpdatedEvent } from 'devextreme/ui/data_grid';
import { OptionChangedEvent } from 'devextreme/ui/drop_down_box';
import { ValueChangedEvent } from 'devextreme/ui/select_box';

@Component({
  selector: 'app-view-customers',
  templateUrl: './view-customers.component.html',
  styleUrl: './view-customers.component.scss'
})
export class ViewCustomersComponent {
  customers: Customer[] = []
  countries: any[] = ['Egypt', 'Gaza']
  selectedCountry: string = 'Egypt'
  constructor(private customerService: CustomerService) { 
    this.fetchCustomers()
  }
  setEditedValue (e: ValueChangedEvent, cellInfo: any) {
    cellInfo.setValue(e.value);
  }
  fetchCustomers(): void {
    this.customerService.getCustomers().subscribe((data: Customer[]) => {
      this.customers = data;
    });
  }
  updateCustomer(e: RowUpdatedEvent) {
    this.customerService.updateCustomer(e.data.id, e.data).subscribe(() => {

    })
  }
  deleteCustomer(e: RowRemovedEvent) {
    this.customerService.removeCustomer(e.data.id).subscribe(() => {
      
    })
  }
  insertCustomer(e: RowInsertedEvent) {
    this.customerService.insertCustomer(e.data).subscribe(() => {
      
    })
  }
}
