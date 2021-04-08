import Localization from './localization'
import Firebase from './firebase'
export default {
    Localization,
    Firebase
}
export function createAction(type, payload) {
    return {
      type,
      payload,
    };
  }