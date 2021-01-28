import { NgModule } from '@angular/core'
import { CommonModule } from '@angular/common'
import { RouterModule } from '@angular/router'
import { WebCoreDataAccessModule } from '@nxpm-latest/web/core/data-access'
import { WebUiPageModule } from '@nxpm-latest/web/ui/page'
import { WebAboutFeatureComponent } from './web-about-feature.component'

@NgModule({
  declarations: [WebAboutFeatureComponent],
  imports: [
    CommonModule,
    WebCoreDataAccessModule,
    WebUiPageModule,
    RouterModule.forChild([{ path: '', pathMatch: 'full', component: WebAboutFeatureComponent }]),
  ],
})
export class WebAboutFeatureModule {}
