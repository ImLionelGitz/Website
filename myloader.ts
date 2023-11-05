export default function GDriveLoader({ src }: GDriveLoader) {
  try {
    return new URL(src).href
  }
  catch(e) {
    return `https://drive.google.com/uc?id=${src}`
  }
}