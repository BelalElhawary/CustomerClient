import { Injectable } from '@angular/core';
import { Customer } from '../interfaces/customer';
import { FetchBackend, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  url = 'http://localhost:5062/api';

  constructor(private http: HttpClient) { }

  getCustomers(): Observable<any> {
    return this.http.get(this.url + '/customers', { headers: { Accept: 'application/json' } })
  }

  updateCustomer(id: number, customer: Customer): Observable<any> {
    return this.http.put(this.url + '/customers/' + id, customer, { headers: { Accept: 'application/json' }, })
  }

  removeCustomer(id: number): Observable<any> {
    return this.http.delete(this.url + '/customers/' + id, { headers: { Accept: 'application/json' }, })
  }

  insertCustomer(customer: Customer): Observable<any> {
    return this.http.post(this.url + '/customers', customer, { headers: { Accept: 'application/json' }, })
  }
}
