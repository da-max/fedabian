import { Store } from 'vuex'
import { getModule } from 'vuex-module-decorators'
import alertModule from '~/store/alertmodule'

let alertStore: alertModule

function initialiseStores (store: Store<any>): void {
  alertStore = getModule(alertModule, store)
}

export { initialiseStores, alertStore }
