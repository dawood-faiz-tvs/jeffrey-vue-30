import Task from "./Task.js";
import TaskTags from "./TaskTags.js";

export default {
    components: {
        Task,
        TaskTags
    },
    template: `
        <section v-if="tasks.length" class="max-w-lg rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <h2 class="font-bold mb-2">{{ title }} <span>({{ filteredTasks.length }})</span></h2>

                <task-tags :current-tag="currentTag" :initial-tags="tasks.map((singleTask) => singleTask.tag)" @tagChanged="currentTag = $event"></task-tags>

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