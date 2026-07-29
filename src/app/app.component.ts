import { Component } from '@angular/core';
import { ApiService } from './services/api.service';
import { Developer } from './models/developer';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor(public apiService: ApiService) {
		this.apiService.getData()
	}

	highlight(row: HTMLTableRowElement): void {
		row.classList.toggle("selected-row")
	}
}
