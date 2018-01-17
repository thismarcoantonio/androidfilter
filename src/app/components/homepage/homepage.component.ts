import { Component } from '@angular/core'

@Component({
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.styl']
})
export class HomepageComponent {
  contructor() {
    console.log('homepage loaded')
  }
}