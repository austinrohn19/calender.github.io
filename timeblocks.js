
function createTimeblock(time, text, index) {
    const timeblockEl = $('
        <div class="row time-block">
            <div class="col-1 hour">${time.display}</div>
        </div>
    ');

        const timeblockInput = $(`
        <textarea name="time-block" class="col-9 description">${text}</textarea>
    `);

    const currentHour = moment().hour();
         if (time.value < currentHour) timeblockInput.addClass("past");
  
        else if (time.value === currentHour) timeblockInput.addClass("present");
    
        else timeblockInput.addClass("future");
