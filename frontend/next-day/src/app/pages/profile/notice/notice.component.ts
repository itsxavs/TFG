import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'nd-notice',
  templateUrl: './notice.component.html',
  styleUrls: ['./notice.component.scss']
})
export class NoticeComponent implements OnInit{
  @Input() tittle: string;
  @Input() subject: string;
  @Input() description: string;

  ngOnInit(){

  }

  goToPlay(){

  }
}
