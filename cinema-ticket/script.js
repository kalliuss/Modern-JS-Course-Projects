const container = document.querySelector('.container');
const count = document.getElementById('count');
const amount = document.getElementById('amount');
const select = document.getElementById('movie');
const seats = document.querySelectorAll('.seat:not(.reserved)');

getFromLocalStorage();
calculeteTotal();

container.addEventListener('click', (e) => {
    if(e.target.classList.contains("seat") && !e.target.classList.contains("reserved")) {
        e.target.classList.toggle("selected"); // selected varsa sil yoksa ekle
        calculeteTotal();
    }
});


select.addEventListener('change', (e) => {
    calculeteTotal();
});


function calculeteTotal(){
        const selectedSeats = container.querySelectorAll(".seat.selected");
        
        const selectedSeatsArr = [];
        const seatsArr = [];

        selectedSeats.forEach((seat) => {
            selectedSeatsArr.push(seat);
        });

        seats.forEach((seat) => {
            seatsArr.push(seat);
        });

        let selectedSeatIndexs = selectedSeatsArr.map((seat) => {
            return seatsArr.indexOf(seat);
        });

        console.log(selectedSeatIndexs);
        
        let selectedSeatCount = selectedSeats.length;
        count.innerText = selectedSeatCount;
        amount.innerText = selectedSeatCount * select.value;


        saveToLocalStorage(selectedSeatIndexs);
};


function getFromLocalStorage() {
    const selectedSeats = JSON.parse(localStorage.getItem("selectedSeats"));
    
    if(selectedSeats !== null && selectedSeats.length > 0) {
        seats.forEach(function(seat, index) {
            if(selectedSeats.indexOf(index) >-1) {
                seat.classList.add("selected");
            }
        });
    }
        
    
    
    const selectedMovieIndex = localStorage.getItem("selectedMovieIndex");

    if(selectedMovieIndex !== null) {
        select.selectedIndex = selectedMovieIndex;
    }
}

function saveToLocalStorage(indexs) {
    localStorage.setItem("selectedSeats", JSON.stringify(indexs));
    localStorage.setItem("selectedMovieIndex", select.selectedIndex);
}

