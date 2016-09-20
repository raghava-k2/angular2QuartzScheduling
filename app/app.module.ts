/**
 * Created by kukapalv on 9/9/2016.
 */
import {NgModule} from "@angular/core";
import {BrowserModule} from "@angular/platform-browser";
import {FormsModule} from "@angular/forms";
import {DisplayComponent} from "./app.component";
import {AppSearch} from "./app.search";
import {HttpModule} from "@angular/http";
import {Ng2Grid} from "./app.grid.component";
import {CreateOrReplaceJob} from "./app.crOrRepjob.component"
import {KeysPipe} from "./app.pipes.component";
@NgModule({
    imports: [BrowserModule, FormsModule, HttpModule],
    declarations: [DisplayComponent, AppSearch, Ng2Grid, CreateOrReplaceJob,KeysPipe],
    bootstrap: [DisplayComponent]
})
export class AppModule {
}