import { ModuleWithProviders, NgModule, Type } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
  static HttpClientModule: any[] | Type<any> | ModuleWithProviders<{}>;
}
