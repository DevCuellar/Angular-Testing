import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css'],
})
export class PaginationComponent {
  @Input() totalPages: number = 0;
  @Input() selectedPage: number = 0;
  @Output() pageSelected = new EventEmitter<number>();

  get visiblePages(): number[] {
    const totalVisiblePages = 5;
    const start = Math.max(1, this.selectedPage - Math.floor(totalVisiblePages / 2));
    const end = Math.min(start + totalVisiblePages - 1, this.totalPages);
    return Array.from({ length: end - start + 1 }, (_, index) => start + index);
  }
  

  selectPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.pageSelected.emit(page);
    }
  }
}
