import { Component } from '@angular/core'
import { Observable } from 'rxjs/Observable'
import { AngularFireDatabase } from 'angularfire2/database'

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent {
  items: Observable<any[]>;

  constructor(db: AngularFireDatabase) {
    db.list<any>('listApp').valueChanges().subscribe(res => console.log(res))
  }
}
