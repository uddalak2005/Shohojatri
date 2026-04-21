# About Section Video

Place your video file here as:

```
public/about-video.mp4
```

## Requirements
- Format: MP4 (H.264), or also provide a `.webm` fallback for best browser support
- Recommended resolution: 1280×960 (4:3 aspect ratio) or 960×720
- Keep file size under 10 MB for a good first load experience
- The video will loop automatically

## How it works
- The `AboutUs` component uses an `IntersectionObserver` (threshold: 35% visibility)
- When the About section scrolls into view → video plays (with audio; falls back to muted if browser policy blocks autoplay with sound)
- When it scrolls out of view → video pauses automatically
