/* eslint-disable @next/next/no-img-element */
import { useState } from 'react'
import { useView } from '@/helpers/useView'
import styles from './index.module.scss'
import Image from 'next/image'

interface DaImage {
   src: string
   alt: string
   className: string
}

interface FilledImage {
   width?: number
   height?: number
   fill: boolean
}

interface SizedImage {
   width: number
   height: number
   fill?: boolean
}

type LazyImage = DaImage & (FilledImage | SizedImage)

export default function LazyImage(prop: LazyImage) {
   const { src, alt, className, width, height, fill } = prop
   const [daRef, daVisible] = useView({ threshold: 0.1 })
   const [loaded, setLoaded] = useState(false)

   return (
      <div ref={daRef} className={styles.ImageWrapper}>
         {!loaded && <div className={styles.ImageSkeleton} />}

         {daVisible && (
            <Image
               src={src}
               alt={alt}
               width={width}
               height={height}
               fill={fill}
               loading="lazy"
               decoding="async"
               fetchPriority="low"
               className={`${className} ${styles.LazyImage} ${loaded ? styles.loaded : ''}`}
               onLoad={() => setLoaded(true)}
            />
         )}
      </div>
   )
}
