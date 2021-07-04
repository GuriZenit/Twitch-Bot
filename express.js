import { readLines } from "https://deno.land/std@0.90.0/io/bufio.ts"
import { opine, text } from "https://deno.land/x/opine@1.2.0/mod.ts"

const app = opine()
app.use(text())

console.log("server running")

app.post("/refresh", async (req, res) => {
    console.log("repl.deploy" + req.body + req.headers.get("Signature"))

    const result: {
        body: string
        status: number
    } = JSON.parse((await getStdinLine())!)

    await res.setStatus(result.status).end(result.body)
    console.log("repl.deploy-success")
})

app.get("/", async (_, res) => {
    res.end("OK")
})

async function getStdinLine() {
    for await (const line of readLines(Deno.stdin)) {
        return line
    }
}

app.listen(8000)
