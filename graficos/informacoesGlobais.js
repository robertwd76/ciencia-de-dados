const url='https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-dados-globais.json'

async function vizualizarInformacoesGlobais() {
    const res = await fetch(url)
    const dados = await res.json()
    const PessoasPraticandoEsportes = (dados.total_pessoas_que_praticam_esportes_regularmente / 1e9)
    const pessoasNoMundo = (dados.total_pessoas_mundo / 1e9)
    const horas = parseInt(dados.tempo_medio_semana_praticando_esportes)
    const minutos = Math.round((dados.tempo_medio_semana_praticando_esportes- horas) * 100)
    const porcentagemJogando = ((PessoasPraticandoEsportes / pessoasNoMundo) * 100).toFixed(2);

    const paragrafo = document.createElement('p')
    paragrafo.classList.add('graficos-container__texto')
    paragrafo.innerHTML = `Você sabia que o mundo tem <span>${pessoasNoMundo}</span> bilhões de pessoas que aproximadamente <span>${PessoasPraticandoEsportes}</span> bilhões estão praticando algum esporte <span>${horas} horas</span> e <span>${minutos} minutos</span> jogando algum esporte de preferencia.<br>Isso significa que aproximadamente <span>${porcentagemJogando}%</span> pessoas estão praticando algum esporte. `

    const container = document.getElementById('graficos-container')
    container.appendChild(paragrafo);
}

vizualizarInformacoesGlobais();