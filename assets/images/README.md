# 📸 Images Directory

Add your team member images here.

## Required Images

Place these images in this folder:

### Melanie (2 images)
- `melanie-1.jpg` - Portrait photo 1
- `melanie-2.jpg` - Portrait photo 2

### Simone (2 images)
- `simone-1.jpg` - Portrait photo 1
- `simone-2.jpg` - Portrait photo 2

## Image Requirements

- **Format**: JPG or PNG
- **Size**: 500x500px or larger (will be cropped to fit)
- **Quality**: High resolution for web (72-96 DPI)
- **File size**: Optimize to <300KB per image for fast loading

## How to Optimize Images

### Using ImageMagick (command line):
```bash
convert input.jpg -resize 600x600 -quality 85 output.jpg
```

### Using online tools:
- [TinyPNG.com](https://tinypng.com) - Compress without quality loss
- [Squoosh](https://squoosh.app) - Compress and convert formats

## After Adding Images

1. Save images in this folder with exact filenames
2. Run: `git add assets/images/*`
3. Commit: `git commit -m "Add team member photos"`
4. Push: `git push`
5. Images will appear on the website automatically
