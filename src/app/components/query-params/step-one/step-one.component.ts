import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-step-one',
  templateUrl: './step-one.component.html',
  styleUrls: ['./step-one.component.scss']
})
export class StepOneComponent {
  alldata=[
    {
      id:1,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:2,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:3,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:4,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:5,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:6,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:7,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:8,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:9,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:10,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:11,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:11,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:12,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:13,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:14,
      name:'suresh',
      city:'kakinada'
    },
    {
      id:15,
      name:'suresh',
      city:'kakinada'
    }

  ]

  pageSize = 3; // Number of items per page
  currentPage = 1; // Current page
  totalPages: number;
  pagedData!: any[];

  constructor(private route: Router) {
    this.totalPages = Math.ceil(this.alldata.length / this.pageSize);
    this.updatePageData();
  }

  updatePageData() {
    const startIndex = (this.currentPage - 1) * this.pageSize;
    console.log(startIndex,'start index')
    const endIndex = startIndex + this.pageSize;
    this.pagedData = this.alldata.slice(startIndex, endIndex);
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.updatePageData();
    }
  }

  prevPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.updatePageData();
    }
  }

  go() {
    this.route.navigate(['/step-main'], { queryParams: { step: 'four' } });
  }
}
