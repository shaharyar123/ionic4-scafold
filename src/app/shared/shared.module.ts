import { NgModule, ModuleWithProviders } from "@angular/core";
import { HttpService } from './services/http.service';
@NgModule({
  imports: [],
  declarations: [],
})
export class SharedModule {
  static forRoot(): ModuleWithProviders {
    return {
      ngModule: SharedModule,
      providers: [
        HttpService
      ]
    };
  }
}
