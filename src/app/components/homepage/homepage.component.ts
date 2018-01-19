import { Component, OnInit } from '@angular/core'
import { Observable } from 'rxjs/Observable'

import { HomepageService } from './homepage.service'

//const newKey = afDb.list('/items').push(newItem).key

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl'],
  providers: [ HomepageService ]
})
export class HomepageComponent implements OnInit {
  headerItems: Observable<any[]>

  constructor(private mainService: HomepageService) {}

  ngOnInit() {
    this.headerItems = this.mainService.getHeaderItems()
  }
}
