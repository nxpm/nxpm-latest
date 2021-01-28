import { Component } from '@angular/core'
import { WebCoreDataAccessService } from '@nxpm-latest/web/core/data-access'

@Component({
  template: `
    <ui-page headerTitle="Dashboard">
      <div class="card">
        <div class="card-header">Dashboard</div>
        <div class="card-body">
          <pre>{{ me$ | async | json }}</pre>
        </div>
        <div class="card-footer">Server uptime: {{ uptime$ | async }}</div>
      </div>
    </ui-page>
  `,
})
export class WebDashboardFeatureComponent {
  uptime$ = this.data.uptimeWatch()
  me$ = this.data.me()
  constructor(private readonly data: WebCoreDataAccessService) {}
}
