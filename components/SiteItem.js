import React from 'react'
import Website from './Website'
import Youtube from './Youtube'


const SiteItem = ({list}) => {
  return (
    <div>
        {list.map(item => {
            return (
                <div key={item.id} className="mt-5 mb-5">
                <h2 id={item.id} className="text-white" >{item.title}</h2>
                {item.items.map((link, i) => {
                    return(
                        <div key={i}>
                        <h3 className='text-muted text-uppercase mt-4' >{link.title}</h3>
                        {link.type === 'youtube' ? 
                        link.list.map(site => <Youtube key={site} embed={site} />) : 
                        <Website list={link.list} />
                        }
                        </div>
                    )
                })}
                </div>
            )
        })}
    </div>
  )
}

export default SiteItem