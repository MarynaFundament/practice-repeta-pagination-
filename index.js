// import './css/common.css'
import NewsApiService from './js/components/news-service'


const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn:document.querySelector('[data-action = "load-more"]'),
}

const newsApiService = new NewsApiService();



let searchQuery = '';

refs.searchForm.addEventListener('submit', onSearch)
refs.loadMoreBtn.addEventListener('click', onLoadMore)

function onSearch(e){
e.preventDefault();
   
searchQuery = e.currentTarget.elements.query.value;
newsApiService.fetchArticles(searchQuery)
      
}


function onLoadMore(){
    newsApiService.fetchArticles(searchQuery)

}





