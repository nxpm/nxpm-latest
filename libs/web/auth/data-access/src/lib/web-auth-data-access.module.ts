import { CommonModule } from '@angular/common'
import { NgModule } from '@angular/core'
import { RouterModule } from '@angular/router'
import { WebAuthDataAccessService } from './web-auth-data-access.service'
import { IsLoggedInGuard } from './guards/is-logged-in.guard'

@NgModule({
  imports: [CommonModule, RouterModule],
  providers: [WebAuthDataAccessService, IsLoggedInGuard],
})
export class WebAuthDataAccessModule {}
