<script lang="ts">
  let videoElement: HTMLVideoElement;

  function playVideo() {
    videoElement.play();
  }

  function pauseVideo() {
    videoElement.pause();
  }
</script>

<style>
  .video-container {
    background-color: #2b2b2b; /* Dark background color */
    padding: 20px;
    border-radius: 10px; /* Rounded corners */
    display: flex;
    flex-direction: column;
    align-items: center;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1); /* Subtle shadow */
  }

  .video-controls {
    margin-top: 10px;
    display: flex;
    gap: 10px; /* Space between buttons */
  }

  button {
    padding: 10px 15px;
    background-color: #4a4a4a; /* Dark button color */
    color: #ffffff; /* White text color */
    border: none;
    border-radius: 5px; /* Rounded button corners */
    cursor: pointer;
    transition: background-color 0.3s ease; /* Smooth hover effect */
  }

  button:hover {
    background-color: #6a6a6a; /* Slightly lighter color on hover */
  }
</style>

<div class="video-container">
  <video bind:this={videoElement} width="640" height="360" controls>
    <source src="/videos/Lost%20Boy.mp4" type="video/mp4">
    Your browser does not support the video tag.
  </video>
  <div class="video-controls">
    <button on:click={playVideo}>Play</button>
    <button on:click={pauseVideo}>Pause</button>
  </div>
</div>
