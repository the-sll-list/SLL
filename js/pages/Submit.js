export default {
    template: `
        <main class="page-submit">
            <div class="meta-container">
                <div class="meta">
                    <h1>Submit Record</h1>

                    <p>Nick</p>
                    <input type="text" v-model="user">

                    <p>Level Name</p>
                    <input type="text" v-model="level">

                    <p>Video Link</p>
                    <input type="text" v-model="link">

                    <p>Percent</p>
                    <input type="number" v-model="percent">

                    <p>Refresh Rate (Hz)</p>
                    <input type="number" v-model="hz">

                    <br><br>
                    <button @click="submit">Submit</button>
                </div>
            </div>
        </main>
    `,
    data() {
        return {
            user: "",
            level: "",
            link: "",
            percent: 100,
            hz: 60
        };
    },
    methods: {
        submit() {
            const webhook = "https://discord.com/api/webhooks/1517158905250054284/f2Nvq6bIWz-UMLiTsXXuZC1Q2JG_6eSpkP8GQDgnSyhrFXB3RTf1jpmaBd4gfOUlQIEd";

            fetch(webhook, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    content:
`📩 New Record Submission

👤 Player: ${this.user}
🎮 Level: ${this.level}
🎥 Video: ${this.link}
💯 Percent: ${this.percent}%
⚡ Hz: ${this.hz}`
                })
            });

            alert("Record submitted!");
        }
    }
};
