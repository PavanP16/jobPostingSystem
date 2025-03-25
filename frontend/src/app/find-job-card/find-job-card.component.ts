import { Component } from '@angular/core';
import { NgIcon, provideIcons } from '@ng-icons/core';
import { heroUsers ,heroArrowTrendingUp,heroCalendarDateRange,heroCurrencyDollar,heroClipboardDocumentCheck} from '@ng-icons/heroicons/outline';

@Component({
  selector: 'app-find-job-card',
  imports: [NgIcon],
  viewProviders: [provideIcons({ heroUsers,heroArrowTrendingUp,heroCalendarDateRange,heroCurrencyDollar,heroClipboardDocumentCheck })],
  templateUrl: './find-job-card.component.html',
  styleUrl: './find-job-card.component.css'
})
export class FindJobCardComponent {
handleClick: any;

}
