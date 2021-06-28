
function createTimeblock(time, text, index) {
    const timeblockEl = $('
        <div class="row time-block">
            <div class="col-1 hour">${time.display}</div>
        </div>
        ');