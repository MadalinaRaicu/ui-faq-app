import { Component } from '@angular/core';
import { FAQ, faqs } from './faqs';

@Component({
  selector: 'app-faq',
  templateUrl: './faq.component.html',
  styleUrls: ['./faq.component.scss'],
})
export class FaqComponent {
  faqs: FAQ[] = faqs;
  classActive: number = 0;

  toggle(faq: FAQ) {
    this.classActive = this.classActive === faq.id ? 0 : faq.id;
  }
}
