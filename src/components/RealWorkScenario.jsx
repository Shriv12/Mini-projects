import React, { useEffect, useRef, useState } from 'react'
import '../css/RealWorkScenarios.css'
function RealWorkScenario() {
  const [expanded, setExpanded] = useState(false)
  const [showButton, setShowButton] = useState(true)
  const textRef = useRef()

  useEffect(() => {
    const el = textRef.current
    console.log('el', el );
    console.log('el.scrollHeight', el.scrollHeight );
    console.log('el.clientHeight', el.clientHeight );
    
    const check = () => {
      setShowButton(el.scrollHeight > el.clientHeight)
    }
    const observer = new ResizeObserver(check)
    console.log('observer', observer);
    
    observer.observe(el)
    console.log('observer.observe(el)', observer.observe(el));

    return () => observer.disconnect()

  }, [])
  return (
    <div>
        <div>
            <h1>Read more

            </h1>
            <div className='text-wrapper'>
                <p ref={textRef} className={expanded ? '' : 'clamp-3'}>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Dolore nam libero minima quisquam nulla ex molestiae odit nihil enim nobis esse illum rerum adipisci, ea corporis vitae inventore blanditiis. Quas?
                </p>
                {showButton && !expanded &&
                <button className='read-more' onClick={() => setExpanded(true)}>Read more ...</button>
                }
            </div>
        </div>
    </div>
  )
}

export default RealWorkScenario