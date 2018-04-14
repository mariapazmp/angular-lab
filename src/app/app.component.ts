import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title:string;
  result:any;
  constructor(private http: HttpClient){
  }
  ngOnInit(): void {
    this.http.get('https://yesno.wtf/api')
      .subscribe(data => {
        this.result = data;
        console.log(this.result);
      });
  }

}
