
function createTimeblock(time, text, index) {
    const timeblockEl = $('
        <div class="row time-block">
            <div class="hour">${time.display}</div>
        </div>
    ');

        const timeblockInput = $(`
        <textarea name="time-block" class="description">${text}</textarea>
    `);

    const currentHour = moment().hour();
         if (time.value < currentHour) timeblockInput.addClass("past");
  
        else if (time.value === currentHour) timeblockInput.addClass("present");
    
        else timeblockInput.addClass("future");
