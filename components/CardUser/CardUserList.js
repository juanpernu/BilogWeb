import React from 'react';
import CardUser from './CardUser'
import { cardListData } from '../../mocks/cardUserData';

const ClassUserList = () => {
    return (
        <div className="container-class-user-list">
            {
                cardListData.map((cardListData, index) => <CardUser key={index} {...cardListData} />)
            }
            <style jsx>
                {`
            
            {/* STYLES FOR MOBILE */}
            @media only screen and (max-width:750px)  {
                .container-class-user-list {
                    display: flex;
                    justify-content: center;
                    width: 100%;
                    padding: 20px 0;
                    flex-wrap: wrap;            
                }
            }
            
            {/* STYLES FOR DESKTOP */}
            @media only screen and (min-width: 751px) {
                .container-class-user-list {
                height: 200px;
                display: flex;
                justify-content: center;
                text-align: center;
                flex-direction: row;
                align-self: center;
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
