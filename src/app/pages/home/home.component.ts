import { Component, OnInit, OnDestroy, ElementRef, ViewChild } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { ApiService } from './../../core/api.service';
import { UtilsService } from './../../core/utils.service';
import { Subscription } from 'rxjs/Subscription';
import { EventModel } from './../../core/models/event.model';
import { ScheduleModel } from './../../core/models/schedule.model';
declare var $: any;

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, OnDestroy {
  pageTitle = 'Schedule';
  eventListSub: Subscription;
  eventList: EventModel[];
  loading: boolean;
  error: boolean;
  query: '';

  constructor(private title: Title,
    public utils: UtilsService,
    private api: ApiService,) { }

  ngOnInit() {
    this.title.setTitle(this.pageTitle);
    this._getEventList();
  }

  private _getEventList() {
    this.loading = true;
    // Get future, public events
    this.eventListSub = this.api
      .getEvents$()
      .subscribe(
        res => {
          console.log(res);
          this.eventList = res;
          this.loading = false;
          ScheduleModel.events = res;
          $('#calendar').fullCalendar(ScheduleModel);
        },
        err => {
          console.error(err);
          this.loading = false;
          this.error = true;
        }
      );
  }

  resetQuery() {
    this.query = '';
  }

  ngOnDestroy() {
    this.eventListSub.unsubscribe();
  }

}
