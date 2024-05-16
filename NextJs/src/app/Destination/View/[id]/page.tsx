'use client'
import { getDestinationById } from '@/app/Services/destination'
import { SingleAnimalProps } from '@/app/Utils/types'
import { useEffect, useState } from 'react'

const Page = ({ params }: { params: { id: string } }) => {
    

    const [destinationData, setDestinationData] = useState<SingleAnimalProps>()

    useEffect(() => {
        getDestinationById(params.id).then((res) => {
            setDestinationData(res)
            console.log(res)
        })
    }, [])

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-2 bg-white text-black">
            {destinationData && (
                <div>
                    <h1 className="my-8 text-center font-bold text-3xl ">
                        {destinationData.name}
                    </h1>

                    <img
                        src={destinationData.image}
                        className="object-contain w-screen max-h-96 rounded-md "
                    />
                    <div className="flex  items-center md:flex-col md:w-1/4 md:items-start  md:justify-center w-2/3 mx-auto mt-4 justify-around ">
                        <p className="my-1">
                            <span className="bg-black p-1 text-white  mr-4">
                                Arrival
                            </span>{' '}
                            {new Date(destinationData.arrival).toLocaleDateString(
                                'FR'
                            )}
                        </p>
                        <p className="my-1">
                            <span className="bg-black p-1 text-white  mr-4">
                                Departure
                            </span>
                            {new Date(destinationData.departure).toLocaleDateString(
                                'FR'
                            )}
                        </p>
                        <p className="my-1">
                            <span className="bg-black p-1 text-white  mr-4">
                                Category
                            </span>
                            {destinationData.category.name}
                        </p>
                        <p className="my-1">
                            <span className="bg-black p-1 text-white  mr-4">
                                Box
                            </span>
                            {destinationData.box.name}
                        </p>
                    </div>
               
                </div>
            )}
        </main>
    )
}

export default Page
