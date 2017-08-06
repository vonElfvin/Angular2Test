import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  // templateUrl: './app.profileComponent.html',
  template: `
  <h1> Hello, {{name}}</h1>
  <h2><i>Address:</i> {{address["city"]}}, {{address.city}}</h2>
  <h2><i>Email:</i>{{email}}</h2>`,
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  name = 'Elvin';
  email = 'elvin@gmail.com';
  address = {
    street : 'Rydsvägen 1',
    city : 'Linköping',
    county : 'Östergötland'
  };
}
