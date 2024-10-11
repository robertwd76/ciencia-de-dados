const url = 'hattps://raw.githubsercontent.com/guilhermeonrails/api/main/dados-globais.json'
async function visualisarinformacoesGlobais() {
    const res = await fetch(url)
    const dados = res.json()
}