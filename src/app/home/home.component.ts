import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  data: any;
  error: any;
  isLoading = false;
  searchId!: number;

  constructor(private httpService: HttpService) {}

  ngOnInit() {}

  fetchdata() {
    this.data = null;
    this.error = null;
    if (!this.searchId || isNaN(this.searchId)) {
      this.error = 'Please enter a valid ID.';
      return;
    }
    this.isLoading = true;
    this.httpService.getValue(this.searchId).subscribe(
      (response: any) => {
        console.log('API Response:', response);

        if (Array.isArray(response)) {
          this.data = response;
        } else {
          this.data = [response];
        }

        this.isLoading = false;
      },
      (error: any) => {
        this.error = error;
        this.isLoading = false;
      }
    );
  }
}
