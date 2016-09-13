/**
 * Created by kukapalv on 9/9/2016.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DisplayComponent} from "./app.component";
import {AppSearch} from "./app.search";
import {HttpModule} from "@angular/http";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [DisplayComponent, AppSearch],
    bootstrap: [DisplayComponent, AppSearch]
})
export class AppModule {
}