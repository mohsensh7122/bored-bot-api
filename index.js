const getActivityButton = document.getElementById('get-activity');
const activityEl = document.getElementById('activity');


getActivityButton.addEventListener('click', function(){
    fetch("https://apis.scrimba.com/bored/api/activity")
        .then(response => response.json())
        .then(data => {
            activityEl.textContent = data.activity;
        })
})


// "https://apis.scrimba.com/bored/api/activity"