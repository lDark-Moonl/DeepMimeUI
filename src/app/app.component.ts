import {Component, ElementRef, ViewChild} from '@angular/core';
import {parseLazyRoute} from '@angular/compiler/src/aot/lazy_routes';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Deepmime';

  @ViewChild('player')
  player: ElementRef;


  private _items = [1,2,3,4,5,6,7,8];

  public onchange(event){
    let test = URL.createObjectURL(event.target.files[0]);
    this.player.nativeElement.src = test;
  }


  get items() {
    return this._items.sort()
  }


}
