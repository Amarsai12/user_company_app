import { Component, OnInit } from '@angular/core';
import { ApiService } from '../shared/service/api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent implements OnInit {

constructor(private api: ApiService) {

  this.api.getUserData().subscribe(data => this.data = data)  
}
totalUsers = 0;
totalCompanies = 0;
chartData: any;
chartOptions: any;
data:any;

width: number = 700;
height: number = 300;
fitContainer: boolean = false;

  view: any[] = [600, 400];
// options for the chart
showXAxis = true;
showYAxis = true;
gradient = true;
showLegend = true;
showXAxisLabel = true;
xAxisLabel = 'Country';
showYAxisLabel = true;
yAxisLabel = 'Sales';
timeline = true;
doughnut = true;
colorScheme = {
  domain: ['#9370DB', '#87CEFA', '#FA8072', '#FF7F50', '#90EE90', '#9370DB']
};
//pie
showLabels = true;
  ngOnInit(): void {
  this.calculateSummary();
    this.prepareChart(); 
  }
  calculateSummary() {
    // Total number of users
    this.totalUsers = this.data.length;

    // Total unique companies
    const companies = this.data.map((item:any) => item.company.name);
    this.totalCompanies = new Set(companies).size;
  }

  prepareChart() {
    const userCountPerCompany: { [key: string]: number } = {};

    this.data.forEach((item:any) => {
      const companyName = item.company.name;
      userCountPerCompany[companyName] =
        (userCountPerCompany[companyName] || 0) + 1;
    });

    this.chartData = {
      labels: Object.keys(userCountPerCompany),
      datasets: [
        {
          label: 'Users per Company',
          data: Object.values(userCountPerCompany),
          backgroundColor: 'rgba(75, 192, 192, 0.2)',
          borderColor: 'rgba(75, 192, 192, 1)',
          borderWidth: 1,
        },
      ],
    };

    this.chartOptions = {
      responsive: true,
      scales: {
        y: { beginAtZero: true },
      },
    };
  }
}
