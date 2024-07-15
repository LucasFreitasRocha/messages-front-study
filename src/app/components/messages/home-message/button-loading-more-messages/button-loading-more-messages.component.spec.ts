import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonLoadingMoreMessagesComponent } from './button-loading-more-messages.component';

describe('ButtonLoadingMoreMessagesComponent', () => {
  let component: ButtonLoadingMoreMessagesComponent;
  let fixture: ComponentFixture<ButtonLoadingMoreMessagesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonLoadingMoreMessagesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ButtonLoadingMoreMessagesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
