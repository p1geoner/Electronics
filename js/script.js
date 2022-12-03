let navItem = document.querySelectorAll('.tabs__header-item');
let contentItem = document.querySelectorAll('.tabs__body-content');
let link = document.querySelectorAll('.all-characteristics-link');
let contTab = document.querySelectorAll('.tab-2');
let navTab = document.querySelectorAll('.tab');
link.forEach(function(elem){
    elem.addEventListener('click',open);
})
function open(){
    
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    contentItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    navTab.forEach(function(elem){
        elem.classList.add('active');
    })
    contTab.forEach(function(elem){
        elem.classList.add('active');
    })
    
}

navItem.forEach(function(elem){
    elem.addEventListener('click',activeTab);
})
function activeTab(){
    navItem.forEach(function(elem){
        elem.classList.remove('active');
    })
    this.classList.add('active');
    let tabName = this.getAttribute('data-tab');
    console.log(tabName);
    activeTabContent(tabName);
}
function activeTabContent(tabName){
    contentItem.forEach(function(item){
        if(item.classList.contains(tabName)){
            item.classList.add('active');
        }else{
            item.classList.remove('active');
        }
    })
}
var img = ['heart','heart-red'];
heart = document.querySelector('.estimates__butn-1-heart');
i=1;
heart.onclick = red;
function red(){
    if(i== img.length){i=0;}
    heart.src='img/'+img[i]+'.jpg';
    i++;
    
}
var dislike = ['dislike','dislike-gray'];
dis_like= document.querySelector('.famous-review__feedback-dislike-img');
var like = ['like','like-red'];
_like= document.querySelector('.famous-review__feedback-like-img');
var like_count=document.getElementById('like_count');
var dislike_count=document.getElementById('dislike_count');
l=0;

function redd(){
    if(l== 1)
    {l=0;
        _like.src='img/'+like[l]+'.svg';
        like_count.innerHTML="12";
    }
    else
    {l=1;
        _like.src='img/'+like[l]+'.svg';
        like_count.innerHTML="13";
        dislike_count.innerHTML="2";
    }
    dis_like.src='img/'+dislike[0]+'.svg'
    b=0;
    
    
}
_like.onclick=redd;
b=0;
function gray(){
    if(b== 1)
    {b=0;
        dis_like.src='img/'+dislike[b]+'.svg';
        dislike_count.innerHTML="2";
    }
    else
    {b=1;
        dis_like.src='img/'+dislike[b]+'.svg';
        like_count.innerHTML="12";
        dislike_count.innerHTML="3";
    }
    _like.src='img/'+like[0]+'.svg';
    
    l=0;
}
dis_like.onclick=gray;
memory_main_text=document.getElementById('memory-js-main_text');
color_main_text=document.getElementById('color-js-main_text');
old_price_text=document.getElementById('old_price');
new_price_text=document.getElementById('new_price');
bonus_text=document.getElementById('bonus');
credit_text=document.getElementById('credit-price');
rassrochka_text=document.getElementById('rassrochka-price-1');
rassrochka_text_2=document.getElementById('rassrochka-price-2');
color_text_1=document.getElementById('color-text-js');
color_text_2=document.getElementById('color-js-main_text');
var radiocol=document.getElementsByName('radio-color');
var radiorm =document.getElementsByName('radio-ram');

for(var k=0; k<radiorm.length;k++){
    radiorm[k].onchange=changing_text;

}
for(var c=0; c<radiocol.length;c++){
    radiocol[c].onchange=changing_text_col;

}
function changing_text_col(){
    switch(this.value){
        case '1':
            color_text_1.innerHTML="Темная ночь";
            color_text_2.innerHTML="Midnight";
            break;
        case '2':
            color_text_1.innerHTML="Cияющая звезда";
            color_text_2.innerHTML="Starlight";
            break;
        case '3':
            color_text_1.innerHTML="Синий";
            color_text_2.innerHTML="Blue";
            break;
        case '4':
            color_text_1.innerHTML="Розовый";
            color_text_2.innerHTML="Ping";
            break;
        case '5':
            color_text_1.innerHTML="Красный";
            color_text_2.innerHTML="PRODUCT(Red)";
            break;
                
    }
}
function changing_text(){
    
    switch (this.value){
        case '1': memory_main_text.innerHTML="128GB";
        old_price_text.innerHTML="79 990";
        new_price_text.innerHTML="77 990";
        bonus_text.innerHTML="+1 950";
        credit_text.innerHTML="3 161";
        rassrochka_text.innerHTML="3 612";
        rassrochka_text_2.innerHTML="3 612";
        break;
        case '2': memory_main_text.innerHTML="256GB";
        old_price_text.innerHTML="84 990";
        new_price_text.innerHTML="82 990";
        bonus_text.innerHTML="+2 161";
        credit_text.innerHTML="3 832";
        rassrochka_text.innerHTML="4 351";
        rassrochka_text_2.innerHTML="4 351";
        break;
        case '3': memory_main_text.innerHTML="512GB";
        old_price_text.innerHTML="89 990";
        new_price_text.innerHTML="87 990";
        bonus_text.innerHTML="+2 923";
        credit_text.innerHTML="4 107";
        rassrochka_text.innerHTML="4 673";
        rassrochka_text_2.innerHTML="4 673";
        break;
    }
}















