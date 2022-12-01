let navItem = document.querySelectorAll('.tabs__header-item');
let contentItem = document.querySelectorAll('.tabs__body-content');
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
let link = document.querySelectorAll('.all-characteristics-link')
function openSpecs(){
    navItem.forEach(function(elem){
        var elem = document.getElementById('all-characteristics-link');
        elem.addEventListener('click',activeTab);
    })
    function activeTab(){
        navItem.forEach(function(elem){
            elem.classList.remove('active');
        })

    var elem = document.getElementById('tab-2');

    console.log(el)
    el.classList.add('active');
    
}
}

