let initialized = false

const mapOptions = {
    authorizationCallback(done) {
        // eslint-disable-line
        throw new Error('authorizationCallback not implemented')
    },
}

export function setMapOptions(options = {}) {
    Object.assign(mapOptions, options)
}

export function loadMapkit(version = '5.x.x') {
    return new Promise((resolve, reject) => {
        const src = `https://cdn.apple-mapkit.com/mk/${version}/mapkit.js`

        if (window.mapkit) {
            return resolve(window.mapkit)
        }

        const script = document.createElement('script')
        script.onload = () => resolve(window.mapkit)
        script.onerror = error => reject(error)
        document.body.appendChild(script)
        script.src = src
    })
}

export async function createMapkit(container, options = {}) {
    await loadMapkit()
    if (!initialized) {
        window.mapkit.init({ ...mapOptions, ...options })
        initialized = true
    }
    return new window.mapkit.Map(container)
}

export default {
    install(Vue, options = {}) {
        setMapOptions(options)
    },
}
