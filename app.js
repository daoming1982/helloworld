async function sendMessage() {
    const input = document.getElementById("input").value;
    const outputDiv = document.getElementById("output");

    if (!input.trim()) {
        outputDiv.innerText = "请输入内容！";
        return;
    }

    outputDiv.innerText = "正在生成回答...";

    try {
        const response = await fetch("https://api.codex.love/api", {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                message: input
            })
        });

        const data = await response.json();

        const reply = data.reply || "（没有返回内容）";

        outputDiv.innerText = reply;

    } catch (e) {
        console.error(e);
        outputDiv.innerText = "请求失败：Failed to fetch（可能是 Worker 未部署成功）";
    }
} 
