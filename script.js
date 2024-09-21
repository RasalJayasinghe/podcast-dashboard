// Load the latest episodes from YouTube
function loadEpisodes() {
    const episodesContainer = document.getElementById('episodes');
    const youtubeChannelId = UC7cJu1o2-cMwH_O_XfvfRZw; // Replace with your YouTube Channel ID
    const apiKey = AIzaSyA6RulwurPn578VgXGVx8pzKCowXfK3a5w; // Replace with your YouTube API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=5`;
    const url = `https://www.googleapis.com/youtube/v3/videos?key=${apiKey}&part=snippet,statistics&id=${videoIds.join(',')}`;


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

function createViewsChart(data) {
    const ctx = document.getElementById('viewsChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',  // or 'line', 'pie', etc.
        data: {
            labels: data.titles,  // Video titles as labels
            datasets: [{
                label: 'Views',
                data: data.views,  // Video views as data
                backgroundColor: 'rgba(54, 162, 235, 0.2)',  // Bar colors
                borderColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 1
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            }
        }
    });
}

// Call this function after retrieving video statistics
createViewsChart({
    titles: ['Video 1', 'Video 2', 'Video 3'],  // Replace with real titles
    views: [5000, 10000, 15000]  // Replace with real views
});


// Initialize the dashboard
loadEpisodes();
loadGuests();
loadAnalytics();
