import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
  blogContent = "aaaaaaaaaaaaaaaa";

  keyupHandlerFunction(event){

    this.blogContent=event;
    console.log(event);
  }

  doSomething(){
    console.log(this.blogContent);
  }
}
