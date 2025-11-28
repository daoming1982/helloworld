async function sendMessage() {
  const input = document.getElementById("input").value;
  const outputDiv = document.getElementById("output");

  outputDiv.innerText = "正在生成回答...";

  try {
    const response = await fetch("https://solitary-sky-355e.daoming1982.workers.dev", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ message: input })
    });

    const result = await response.json();

    // 取模型返回的内容
    const reply = result.choices?.[0]?.message?.content || "（无返回内容）";

    outputDiv.innerText = reply;

  } catch (e) {
    outputDiv.innerText = "请求失败：" + e.message;
  }
}
