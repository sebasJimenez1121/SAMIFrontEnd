import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-pagination',
  templateUrl: './navigation-pagination.component.html',
  styleUrls: ['./navigation-pagination.component.css']
})
export class NavigationPaginationComponent implements OnInit {
  currentPage = 1;
  totalPages = 10;
  pagesToShow = 5; 
  pages: number[] = [];

  ngOnInit() {
    this.generatePages();
  }

  generatePages() {
    this.pages = [];
    let startPage = Math.max(1, this.currentPage - this.pagesToShow);
    let endPage = Math.min(this.totalPages, this.currentPage + this.pagesToShow);

    if (startPage > 1) {
      this.pages.push(1);
      if (startPage > 2) {
        this.pages.push(-1);
      }
    }


    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }

    if (endPage < this.totalPages) {
      if (endPage < this.totalPages - 1) {
        this.pages.push(-1); 
      }
      this.pages.push(this.totalPages);
    }
  }

  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.generatePages();
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.generatePages();
    }
  }

  goToPage(page: number) {
    if (page !== -1) { 
      this.currentPage = page;
      this.generatePages();
    }
  }
}
