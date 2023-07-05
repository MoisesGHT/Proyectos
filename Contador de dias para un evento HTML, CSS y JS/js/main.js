let events = [];
let arr = [];

const eventName = document.querySelector('#eventName');
const eventDate = document.querySelector('#eventDate');
const buttonbAdd = document.querySelector('#bAdd');
const eventContainer = document.querySelector('#eventsContainer');

document.querySelector("form").addEventListener('submit', (e) => {
    e.preventDefault();
    addEvent();
});

function addEvent() {
    if (eventName.value == "" || eventDate == "") {
        return;
    }

    if (dateDiff(eventDate.value) < 0) {
        return;
    }

    const newEvent = {
        id: (Math.random() * 100).toString(36).slice(3),
        name: eventName.value,
        date: eventDate.value,
    };

    events.unshift(newEvent);

    eventName.value = "";

    renderEvents();
}

function dateDiff(d){
    const targetDate = new Date(d);
    const today = new Date();
    const difference = targetDate.getTime() - today.getTime();
    const days = Math.ceil(difference / (1000 * 3600 * 24));
    return days;
}

function renderEvents(){
    const eventsHTML = events.map((event) => {
        return `
        <div class="event">
            <div class="days">
            <span class="days-number">${dateDiff(event.date)}</span>
            <span class="days-text">dias</span>
            </div>
            
            <div class="event-name">${event.name}
            <div class="event-date">${event.date}
            <div class="actions" data-id="${event.id}">
                <button class="bDelete">Eliminar</button>
            </div>
        </div>
        `;

    });
    eventContainer.innerHTML = eventsHTML.join("");

}