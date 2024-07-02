export default {
    template: `
        <div class="flex gap-2">
            <button v-for="tag in tags" class="border rounded px-1 py-px text-xs" :class="{'border-gray-500 bg-blue-700 text-white': tag === currentTag}" @click="$emit('update:currentTag', tag)">{{ tag }}</button>
        </div>
    `,
    props: {
        initialTags: Array,
        currentTag: String
    },
    computed: {
        tags(){
            return ['All', ...new Set(this.initialTags)];
        }
    },
};