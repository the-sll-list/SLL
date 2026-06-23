export default {
    template: `
        <main class="page-submit">
            <div class="meta-container">
                <div class="meta">
                    <h1>Submit Record (Submit Levels on Discord Server)</h1>

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
            const webhook = "https://discord.com/api/webhooks/1519029522605805618/iAL5ChlmWRr3nE99op8TDdiyZW3pqteomFJZ1N0o72_sNhO5QOdiVgXiorjPQZe6CNWI";

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
