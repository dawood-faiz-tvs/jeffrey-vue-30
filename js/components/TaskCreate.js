export default {
    template: `
        <form @submit.prevent="addTask">
            <div class="border border-gray-600 flex justify-between">
                <input placeholder="Add Task..." class="p-2" v-model="newTask">
                <button type="submit" class="p-2 border-l bg-gray-400">Add</button>
            </div>
        </form>
    `,
    data(){
        return {
            newTask: ''
        };
    },
    methods: {
        addTask(){
            this.$emit('addTask', this.newTask);
            this.newTask = '';
        }
    }
};