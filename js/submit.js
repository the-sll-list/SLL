<!DOCTYPE html>
<html lang="pl">
<head>
<meta charset="UTF-8">
<title>Submit Geometry Dash</title>
</head>
<body>

<h1>Submit na listę GD</h1>

<form id="submitForm">
    <input type="text" id="nick" placeholder="Nick" required><br><br>

    <input type="text" id="level" placeholder="Nazwa levela" required><br><br>

    <input type="url" id="video" placeholder="Link do filmu" required><br><br>

    <input type="number" id="percent" placeholder="Procent" required><br><br>

    <input type="number" id="fps" placeholder="FPS"><br><br>

    <textarea id="comment" placeholder="Dodatkowe informacje"></textarea><br><br>

    <button type="submit">Wyślij</button>
</form>

<script>
document.getElementById("submitForm").addEventListener("submit", async (e) => {
    e.preventDefault();

    const webhook = "https://discord.com/api/webhooks/1517158905250054284/f2Nvq6bIWz-UMLiTsXXuZC1Q2JG_6eSpkP8GQDgnSyhrFXB3RTf1jpmaBd4gfOUlQIEd";

    const data = {
        content:
`📩 Nowy submit!

👤 Nick: ${document.getElementById("nick").value}
🎮 Level: ${document.getElementById("level").value}
🎥 Film: ${document.getElementById("video").value}
💯 Procent: ${document.getElementById("percent").value}
🖥 FPS: ${document.getElementById("fps").value}
📝 Info: ${document.getElementById("comment").value}`
    };

    await fetch(webhook, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    });

    alert("Submit wysłany!");
});
</script>

</body>
</html>
