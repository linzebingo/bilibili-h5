<template>
    <div>
        <video
            id="video-player"
            class="video-js"
            controls
            preload="auto"
            data-setup='{}'>
            <source :src="video_url" type="video/mp4"></source>
            <p class="vjs-no-js">
                To view this video please enable JavaScript, and consider upgrading to a
                web browser that
                <a href="http://videojs.com/html5-video-support/" target="_blank">supports HTML5 video </a>
            </p>
        </video>
    </div>
</template>

<script lang="ts" src="./video.ts"></script>