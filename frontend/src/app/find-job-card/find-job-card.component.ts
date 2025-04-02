import { Component, Input } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import {
  heroUsers,
  heroArrowTrendingUp,
  heroCalendarDateRange,
  heroCurrencyDollar,
  heroClipboardDocumentCheck,
  heroCurrencyRupee,
  heroStar
} from '@ng-icons/heroicons/outline';
import { ApiService } from '../api.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-find-job-card',
  imports: [NgIcon,CommonModule],
  viewProviders: [
    provideIcons({
      heroUsers,
      heroArrowTrendingUp,
      heroCalendarDateRange,
      heroCurrencyDollar,
      heroClipboardDocumentCheck,
      heroStar,
      heroCurrencyRupee
    }),
  ],
  templateUrl: './find-job-card.component.html',
  styleUrl: './find-job-card.component.css',
})
export class FindJobCardComponent {

  constructor (){
  console.log(this.job);

  }
  
  @Input() job: any;
}
