document.addEventListener("DOMContentLoaded", () => {
    // Set Slack Name and Email
    document.getElementById('slackName').textContent = 'Onyinyechiii';
    document.getElementById('slackEmail').textContent = 'onyinyechi.ubiaru@gmail.com';

    // Set Current Time and Day
    const updateTimeAndDay = () => {
        const now = new Date();
        document.getElementById('currentTime').textContent = now.toUTCString().slice(-12, -4);
        document.getElementById('currentDay').textContent = now.toLocaleDateString('en-US', { weekday: 'long' });
    };

    // Update time and day on load
    updateTimeAndDay();

    // Update time and day every second
    setInterval(updateTimeAndDay, 1000);
});

