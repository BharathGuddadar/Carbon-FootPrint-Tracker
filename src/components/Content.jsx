import React from 'react'
import { Link } from 'react-router-dom'
const Content = () => {
  return (
    <>
    <div className="text " >
      <h1 className='heading'>CARBON FOOTPRINT TRACKER</h1>
      <p className='para'>A carbon footprint is the total amount of greenhouse gases (GHGs), specifically carbon dioxide (CO₂) and other carbon compounds, emitted directly or indirectly by an individual, organization, event, or product.</p>
      <button style={{height:"50px", marginLeft:" 100px"}}><span ><Link to={'/carbonfootprint'}>Calculator</Link></span></button>
    </div>
    <div className='content'>
    </div>
    <div className="images">
      <div className="imgs i1">
        <p id='p'>Renewable Energy Adoption<br></br>Transition from fossil fuels to renewable energy sources like solar, wind, and hydroelectric power. This significantly cuts carbon emissions and supports a sustainable energy infrastructure.</p>
      </div>
      <div className="imgs i2">
        <p id='p'>Energy Efficiency<br></br>Implement energy-efficient technologies in homes, industries, and transportation, such as LED lighting, smart appliances, and fuel-efficient vehicles. These reduce energy consumption and greenhouse gas emissions.</p>
      </div>
      <div className="imgs i3">
        <p id='p'>Sustainable Transportation<br></br>
        Promote the use of public transport, electric vehicles (EVs), and non-motorized options like cycling or walking. Sustainable transportation reduces reliance on fossil fuels and lowers air pollution</p>
      </div>
   
    </div>
    </>
  
  )
}

export default Content
