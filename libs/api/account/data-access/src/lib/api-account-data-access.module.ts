import { Module } from '@nestjs/common'
import { ApiCoreDataAccessModule } from '@nxpm-latest/api/core/data-access'

import { ApiAccountDataAccessService } from './api-account-data-access.service'

@Module({
  imports: [ApiCoreDataAccessModule],
  providers: [ApiAccountDataAccessService],
  exports: [ApiAccountDataAccessService],
})
export class ApiAccountDataAccessModule {}
