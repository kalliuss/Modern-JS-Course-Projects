let models = [
    {
        name: "BMW 418d",
        image: "img/bmw.jpg",
        link: "http://www.arabalar.com.tr/bmw/4-serisi/2018/418d-2-0-gran-coupe"
    },
    {
        name: "Mazda CX-3",
        image: "img/mazda.jpg",
        link: "http://www.arabalar.com.tr/mazda/cx-3/2017/1-5-sky-d-motion"
    },
    {
        name: "Volvo S60",
        image: "img/volvo.jpg",
        link: "http://www.arabalar.com.tr/volvo/s60/2018/1-5-t3-advance"
    },
    {
        name: "Skoda Superb",
        image: "img/skoda.jpg",
        link: "http://www.arabalar.com.tr/skoda/superb/2018/1-4-tsi-active"
    },
    {
        name: "Honda Civic",
        image: "img/honda.jpg",
        link: "http://www.arabalar.com.tr/honda/civic/2018/1-6-elegance"
    },
];

let index = 0;
let slideCount = models.length;
let interval;
let settings = {
    duration : "5000",
    random : false
};

init(settings);

document.querySelector(".fa-arrow-circle-left").addEventListener("click", function(){

        index--;
        showSlide(index);
        console.log(index);

});

document.querySelector(".fa-arrow-circle-right").addEventListener("click", function(){

        index++;
        showSlide(index);
        console.log(index);

});

document.querySelectorAll(".fas").forEach(function(item){
    item.addEventListener("mouseenter", function(){
        clearInterval(interval);
    });
    // mouse tıklatılınca setInterval durur
});

document.querySelectorAll(".fas").forEach(function(item){
    item.addEventListener("mouseleave", function(){
        init(settings);
    });
    // mouse çekilince setInterval tekrar başlar
});


function init(s){

    // setTimeout  belirtilen süre sonra 1 kere başlar durur 
    // setInterval  clearInterval ile durdurulana kadar belirli aralıklarla devam eder

    let prev;
    interval = setInterval(function(){
        
        
        if(settings.random){
            // random index
            do{
                index = Math.floor(Math.random() * slideCount);
            }while(index == prev)
            prev = index; // üretilen sayı index içinde tutuulsun
        }else{
            // artan index
            if(slideCount == index + 1){
                index = -1;

            }
            showSlide(index);
            console.log(index);
            index++;
        }
        showSlide(index);
    }, settings.duration)
}



function showSlide(i){
    
    index = i;

    if (i<0){
        index = slideCount - 1;
    }

    if (i>=slideCount){
        index = 0;
    }
    document.querySelector(".card-title").textContent = models[index].name;

    document.querySelector(".card-img-top").setAttribute("src", models[index].image);

    document.querySelector(".card-link").setAttribute("href", models[index].link);
}





