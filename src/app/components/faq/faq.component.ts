import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FAQService } from 'src/app/services/faq.service';
import { FAQ } from '../../model/faq';

const INACTIVE_DEFAULT_ID = 0;

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq$!: Observable<FAQ[]>;
  classActive: number = INACTIVE_DEFAULT_ID;

  constructor(private faqService: FAQService) {}

  ngOnInit(): void {
    this.faq$ = this.faqService.getFAQ();
  }

  toggle(faq: FAQ): void {
    this.classActive =
      this.classActive === faq.id ? INACTIVE_DEFAULT_ID : faq.id;
  }
}
