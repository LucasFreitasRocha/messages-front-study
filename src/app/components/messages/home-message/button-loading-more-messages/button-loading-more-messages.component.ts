import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-loading-more-messages',
  templateUrl: './button-loading-more-messages.component.html',
  styleUrls: ['./button-loading-more-messages.component.css'],
})
export class ButtonLoadingMoreMessagesComponent implements OnInit {
  @Input() hasMoreMessages: boolean = false;
  constructor() {}

  ngOnInit(): void {}
}
