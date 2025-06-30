// Get the video element by its ID 'videoPlayer'
const video = document.getElementById('videoPlayer');

// Get the play/pause button element by its ID 'playPauseBtn'
const playPauseBtn = document.getElementById('playPauseBtn');

// Add a click event listener to the play/pause button
playPauseBtn.addEventListener('click', () => {
  // Check if the video is currently paused
  if (video.paused) {
    // If paused, play the video
    video.play();
    // Update button text to 'Pause'
    playPauseBtn.textContent = 'Pause';
  } else {
    // If playing, pause the video
    video.pause();
    // Update button text to 'Play'
    playPauseBtn.textContent = 'Play';
  }
});

const stopBtn = document.getElementById('stopBtn');
// Add a click event listener to the stop button
stopBtn.addEventListener('click', () => {
  // Stop the video by pausing it and resetting the current time to 0
  video.pause();
  video.currentTime = 0;
  // Update button text to 'Play'
  playPauseBtn.textContent = 'Play';
});

const muteBtn = document.getElementById('muteBtn');
// Add a click event listener to the mute button    
muteBtn.addEventListener('click', () => {
  // Toggle the muted state of the video
  video.muted = !video.muted;
  // Update button text based on muted state
  muteBtn.textContent = video.muted ? 'Unmute' : 'Mute';
});
// ... existing video and button code ...

// Create time display element
const timeDisplay = document.createElement('div');
timeDisplay.id = 'timeDisplay';
document.body.appendChild(timeDisplay); // Add to DOM (adjust placement as needed)

// Function to format time (seconds to MM:SS)
function formatTime(seconds) {
  const minutes = Math.floor(seconds / 60);
  const secs = Math.floor(seconds % 60);
  return `${minutes}:${secs < 10 ? '0' : ''}${secs}`;
}

// Update time display function
function updateTimeDisplay() {
  timeDisplay.textContent = `${formatTime(video.currentTime)} / ${formatTime(video.duration)}`;
}

// Initial update when metadata loads (duration available)
video.addEventListener('loadedmetadata', updateTimeDisplay);

// Update during playback
video.addEventListener('timeupdate', updateTimeDisplay);

// Also update when seeking
video.addEventListener('seeked', updateTimeDisplay);