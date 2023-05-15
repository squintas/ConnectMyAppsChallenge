import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { GetCardsService } from './../../service/get-cards.service';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.scss']
})
export class CardsComponent implements OnInit {
  posts: any[] = [];
  currentPage: number = 1;
  totalPages: any = 0;
  extraContent: boolean = false;

  constructor(private http: HttpClient, private getCardsService: GetCardsService) {}

  ngOnInit() {
    this.getCardsService.fetchPosts(this.currentPage).subscribe(posts => {
      this.posts = posts;
    });

    this.getCardsService.fetchTotalPages().subscribe(totalPages => {
      this.totalPages = totalPages.length / 5;
    });
  }

  goToPage(page: number) {
    if (page >= 1 && page <= this.totalPages) {
      this.currentPage = page;
      this.getCardsService.fetchPosts(this.currentPage).subscribe(posts => {
        this.posts = posts;
      });
    }
  }

  nextPage() {
    this.goToPage(this.currentPage + 1);
  }

  previousPage() {
    this.goToPage(this.currentPage - 1);
  }

  showMore() {
    this.extraContent = !this.extraContent;
  }
}
