  
export const outline = {
    data() {
        return {
            isShowing: false
        }
    },
    methods: {
        outlineShow() {
            this.isShowing = !this.isShowing;
        }
    }
}