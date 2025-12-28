import { MyCodebase } from '@/helpers/enums'
import { RiNextjsFill } from 'react-icons/ri'
import {
   SiAndroidstudio,
   SiHaxe,
   SiRobloxstudio,
   SiUnity,
} from 'react-icons/si'

interface DaCode {
   codeType: number
}

export default function DaCode({ codeType }: DaCode) {
   switch (codeType) {
      case MyCodebase.UNITY:
         return <SiUnity />

      case MyCodebase.NEXT_JS:
         return <RiNextjsFill />

      case MyCodebase.HAXEFLIXEL:
         return <SiHaxe />

      case MyCodebase.ANDROID_STUDIO:
         return <SiAndroidstudio />

      case MyCodebase.ROBLOX_STUDIO:
         return <SiRobloxstudio />
   }
}
