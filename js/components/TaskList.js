import Task from "./Task.js";
import TaskTags from "./TaskTags.js";
import Panel from "./Panel.js";

export default {
    components: {
        Task,
        TaskTags,
        Panel
    },
    template: `
        <panel v-if="tasks.length" class="w-80 px-6 py-4">
            <div class="flex justify-between items-start">
                <h2 class="font-bold mb-2">{{ title }} <span>({{ filteredTasks.length }})</span></h2>
                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>

            <task-tags v-model:currentTag="currentTag" :initial-tags="tasks.map((singleTask) => singleTask.tag)"></task-tags>

            <ul class="divide-y mt-6">
                <task v-for="task in filteredTasks" :key="task.id" :task="task"></task>
            </ul>

            <slot></slot>


            <template #footer>
                {{ title }} &copy; {{ new Date().getFullYear() }}
            </template>
        </panel>
    `,
    props: {
        tasks: Array,
        title: String,
        canToggle: {
            type: Boolean,
            default: false
        }
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