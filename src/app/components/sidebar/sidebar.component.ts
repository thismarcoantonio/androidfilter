import { Component } from '@angular/core'

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.styl']  
})
export class SidebarComponent {
  searchItems(e) {
    e.preventDefault()
    console.log(e.target)
  }
}
