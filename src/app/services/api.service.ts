import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../../environments/environment.development';
import { Developer } from '../models/developer';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
	public developers: Developer[] = []

	constructor(private http: HttpClient) {}

	getData() {
		this.http.get<Developer[]>(environment.apiUlr).subscribe(data => {
			this.developers = data as Developer[]
		})
	}
}
