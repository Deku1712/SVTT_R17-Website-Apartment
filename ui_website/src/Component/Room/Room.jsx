import React from 'react'

export default function Room(props) {
    const room = props.room
    return (
        <div className=' w-full border rounded-md h-[250px] bg-green-400 shadow-lg '>
            <h5 class="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{room.room_name}</h5>

            <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                Type: {room.type}
            </p>
            <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                Price of Room: {room.priceOfRoom}
            </p>
            <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                Size: {room.sizeOfRoom}
            </p>
            <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                active: {room.active}
            </p>
            <p class="mb-0 p-2 font-normal text-white dark:text-gray-400">
                Renter:
            </p>

            <div>

            </div>

        </div>
    )
}
