import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'kens-ng-lab';



  constructor(private route: ActivatedRoute) {}

  ngOnInit() {
    this.route.url.subscribe(console.log); // UrlSegment[]
  }


}
