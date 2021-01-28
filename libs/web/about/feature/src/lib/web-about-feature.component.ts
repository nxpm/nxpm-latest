import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'
import { environment } from '@nxpm-latest/web/core/feature'

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div class="card">
        <div class="card-header">About</div>
        <pre>{{ environment | json }}</pre>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </ui-page>
  `,
})
export class WebAboutFeatureComponent {
  environment = environment
  uptime$ = this.data.uptimeWatch()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
