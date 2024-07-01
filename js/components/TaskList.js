import Task from "./Task.js";

export default {
    components: {
        Task
    },
    template: `
        <section v-if="tasks.length" class="max-w-lg rounded overflow-hidden shadow-lg">
            <div class="px-6 py-4">
                <h2 class="font-bold mb-2">{{ title }}</h2>

                <ul class="divide-y">
                    <task v-for="task in tasks" :key="task.id" :task="task"></task>
                </ul>
            </div>
        </section>
    `,
    props: {
        tasks: Array,
        title: String
    }
    
};