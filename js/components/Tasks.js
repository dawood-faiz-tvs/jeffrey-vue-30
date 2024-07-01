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
            tasks: [
                {
                    id: 1,
                    title: 'Learn Vue',
                    isDone: false,
                },
                {
                    id: 2,
                    title: 'Learn PHP',
                    isDone: true,
                },
                {
                    id: 3,
                    title: 'Learn JavaScript',
                    isDone: false,
                },
                {
                    id: 4,
                    title: 'Learn Python',
                    isDone: false,
                },
                {
                    id: 5,
                    title: 'Learn Node.js',
                    isDone: false,
                },
            ],
            newTask: ''
        };
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