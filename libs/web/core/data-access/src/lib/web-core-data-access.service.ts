import { Injectable } from '@angular/core'
import { Observable } from 'rxjs'
import { map } from 'rxjs/operators'
import { ApolloAngularSDK, IntercomMessage } from '../generated/graphql'

@Injectable()
export class WebCoreDataAccessService {
  constructor(public readonly sdk: ApolloAngularSDK) {}

  uptime(): Observable<number> {
    return this.sdk.uptime(null, { fetchPolicy: 'network-only' }).pipe(map((res) => res?.data?.uptime))
  }

  uptimeWatch(): Observable<number> {
    return this.sdk.uptimeWatch(null, { pollInterval: 1000 }).valueChanges.pipe(map((res) => res?.data?.uptime))
  }

  intercomPub(type: string, scope: string, payload: any): Observable<IntercomMessage> {
    return this.sdk.intercomPub({ type, scope, payload }).pipe(map((res) => res?.data?.intercomPub))
  }

  intercomSub(): Observable<IntercomMessage> {
    return this.sdk.intercomSub().pipe(map((res) => res?.data?.intercomSub))
  }

  me() {
    return this.sdk.me().pipe(map((res) => res?.data?.me))
  }
}
