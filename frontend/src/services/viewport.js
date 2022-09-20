import Emitter from '@bastienrobert/events'

const MOBILE_BREAKPOINT = 992

class Viewport extends Emitter {
    constructor() {
        super()

        this.width = 0
        this.height = 0

        this.isMobile = false

        if (typeof document !== 'undefined') {
            this.onResize()
            window.addEventListener('resize', this.onResize)
        }
    }

    overflow(value) {
        document.body.style.overflow = value ? 'auto' : 'hidden'
    }

    onResize = () => {
        this.width = window.innerWidth
        this.height = window.innerHeight

        this.isMobile = this.width <= MOBILE_BREAKPOINT

        this.emit('resize')
    }
}

export default new Viewport()
