// import './css/common.css'

const refs = {
    searchForm: document.querySelector('.js-search-form'),
    articlesContainer: document.querySelector('.js-articles-container'),
    loadMoreBtn:ocument.querySelector('.btn-primary'),
}

let searchQuery = '';


refs.searchForm.addEventListener('submit', onReload)
refs.loadMoreBtn.addEventListener('click', onload)

function onReload(e){

    e.preventDefault();
   
     searchQuery = e.currentTarget.elements.query.value;
   
   
    const options = {
           headers: {
               authorization: '4330ebfabc654a6992c2aa792f3173a3'
           }
       }
       
   const url = 'https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=10'
   
   
    fetch(url, options)
   .then(r => r.json())
   .then(console.log)
   
   }


function onload(e){
 e.preventDefault()

 searchQuery= e.currentTarget.elements.query.value;


 const options = {
    headers: {
        authorization: '4330ebfabc654a6992c2aa792f3173a3'
    }
}

const url = 'https://newsapi.org/v2/everything?q=${searchQuery}&pageSize=10'


fetch(url, options)
.then(r => r.json())
.then(console.log)


}





