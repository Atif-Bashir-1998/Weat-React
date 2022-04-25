import React from 'react'
import WeatherListItem from './WeatherListItem'

function WeatherList({listData}) {
  return (
    <div>
        {
            listData.map((item) => {
                return (
                    <WeatherListItem data={item} key={item.time_epoch} />
                )
            })
        }
    </div>
  )
}

export default WeatherList