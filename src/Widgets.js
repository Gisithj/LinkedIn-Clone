import React from 'react'
import './widgets.css'
import InfoIcon from '@material-ui/icons/Info';
import FiberManualRecordIcon from '@material-ui/icons/FiberManualRecord';

function Widgets() {

  const newsArticle = (heading,subtitle) =>(
    <div className='widget_article'>
        <div className='widget_articleLeft'>
            <FiberManualRecordIcon/>
        </div>
        <div className='widget_articleRight'>
            <h4>{heading}</h4>
            <p>{subtitle}</p>
        </div>
    </div>
  )  

  return (
    <div className='widgets'>
        <div className="widgets_header">
            <h2>LinkedIn News</h2>
            <InfoIcon/>
        </div>
        {newsArticle("Gisith is BACK","Breaking News")}
        {newsArticle("Gisith is BACK","Breaking News")}
        {newsArticle("Gisith is BACK","Breaking News")}
        {newsArticle("Gisith is BACK","Breaking News")}

    
    </div>
  )
}

export default Widgets