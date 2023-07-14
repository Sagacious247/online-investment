import React, { useEffect, useState } from 'react'
import './Packages.css'
import { collection, doc, getDoc, onSnapshot, orderBy, query } from 'firebase/firestore'
import { db } from '../firebaseConfig'
import Package from '../components/Package'
import { toast } from 'react-toastify'
import Loader from '../components/Loader'

function Packages() {
    const [collections, setCollections] = useState([])
   const [isLoading, setIsLoading] = useState(false)

    useEffect(() => {
      const fetchCollections = async () => {
        setIsLoading(true)
        try {
          const collectionRef = collection(db, 'collections')

          const q = query(collectionRef, )
          const querySnap = await getDoc(q)

          const collections = []

          querySnap.forEach((doc) => {
            return collections.push({
              id: doc.id,
              data: doc.data()
            })
          })
          setIsLoading(false)
          setCollections(collections)
        } catch(error) {
          setIsLoading(false)
          toast.error("Could not fetch collections")
        }
      }
      fetchCollections()
    }, [])
    
  return (
    <div className='packages'>
      <div className='container'>
       {isLoading && <Loader/>}
      <h1>Packages</h1>
      {collections.map((collection) => (
       <Package
        key={collection.id}
        header={collection.header}
         price={collection.price}
         firstPack={collection.firstPack}
         firstPackPrice={collection.firstPackPrice}
         secondPack={collection.secondPack}
         secondPackPrice={collection.secondPackPrice}
         thirdPack={collection.thirdPack}
         thirdPackPrice={collection.thirdPackPrice}
         fourthPack={collection.fourthPack}
         fourthPackPrice={collection.fourthPackPrice}
         bonusPack={collection.bonusPack}
         bonusPackPrice={collection.bonusPackPrice}
         duration={collection.duration}
         total={collection.total}
       /> 
      ))}
      </div>
       
    </div>
  )
}

export default Packages
