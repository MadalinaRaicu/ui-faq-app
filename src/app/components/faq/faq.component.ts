import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { FaqService } from 'src/app/services/faq.service';
import { FAQ } from '../../model/faq';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent implements OnInit {
  faq$!: Observable<FAQ[]>;
  classActive: number = 0;

  constructor(private faqService: FaqService) {}

  ngOnInit(): void {
    this.faq$ = this.faqService.getFAQ();
  }

  toggle(faq: FAQ) {
    this.classActive = this.classActive === faq.id ? 0 : faq.id;
  }
}
