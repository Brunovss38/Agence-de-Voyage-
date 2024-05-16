'use client'
import React, { useEffect, useState } from 'react'
import { getAllDestinations } from '../Services/destination'
import { useRouter } from 'next/navigation'

const   Destination = () => {
    const [destinationsList, setDestinationList] = useState([])
    const [isReloadNeeded, setIsReloadNeeded] = useState(false)

    const { push } = useRouter()

    useEffect(() => {
        getAllDestinations().then((res: any) => {
            setDestinationList(res.data)
            setIsReloadNeeded(false)
        })
    }, [isReloadNeeded])
   
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white">
            <div className="flex items-center flex-wrap w-5/6 my-4">
                {destinationsList &&
                    destinationsList.map((destination: any) => {
                        return (
                            <div
                                key={destination.id}
                                className="m-6 w-80  h-96     rounded-md bg-blue-950 text-white"
                            >
                                <img
                                    src={destination.image}
                                    className=" w-full  h-48 object-cover rounded-t-md cursor-pointer"
                                    onClick={() => {
                                        push(`/destination/view/${destination.id}`)
                                    }}
                                />
                                <h3 className="text-center py-1">
                                    {destination.name}
                                </h3>
                                <p className="text-center py-1">
                                    Box numéro {destination.box.name}
                                </p>
                                {/* <p className="text-center py-1">
                                    {destination.category.name}
                                </p>
                                <p className="text-center py-1">
                                    {destination.user.name}
                                </p> */}
                        
                            </div>
                        )
                    })}
            </div>
        </main>
    )
}

export default Destination
