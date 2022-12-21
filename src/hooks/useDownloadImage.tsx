import { useEffect, useState } from 'react'
import { app } from '../configs/firebase'
import { getStorage, ref, getDownloadURL } from 'firebase/storage'
export const useDownloadImage = (fileNames: string[]) => {
  const storage = getStorage(app)
  const [imageUrl, setImageUrls] = useState<string[]>([])
  const [loading, setLoading] = useState<boolean>(true)
  useEffect(() => {
    fileNames.forEach((fileName) => {
      getDownloadURL(ref(storage, `images/${fileName}`)).then((url: string) => {
        setLoading(false)
        setImageUrls((p) => [...p, url])
      })
    })
  }, [])
  console.log(imageUrl)
  return { imageUrl, loading }
}
