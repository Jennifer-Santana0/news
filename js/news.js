const url = 'https://newsapi.org/v2/everything?q=keyword&apiKey=a6fa1b18eb724258b9f4ebaaf97e5aee';


const getNews = async () => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        console.log(data.articles[0])
        console.log('--------------------------------------')
        console.log(data.articles[3].author)
        console.log(data.articles[3].title)
        console.log(data.articles[3].description)
        console.log(data.articles[3].url)
        console.log(data.articles[3].urlToImage)
        console.log(data.articles[3].publishedAt)
    } catch (error) {
        console.error('Erro ao buscar notícias:', error);
      }
}

getNews()

// {
//     source: { id: null, name: 'Helseo.com' },
//     author: null,
//     title: 'Show HN: Keyword Research Tool Without Fuzz',
//     description: 'HelSEO helps you to gain insights in monthly search volumes of keywords for SEO.',
//     url: 'https://helseo.com/',
//     urlToImage: null,
//     publishedAt: '2024-06-03T20:42:49Z',

//   }
