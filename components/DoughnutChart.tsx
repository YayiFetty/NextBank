import React from 'react'
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";


ChartJS.register(ArcElement, Tooltip, Legend);

export default function DoughnutChart({accounts}: DoughnutChartProps) {
    const data = {
        datasets:[
            {
                label:'Banks',
                data:[1250, 2500, 3750,4500],
                backgroundColor:["#0747b6", "#2265d8", "#2f91fa"," #BED9FF"]
            }
        ],
        
        labels:['Bank 1' , "Bank2", "Bank3"]
    }
    
  return ( 
    <div>
        <Doughnut data={data} 
        options = {{
        cutout:"55%",
        
        plugins:{
            legend:{
                display:false
            }
        }
    }}
    width={98} // Set the width to 150
    height={98} // Set the height to 150
    />
    
    </div>
  )
}


