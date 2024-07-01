import Task from "./Task.js";

export default {
    components: {
        Task
    },
    template: `
        <section v-if="tasks.length" class="max-w-lg rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <h2 class="font-bold mb-2">{{ title }} <span>({{ filteredTasks.length }})</span></h2>

                <div class="flex gap-2">
                    <button v-for="tag in tags" class="border rounded px-1 py-px text-xs" :class="{'border-gray-500 bg-blue-700 text-white': tag === currentTag}" @click="currentTag = tag">{{ tag }}</button>
                </div>

                <ul class="divide-y mt-6">
                    <task v-for="task in filteredTasks" :key="task.id" :task="task"></task>
                </ul>
            </div>
        </section>
    `,
    props: {
        tasks: Array,
        title: String
    },
    computed: {
        tags(){
            return ['All', ...new Set(this.tasks.map((singleTask) => singleTask.tag))];
        },
        filteredTasks(){
            if(this.currentTag === 'All'){
                return this.tasks;
            }

            return this.tasks.filter((singleTask) => singleTask.tag === this.currentTag);
        }
    },
    data(){
        return {
            currentTag: 'All'
        }
    }
    
};