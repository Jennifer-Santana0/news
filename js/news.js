const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=a6fa1b18eb724258b9f4ebaaf97e5aee';
const content_card = document.getElementById('content_card')

const createElement = (articles) => {
    const cards_news = document.createElement('div')
    cards_news.classList.add('cards_news')

    const news_img = document.createElement('div')
    news_img.classList.add('news_img')
    const img = document.createElement('img')
    img.src = 'img/fundo-cyberpunk-2.jpg'
    news_img.appendChild(img)

    const news_content = document.createElement('div')
    news_content.classList.add('news_content')
    const h2 = document.createElement('h2')
    h2.innerHTML = articles.author ? articles.author : "Author unspecified";
    const h3 = document.createElement('h3')
    h3.innerHTML = articles.title
    const p = document.createElement('p')
    p.innerHTML = articles.publishedAt
    const p2 = document.createElement('p')
    p2.innerHTML = articles.description
   

    news_content.appendChild(h2)
    news_content.appendChild(h3)
    news_content.appendChild(p)
    news_content.appendChild(p2)
        
    cards_news.appendChild(news_img)
    cards_news.appendChild(news_content)
    content_card.appendChild(cards_news) 
}


function gerarNumerosAleatorios(qtd, min, max) {
    let numeros = [];
    for (let i = 0; i < qtd; i++) {
        numeros.push(Math.floor(Math.random() * (max - min + 1)) + min);
    }
    return numeros;
}

const getNews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();

        let numerosAleatorios = gerarNumerosAleatorios(20, 0, 99); 

        for (let index = 0; index < numerosAleatorios.length; index++) {
            createElement(data.articles[numerosAleatorios[index]])
        }
        
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
}

getNews()