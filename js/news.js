const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=a6fa1b18eb724258b9f4ebaaf97e5aee';


const getNews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.articles[5])
      } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
}

getNews()

data.articles[0].author
data.articles[0].title
data.articles[0].description
data.articles[0].url
data.articles[0].urlToImage
data.articles[0].publishedAt
data.articles[0].content

