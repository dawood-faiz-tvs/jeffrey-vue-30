export default {
    template: `
        <div class="flex gap-2">
            <button v-for="tag in tags" class="border rounded px-1 py-px text-xs" :class="{'border-gray-500 bg-blue-700 text-white': tag === currentTag}" @click="currentTag = tag">{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array
    },
    computed: {
        tags(){
            return ['All', ...new Set(this.initialTags)];
        }
    },
    data(){
        return {
            currentTag: 'All'
        };
    }
};