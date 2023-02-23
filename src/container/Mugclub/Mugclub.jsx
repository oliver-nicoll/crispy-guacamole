import React from 'react'
import { SubHeading, MenuItem } from '../../components'
import { images, data } from '../../constants'
import './Mugclub.css'

const MugClubCard = ({mugClubInfo: { imgUrl, title, subtitle }}) => (
    <div className="app__mugclub-card">
        <img src={imgUrl} alt="mugClubInfo" />
        <div className="app__mugclub-card_content">
            <p className="p__cormorant" style={{color: '#DCCA87'}}>{title}</p>
            <p className="p__cormorant">{subtitle}</p>
        </div>

    </div>
)

const Mugclub = () => {
  return (
    <div className='app__mugclub app__wrapper section__padding' id='mugclub'>
        
        <div className="app__wrapper_img app__wrapper_img-reverse">
            <img src={images.mug} alt="mugclub_pic" />
        </div>

        <div className="app__wrapper_info">
            <SubHeading title="Year: 2023 | Only 50 Available" />
            <h1 className='headtext__cormorant'>Mug Club</h1>

            <div className="app__mugclub_info">
                {data.mugClubInfo.map((mugClubInfo) => <MugClubCard mugClubInfo={mugClubInfo} key={mugClubInfo.title} />)}
            </div>
            <div className="button__mugclub">
                <a href="https://forms.gle/1qpiaqdAaqTZaYNHA" target='_blank'> <button className='custom__button'>Sign Up!</button></a>
            </div>
        </div>

    </div>
  )
}

export default Mugclub