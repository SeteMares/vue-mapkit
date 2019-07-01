import { setMapOptions } from './Mapkit.js'

export default {
    install(Vue, options = {}) {
        setMapOptions(options)
    },
}
