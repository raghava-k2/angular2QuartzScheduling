/**
 * Created by kukapalv on 9/9/2016.
 */
import {NgModule}      from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {FormsModule}   from '@angular/forms';
import {DisplayComponent} from './app.component'
@NgModule({
    imports: [BrowserModule, FormsModule],
    declarations: [DisplayComponent],
    bootstrap: [DisplayComponent]
})
export class AppModule {
}