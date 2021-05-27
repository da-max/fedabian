import { Module, Mutation, VuexModule } from 'vuex-module-decorators'
import { IAlert } from '~/types/utils.model'

@Module({
  name: 'alertmodule',
  stateFactory: true,
  namespaced: true
})
export default class AlertModule extends VuexModule {
  public alerts: IAlert[] = []

  private alertNumber: number = 0
  private readonly defaultTimeout: number = 200000

  @Mutation
  public ADD_ALERT (alert: IAlert): void {
    alert.id = this.alertNumber
    if (!alert.timeout) {
      alert.timeout = this.defaultTimeout
    }
    this.alerts.push(alert)
    this.alertNumber++
  }

  @Mutation
  ADD_ERROR (content: string) {
    this.ADD_ALERT({
      title: 'Une erreur est survenue',
      content,
      status: 'danger'
    })
  }

  @Mutation
  REMOVE_ALERT (alert: IAlert) {
    this.alerts = this.alerts.filter(a => a.id !== alert.id)
  }
}
