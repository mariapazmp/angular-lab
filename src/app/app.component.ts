import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  result = {
    answer: '',
    forced: false,
    image: 'https://media0.giphy.com/media/5hc2bkC60heU/giphy.gif'
  };

  constructor(private http: HttpClient) {
  }

  onRequest(): void {
    this.http.get('https://yesno.wtf/api')
      .subscribe(data => {
        this.result = data;
        console.log(this.result);
      });
  }

}
