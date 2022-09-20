import { gsap } from 'gsap'

class Scroll {
    constructor() {
        this.y = this.getScrollTop()
        this.bindEvents()
    }

    bindEvents() {
        if (typeof document !== 'undefined') {
            gsap.ticker.add(this.raf)
        }
    }

    unbindEvents() {
        if (typeof document !== 'undefined') {
            gsap.ticker.remove(this.raf)
        }
    }

    getScrollTop() {
        if (typeof document !== 'undefined') {
            return window.pageYOffset || document.documentElement.scrollTop
        }

        return 0
    }

    raf = () => {
        this.y = this.getScrollTop()
    }
}

export default new Scroll()
