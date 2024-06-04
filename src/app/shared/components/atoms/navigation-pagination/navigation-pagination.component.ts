import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';

@Component({
  selector: 'app-navigation-pagination',
  templateUrl: './navigation-pagination.component.html',
  styleUrls: ['./navigation-pagination.component.css']
})
export class NavigationPaginationComponent implements OnInit {
    @Input() currentPage: number = 1;
    @Input() totalPages: number = 1;
    @Output() pageChange = new EventEmitter<number>();

  pages: number[] = [];

  ngOnInit() {
    this.generatePages();
  }

  generatePages() {
  this.pages = [];

  // Verificar si hay más de una página en total
  if (this.totalPages > 1) {
    const startPage = Math.max(1, this.currentPage - 2);
    const endPage = Math.min(this.totalPages, this.currentPage + 2);

    for (let i = startPage; i <= endPage; i++) {
      this.pages.push(i);
    }
  } else {
    // Si solo hay una página en total, mostrar solo esa página
    this.pages.push(1);
  }
}
  previousPage() {
    if (this.currentPage > 1) {
      this.currentPage--;
      this.pageChange.emit(this.currentPage);
    }
  }

  nextPage() {
    if (this.currentPage < this.totalPages) {
      this.currentPage++;
      this.pageChange.emit(this.currentPage);
    }
  }

  goToPage(page: number) {
    this.currentPage = page;
    this.pageChange.emit(this.currentPage);
  }
  
}
