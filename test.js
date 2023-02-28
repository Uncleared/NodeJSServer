import { ChatGPTAPI } from 'chatgpt'

async function example() {
  const api = new ChatGPTAPI({
    apiKey: "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"
  })

  const res = await api.sendMessage('Hello World!')
  console.log(res.text)
}

example();