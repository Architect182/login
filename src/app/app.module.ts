import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { AppComponent } from "./app.component";
import { UiModule } from "./shared/ui/ui.module";
//import { AppComponent } from "./app.component";
import { RouterModule } from "@angular/router";
import { routingModule } from "./app.routing";
import { DashboardComponent } from "./dashboard/dashboard.component";
@NgModule({
  declarations: [AppComponent, DashboardComponent],
  imports: [BrowserModule, UiModule, routingModule, RouterModule],
  //providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
