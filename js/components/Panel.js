export default {
    template: `
        <div :class="{
            'rounded-lg border p-4': true,
            'bg-white-700 border-white-700 text-black' : theme === 'light',
            'bg-gray-950 border-gray-700 text-white': theme === 'dark'
        }">
            <h2 class="font-bold mb-1" v-if="$slots.heading">
                <slot name="heading"></slot>
            </h2>

            <slot></slot>

            <footer v-if="$slots.footer" class="border-gray-600 border-t mt-4 pt-4 text-center text-sm">
                <slot name="footer"></slot>
            </footer>
        </div>
    `,
    props: {
        theme: {
            type: String,
            default: 'light'
        }
    }
}