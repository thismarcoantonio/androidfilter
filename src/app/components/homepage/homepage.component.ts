import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent {
  headerItems: Observable<any[]>

  constructor(db: AngularFireDatabase) {
    this.headerItems = db.list<any>('appList', limit => limit.orderByChild('loveCount').limitToLast(10)).valueChanges()
  }
}
