import { mapMutations } from 'vuex'
import {
    SET_NAV_NAME
} from '@/store/mutations-type'

export default function({route, store}) {
    let name = '';
    if(route.name) name = route.name.split('-')[0]
    store.commit('nav/'+SET_NAV_NAME, name)
}