// Load the latest episodes from YouTube
function loadEpisodes() {
    const episodesContainer = document.getElementById('episodes');
    const youtubeChannelId = UC7cJu1o2-cMwH_O_XfvfRZw; // Replace with your YouTube Channel ID
    const apiKey = AIzaSyA6RulwurPn578VgXGVx8pzKCowXfK3a5w; // Replace with your YouTube API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const video = document.createElement('div');
                video.innerHTML = `<h3>${item.snippet.title}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
                episodesContainer.appendChild(video);
            });
        });
}

// Load the featured guests
function loadGuests() {
    const guests = [
        { name: 'Guest 1', bio: 'Bio of Guest 1' },
        { name: 'Guest 2', bio: 'Bio of Guest 2' }
        // Add more guests here
    ];
    const guestList = document.getElementById('guest-list');
    guests.forEach(guest => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${guest.name}</strong> - ${guest.bio}`;
        guestList.appendChild(listItem);
    });
}

// Load analytics (Dummy Data for now)
function loadAnalytics() {
    const analyticsData = document.getElementById('analytics-data');
    analyticsData.innerHTML = `<p>Coming soon: Views, Likes, and Subscriptions data.</p>`;
}

// Initialize the dashboard
loadEpisodes();
loadGuests();
loadAnalytics();
