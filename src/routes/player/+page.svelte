<script lang="ts">
  import { onMount } from 'svelte';

  let container: HTMLElement;
  let song: HTMLAudioElement;
  let isPlaying = false;
  let isHolding = false;
  let holdTimer: ReturnType<typeof setTimeout>;

  onMount(() => {
    if (typeof window === 'undefined' || !container) return;

    song = new Audio('/audios/sunset.mp3');

    container.addEventListener('mousedown', () => {
      container.style.transform = 'scale(0.9)';
      holdTimer = setTimeout(() => {
        isHolding = true;
        song.pause();
        song.currentTime = 0;
      }, 500);
    });

    container.addEventListener('mouseup', () => {
      container.style.transform = '';
      clearTimeout(holdTimer);
      if (!isHolding) { // Only toggle playback if the button was not held
        if (isPlaying) {
          song.pause();
        } else {
          song.play();
        }
        isPlaying = !isPlaying;
      }
      isHolding = false; // Always reset the holding flag
    });
  });
</script>

<div class="flex justify-center items-center h-screen bg-gray-200 container-bg">
  <div
    bind:this={container}
    class="bg-gradient-to-r from-blue-400 via-purple-500 to-red-500 w-64 h-64 rounded-full flex items-center justify-center text-white text-2xl font-bold shadow-2xl transition-transform duration-150 ease-in-out cursor-pointer"
  >
    <span style="text-shadow: 2px 2px 4px rgba(0, 0, 0, 0.7);">Sunset</span>
  </div>
</div>

<style>
  .container-bg {
    background-image: url('/sunset.jpg');
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
  }
</style>
