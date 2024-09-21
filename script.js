// Example YouTube data fetching function
function loadEpisodes() {
    const youtubeChannelId = UC7cJu1o2-cMwH_O_XfvfRZw;  // Replace with your YouTube channel ID
    const apiKey = AIzaSyA6RulwurPn578VgXGVx8pzKCowXfK3a5w;  // Replace with your API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const episodesContainer = document.getElementById('episodes');
            data.items.forEach(item => {
                const video = document.createElement('div');
                video.innerHTML = `<h3>${item.snippet.title}</h3>
                <iframe width="560" height="315" src="https://www.youtube.com/embed/${item.id.videoId}" frameborder="0" allowfullscreen></iframe>`;
                episodesContainer.appendChild(video);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
}

// Example Chart.js usage for analytics
function createViewsChart(data) {
    const ctx = document.getElementById('viewsChart').getContext('2d');
    const chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: data.titles,
            datasets: [{
                label: 'Views',
                data: data.views,
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
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

// Load guest data
function loadGuests() {
    const guests = [
        { name: 'Guest 1', bio: 'Expert in technology' },
        { name: 'Guest 2', bio: 'CEO of a tech startup' }
    ];

    const guestList = document.getElementById('guest-list');
    guests.forEach(guest => {
        const listItem = document.createElement('li');
        listItem.innerHTML = `<strong>${guest.name}</strong> - ${guest.bio}`;
        guestList.appendChild(listItem);
    });
}

// Load analytics with mock data for now
createViewsChart({
    titles: ['Episode 1', 'Episode 2', 'Episode 3'],
    views: [5000, 10000, 15000]  // Replace with real data if available
});

// Load YouTube episodes and guests
function loadEpisodes() {
    const youtubeChannelId = UC7cJu1o2-cMwH_O_XfvfRZw;  // Replace with your YouTube channel ID
    const apiKey = AIzaSyA6RulwurPn578VgXGVx8pzKCowXfK3a5w;  // Replace with your API key
    const url = `https://www.googleapis.com/youtube/v3/search?key=${apiKey}&channelId=${youtubeChannelId}&part=snippet,id&order=date&maxResults=5`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            const episodesContainer = document.getElementById('episodes');
            data.items.forEach(item => {
                const videoId = item.id.videoId;
                const videoTitle = item.snippet.title;
                const videoThumbnail = item.snippet.thumbnails.high.url; // Get high-res thumbnail

                // Create episode tile
                const tile = document.createElement('div');
                tile.classList.add('episode-tile');

                // Add thumbnail, title, and play button
                tile.innerHTML = `
                    <img src="${videoThumbnail}" alt="${videoTitle} Thumbnail">
                    <h3>${videoTitle}</h3>
                    <a href="https://www.youtube.com/watch?v=${videoId}" target="_blank">Watch</a>
                `;

                // Append tile to container
                episodesContainer.appendChild(tile);
            });
        })
        .catch(error => console.error('Error fetching videos:', error));
}

