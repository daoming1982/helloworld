async function sendMessage() {
    const input = document.getElementById("input").value;
    const output = document.getElementById("output");

    output.innerHTML = "正在生成回答...";

    const res = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": "Bearer YOUR_API_KEY"
        },
        body: JSON.stringify({
            model: "gpt-4o-mini", 
            messages: [{ role: "user", content: input }]
        })
    });

    const data = await res.json();
    output.innerHTML = data.choices[0].message.content;
}
