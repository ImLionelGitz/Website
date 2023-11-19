export default function cloudinaryLoader({ src }: GDriveLoader) {
  try {
    return new URL(src).href
  }
  catch(e) {
    return `https://res.cloudinary.com/dtcignhud/image/upload/v1700095152/${src}.webp`
  }
}