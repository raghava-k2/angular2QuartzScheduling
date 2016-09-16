/**
 * Created by kukapalv on 9/9/2016.
 */
import {Component} from "@angular/core";
@Component({
    selector: 'display',
    template: `<client-search></client-search>`,
    styles: [`h1 {
  color: #369;
  font-family: Arial, Helvetica, sans-serif;
  font-size: 250%;
}
h2, h3 {
  color: #444;
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}
body {
  margin: 2em;
}`]
})
export class DisplayComponent {
    
    constructor() {
    }
}