console.log('Welcome in habbit-tracker');

//--------------Finding months
const today = new Date().getMonth();
// console.log(today);

const months = ['January', 'Feburary', 'March', 'Aprail', 'May', 'June', 'July', 'August', 'Sepetember', 'October', 'November', 'December'];
const monthsDay = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];

//--------- Now we select the month
const selectMonths = document.getElementById('selectMonths');

for (let i = 0; i < 12; i++) {
    let item = months[i];
    selectMonths.innerHTML += `
    <option id="${i}" value="${item}">${item}</option>  `
}

// Get an array of selected options
var selectedOptions = today;

selectMonths.addEventListener('change', (e) => {
    // console.log('selected'); 
    displaySelectedOptions();
});

function displaySelectedOptions() {

    // Get an array of selected options
    var selectedOptions = today;
    for (var i = 0; i < 12; i++) {
        if (selectMonths.options[i].selected) {
            selectedOptions = selectMonths.options[i].id;
            break;
        }
    }

    // // Display the selected options (you can perform any action with them)
    // console.log("Selected options: " + selectedOptions, " index ",months[selectedOptions],monthsDay[selectedOptions]);

    //----------- Now we showing the cards in a col
    const habbitTrackersCards = document.getElementById('habbit-trackers-cards');
    let cnt = 0;
    habbitTrackersCards.innerHTML = "";

    for (let i = 0; i < monthsDay[selectedOptions]; i++) {
        habbitTrackersCards.innerHTML += `
    <div class="card col">
        <h2>Day-${i + 1}</h2>
        <div class="row habbit bg-red" id="${cnt}">
            <span>Excersise</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 1}">
            <span>Breakfast</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 2}">
            <span>Study</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 3}">
            <span>Lunch</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 4}">
            <span>Play</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 5}">
            <span>Dinner</span>
        </div>
    </div>  `
        cnt += 6;
    }

    const habbits = document.querySelectorAll('.habbit');
    // console.log(Array.from(habbits));
    
    Array.from(habbits).forEach((item) => {
        item.addEventListener('click', (e) => {
            // console.log(item);
            item.classList.toggle('bg-green');
        })
    })
    

}



//----------- Now we showing the cards in a col
const habbitTrackersCards = document.getElementById('habbit-trackers-cards');
let cnt = 0;

for (let i = 0; i < monthsDay[today]; i++) {
    habbitTrackersCards.innerHTML += `
    <div class="card col">
        <h2>Day-${i + 1}</h2>
        <div class="row habbit bg-red" id="${cnt}">
            <span>Excersise</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 1}">
            <span>Breakfast</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 2}">
            <span>Study</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 3}">
            <span>Lunch</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 4}">
            <span>Play</span>
        </div>
        <div class="row habbit bg-red" id="${cnt + 5}">
            <span>Dinner</span>
        </div>
    </div>  `
    cnt += 6;
}


//------------ When we click on the habbit
const habbits = document.querySelectorAll('.habbit');
// console.log(Array.from(habbits));

Array.from(habbits).forEach((item) => {
    item.addEventListener('click', (e) => {
        // console.log(item);
        item.classList.toggle('bg-green');
    })
})