import React from 'react';
import CardUser from './CardUser'

const CardListData = [
    {
        title:"Preguntas Frecuentes",
        img:"../../static/card-user-1.png",
        url:"/faqs",
        
    },
    {
        title:"Documentacion" ,
        img:"../../static/card-user-2.png",
        url:"/documents",
        
    },
    {
        title:"Testimonios",
        img:"../../static/card-user-3.png",
        url:"/testimony",
        
    },
    {
        title:"Contacto",
        img:"../../static/card-user-4.png",
        url:"/contact", 
    }
]
const ClassUserList = () => {
        
        return(
            <div className="container-class-user-list">
                {
                    CardListData.map((cardData, index)=><CardUser key={index} {...cardData}/>)
                }
            
        <style jsx>
        {`
        
        {/* STYLES FOR MOBILE */}
        @media only screen and (max-width:750px)  {
            .container-class-user-list {
                display:flex;
                justify-content: center;
                width:100%;
                padding: 20px 0;
                flex-wrap: wrap;            
            }
        }
        
        {/* STYLES FOR DESKTOP */}
        @media only screen and (min-width: 751px) {
            .container-class-user-list {
            height:200px;
            display:flex;
            justify-content: center;
            text-align:center;
            flex-direction:row;
            align-self:center;
            padding: 40px 0px;
            transform: translateY(-120px);   
            }
        }
        
        `}
        </style>

    </div>
    
    )
    
}

export default ClassUserList;
