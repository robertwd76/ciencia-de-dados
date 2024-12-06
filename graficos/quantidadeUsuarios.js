import { getCSS, tickConfig } from "./common.js"

async function quantidadeAtletas() {
    const url = 'https://raw.githubusercontent.com/silviosnjr/CienciaDeDados-CriandoGraficosDinamicosComJavaScript/refs/heads/Aula01/esportes/esportes-mais-praticados.json'
    const rest = await fetch(url)
    const dados = await rest.json()

    const nomeDasModalidades = Object.keys(dados)
    const quantidadeJogadores= Object.values(dados)

    const data = [
        {
            x: nomeDasModalidades,
            y: quantidadeJogadores,
            type: 'bar',
            marker: {
                color: getCSS('--primary-color')
            }
        }
    ]

    const layout = {
        plot_bgcolor: getCSS('--bg-color'),
        paper_bgcolor: getCSS('--bg-color'),
        title: {
            text: "Quantidade de atletas praticando esportes",
            x: 0,
            font: {
                color: getCSS('--primary-color'),
                family: getCSS('--font'),
                size: 30,
            }
        },
        xaxis: {
            tickfont: tickConfig,
            title: {
                text: "Nome das modalidades",
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        },
        yaxis: {
            tickfont: tickConfig,
            title: {
                text: "Bilhoes de atletas praticando esporte",
                font: {
                    color: getCSS('--secundary-color')
                }
            }
        }
    }
    
    const grafico = document.createElement('div')
    grafico.className = 'grafico'
    document.getElementById('graficos-container').appendChild(grafico)
    Plotly.newPlot(grafico, data, layout)
}

quantidadeAtletas()