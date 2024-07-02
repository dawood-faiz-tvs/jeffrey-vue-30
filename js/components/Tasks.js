import TaskList from "./TaskList.js";
import TaskCreate from "./TaskCreate.js";

export default {
    components: {
        TaskList,
        TaskCreate
    },
    template: `
        <section class="space-y-6">
            <task-list :tasks="filters.inProgress" title="In Progress Tasks"></task-list>
            <task-list :tasks="filters.completed" title="Completed Tasks"></task-list>

            <task-create @addTask="addTask"></task-create>
        </section>
    `,
    data(){
        return {
            tasks: []
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