export default {
    template: `
        <li>
            <label class="p-2 flex justify-between items-center">
                <span class="font-sm text-sm mb-2">{{task.title}}</span>
                <span> <input type="checkbox" v-model="task.isDone" class="ml-3"></span>
            </label>
        </li>
    `,
    props: {
        task: Object
    }
};