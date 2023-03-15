import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'newmock-INSP';
  tabs = ['Extract,load files', 'Validate files', 'Compare Files', 'Share Results', 'Upload Corrected Files', 'Extract Compare Signoff']
  tabselection(tab: any) {
    console.log(tab, "tab")
  }
  applyActiveLinkBasedOnRoute(tab: any) {

  }
}
