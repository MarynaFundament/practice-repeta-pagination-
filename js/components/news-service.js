export default class NewsApiService{
    constructor(){
    }

    fetchArticles(){
        const options = {
            headers: {
                 authorization: '4330ebfabc654a6992c2aa792f3173a3'
                }
            }
            
     const url = `https://newsapi.org/v2/everything?q=${searchQuery}&language=en&pageSize=5&page=1`;
        
     fetch(url, options)
     .then(r => r.json())
     .then(console.log)
    }
}