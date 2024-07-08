import TaskList from "./TaskList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: {
        TaskList,
        TaskCreate
    },
    template: `
        <section class="flex gap-8">
            <task-list :tasks="filters.inProgress" title="In Progress Tasks">
                <task-create @addTask="addTask"></task-create>
            </task-list>
            <task-list v-if="showCompleted" :tasks="filters.completed" :can-toggle="true" @toggle="showCompleted = !showCompleted" title="Completed Tasks"></task-list>
        </section>
    `,
    data(){
        return {
            tasks: [],
            showCompleted: true
        };
    },
    created(){
        fetch("http://localhost:3001/tasks")
            .then((response) => response.json())
            .then((tasks) => {
                this.tasks = tasks;
            });
    },
    computed: {
        filters(){
            return {
                inProgress: this.tasks.filter((singleTask) => !singleTask.isDone),
                completed: this.tasks.filter((singleTask) => singleTask.isDone),
            }
        }
    },
    methods: {
        addTask(taskName){
            this.tasks.push({
                id: this.tasks.length + 1,
                title: taskName,
                isDone: false
            });
        }
    }
    
};