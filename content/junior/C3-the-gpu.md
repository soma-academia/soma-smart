---
id: j-gpu
track: junior
code: C3
name: The GPU
part: The Graphics Chip
cbe: nice
strand:
video:
video_title:
video_channel:
---

# C3 · The GPU

## Read

### 🔺 Built from triangles

Everything in a 3D game or 3D map is built from many small triangles. The GPU's job is to place all those triangles and colour them, extremely fast.

### 🎨 Painting pixels

Your screen is made of tiny dots called pixels. A Full HD screen has about 2 million; a 4K screen has about four times as many — that's why 4K is heavier work.

### 🐜 Many small workers

A GPU has thousands of tiny cores that each colour a few pixels at the same time. Doing many small jobs in parallel is what makes graphics fast.

### 💡 Shading and light

Small programs called shaders add light, shadow and shine. Some GPUs do ray tracing — following how light really bounces — for realistic reflections, but it is heavy work.

### 🔍 Upscaling tricks

Techniques like DLSS/FSR render a smaller image then cleverly enlarge it, giving more frames per second for less work. Beyond games, GPUs also speed up video editing and AI.

## Listen

- The GPU draws what you see on the screen.
- 3D scenes are built from many small triangles.
- The screen is made of pixels; 4K has about four times as many as Full HD.
- A GPU has thousands of tiny cores colouring pixels at the same time.
- Doing many small jobs at once is what makes graphics fast.
- Shaders add light and shadow; ray tracing follows real light — heavy work.
- GPUs also speed up video editing and AI, not just games.

## Mission: Resolution test

- Open the display settings and note the screen resolution (e.g. 1920x1080).
- If you can, play a video or game and note how smooth it feels.
- Lower the resolution one step and see if it feels smoother. Put it back after.

Question: Your screen resolution and whether lowering it felt smoother.

## Quiz

### 3D scenes are built from many...
- [x] Triangles
- [ ] Circles
- [ ] Straight lines only
- [ ] Letters and numbers
Why: 3D models are made of many small, flat triangles joined together; the GPU places them and works out how to colour them.

### The tiny dots on a screen are called...
- [x] Pixels
- [ ] Cores
- [ ] Triangles
- [ ] Frames
Why: A screen is a grid of pixels; each one shows a single colour, and together they make up the whole picture.

### A 4K screen has about how many times the pixels of Full HD?
- [x] 4 times
- [ ] 2 times
- [ ] The same number
- [ ] 10 times
Why: Full HD is 1920 × 1080 and 4K is 3840 × 2160: double the width and double the height gives four times the pixels.

### A GPU is fast because it...
- [x] Does many small jobs at the same time
- [ ] Has one very powerful worker for each job
- [ ] Runs at a much higher GHz than the CPU
- [ ] Stores the whole game inside its own chip
Why: A GPU has thousands of small cores working in parallel, which suits graphics, where millions of pixels need similar maths.

### Ray tracing follows...
- [x] How light really bounces
- [ ] The path of the mouse pointer
- [ ] How sound moves around a room
- [ ] The edges of each triangle only
Why: Ray tracing follows rays of light as they bounce off surfaces, which gives realistic reflections, shadows and lighting.

### DLSS/FSR give more FPS by...
- [x] Rendering smaller, then enlarging it cleverly
- [ ] Adding extra VRAM to the graphics card
- [ ] Switching off every shadow in the game
- [ ] Lowering the screen's refresh rate to 30 Hz
Why: The GPU draws each frame at a lower resolution, which is less work, then upscales it smartly so it still looks sharp.

### Besides games, GPUs also speed up...
- [x] Video editing and AI
- [ ] Saving files to the disk
- [ ] Charging the laptop battery
- [ ] Connecting to Wi-Fi networks
Why: Video editing and AI both need huge amounts of similar maths done at once, which is exactly what a GPU's parallel cores do well.

### Why are GPUs much better than CPUs at training AI models and processing 3D graphics?
- [x] They have thousands of cores built for parallel maths
- [ ] They have a few very fast cores for one task at a time
- [ ] They store all the data on their own hard disk
- [ ] They run at a higher clock speed than any CPU
Why: AI and 3D graphics break into millions of small, similar calculations that thousands of GPU cores can work on at once.

### The dedicated high-speed memory on a graphics card is called...
- [x] VRAM
- [ ] SSD
- [ ] BIOS
- [ ] Flash drive
Why: VRAM (video RAM) sits on the graphics card next to the GPU and holds textures, frames and models for quick access.

### Ray tracing simulates graphics by...
- [x] Calculating the path of light rays as they bounce
- [ ] Stretching a smaller image to fill the screen
- [ ] Drawing the scene with flat 2D lines only
- [ ] Lowering the resolution to raise the frame rate
Why: By following rays of light between the scene and the camera, the GPU can show how light reflects and casts shadows, as in real life.
