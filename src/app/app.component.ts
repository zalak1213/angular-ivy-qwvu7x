import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular ' + VERSION.major;
  images: any = [];
  imageLink: string = '';

  addImageLink() {
    if (this.imageLink) {
      this.images.push(this.imageLink);
    }
  }
  delimg(img){
this.images.splice(this.images.indexOf(img),1)
  }
}
