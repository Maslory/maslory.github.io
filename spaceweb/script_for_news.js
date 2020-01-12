let news = [
    {heading:'Заголовок',description:'текст',datetime:'5 минут назад'},
    {heading:'Заголовок',description:'текст',datetime:'время'},
    {heading:'Заголовок',description:'текст',datetime:'время'},
];



 



let name_object_news = '1';
let news_name = [];
let i = -1;
htReq = ('v' == '\v') ? new ActiveXObject ('Microsoft.XMLHTTP') : new XMLHttpRequest ();
class CreateNews {
    constructor(heading, description, datetime) {
        // this.heading = heading;
        // this.description = description;
        // this.datetime = datetime;
        this.block_community = document.getElementById('block_community');
        this.new_news = document.createElement('div');
        this.news_head = document.createElement('div');
        this.news_heading = document.createElement('div');
        this.news_datetime = document.createElement('div');
        this.line = document.createElement('div');
        this.heading = document.createTextNode(heading +'');
        this.description = document.createTextNode(description +'');
        this.datetime = document.createTextNode(datetime +'');
        this.description_ajax
        this.text_description = '13';
        
    }

    farm_news() {
        this.new_news.id = 'new_news'
        this.news_head.id = 'news_head';
        this.news_heading.id = 'news_heading';
        this.news_datetime.id = 'news_datetime';
        this.line.id = 'line';
        this.block_community.appendChild(this.line);
        this.block_community.appendChild(this.new_news);
        this.new_news.appendChild(this.news_head);
        this.news_head.appendChild(this.news_heading);
        this.news_heading.appendChild(this.heading);
        this.news_head.appendChild(this.news_datetime);
        this.news_datetime.appendChild(this.datetime);
        this.new_news.appendChild(this.description);
        
        
    }

}

$( "#block_community" ).load( "html/text.html"  );
let number_page_1 = document.getElementById('number_page_1');
number_page_1.onclick = function () {
    $( "#block_community" ).load( "html/text.html", function( response, status, xhr ) { // с использованием AJAX запроса загружаем данные с сервера и размещаем, возвращенный HTML код внутри элемента <div>, и вызываем функцию обратного вызова
        console.log(  response); // строка соответствующая данным, присланным от сервера
        // console.log( status ); // строка соответствующая статусу запроса
        // console.log( xhr.status ); // числовой код состояния ответа от сервера
        // console.log( xhr.statusText ); // сообщение о состоянии ответа
      })
}
let number_page_2 = document.getElementById('number_page_2');
number_page_2.onclick = function () {
    $( "#block_community" ).load( "html/text1.html", function( response, status, xhr ) { // с использованием AJAX запроса загружаем данные с сервера и размещаем, возвращенный HTML код внутри элемента <div>, и вызываем функцию обратного вызова
        console.log(  response); // строка соответствующая данным, присланным от сервера
        // console.log( status ); // строка соответствующая статусу запроса
        // console.log( xhr.status ); // числовой код состояния ответа от сервера
        // console.log( xhr.statusText ); // сообщение о состоянии ответа
      })
}