import { Injectable } from '@angular/core'
import { AngularFireDatabase } from 'angularfire2/database'

@Injectable()
export class HomepageService {
  constructor(private db: AngularFireDatabase) {}
  
  getHeaderItems() {
    return this.db.list<any>('appList', limit => 
      limit.orderByChild('loveCount').limitToLast(10)
    ).valueChanges()
  }
}