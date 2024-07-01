export default {
    template: `
        <li>
            <label>
                <span class="font-sm text-sm mb-2">{{task.title}} <input type="checkbox" v-model="task.isDone"></span>
            </label>
        </li>
    `,
    props: {
        task: Object
    }
};