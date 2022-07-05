import React from 'react'
import Pizza from '../../components/Pizzas/Pizza';
import Video from '../Video';
import { useState } from 'react';
const Hompage = ({ allData }) => {

    return (
        <div>
            <Video />
            <div style={{display: 'flex', flexWrap: 'wrap'}}>
                {allData.map(item => (
                    <Pizza item={item} />
                ))}
            </div>
        </div>
    )
}

export default Hompage