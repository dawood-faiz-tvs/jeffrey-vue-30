import Tasks from './Tasks.js';
import Panel from './Panel.js';

export default {
    components: {
        Tasks, Panel
    },
    template: `
        <div class="grid gap-4"> 
            <tasks></tasks>

            <panel>
                <template #heading>
                    Problem Solvers
                </template>

                <template #default>
                    We solve problems people refuse to take on!
                </template>
            </panel>

            <panel>
                The clock is ticking against you!
            </panel>

            <panel theme="dark">
                <template #heading>
                    Web Design & Development
                </template>

                Top-notch web design & development services crafted by industry experts!

                <template #footer>
                    &copy; {{ new Date().getFullYear() }} Vista Solutions | All Rights Reserved
                </template>
            </panel>
        </div>
    ` 
};