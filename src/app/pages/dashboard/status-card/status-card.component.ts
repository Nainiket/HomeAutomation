import { Component, Input } from '@angular/core';
// import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

// @Injectable()
// export class ConfigService {
  
// }
@Component({
  selector: 'ngx-status-card',
  styleUrls: ['./status-card.component.scss'],
  template: `
    <nb-card (click)="on = !on; action()" [ngClass]="{'off': !on}">
      <div class="icon-container">
        <div class="icon status-{{ type }}">
          <ng-content></ng-content>
        </div>
      </div>

      <div class="details">
        <div class="title h5">{{ title }}</div>
        <div class="status paragraph-2">{{ on ? 'ON' : 'OFF' }}</div>
      </div>
    </nb-card>
  `,
})
export class StatusCardComponent {

  constructor(private http: HttpClient) { }

  // configUrl = 'https://cloud.hubitat.com/api/f9362e31-5634-4944-b222-25840fb45762/apps/2/devices/2/toggle?access_token=2c87cfb5-bc3f-4962-905a-01888fd90ac9';
  action(){
    
    this.http.get<any>('https://cloud.hubitat.com/api/f9362e31-5634-4944-b222-25840fb45762/apps/2/devices/2/toggle?access_token=2c87cfb5-bc3f-4962-905a-01888fd90ac9').subscribe(
      error => console.error('There was an error!', error)
  );
    }

  @Input() title: string;
  @Input() type: string;
  @Input() on = true;
}

