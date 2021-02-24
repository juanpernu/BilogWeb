import React from 'react';
import Link from 'next/link';
import Icons from '../Icons/Icons';

const CardUser = ({ title, icon, url }) => {
    return (
        <>
            <Link href={url}>
                <div className="card" >
                    <div className="card-image">
                        <Icons type={icon} width={60} height={60} />
                    </div>
                    <h3 className="card-title">{title}</h3>
                    <div className="arrow">
                        <img src="../static/bilog-arrow-down.svg" />
                    </div>
                </div>
            </Link>
            <style jsx>
                {`
                    {/* STYLES FOR MOBILE */}
                    @media only screen and (max-width: 750px){
                        .card{
                            width: 90%;
                            height: 11em;
                            border-radius: 5px;
                            overflow: hidden;
                            padding: 0;
                            margin: 12px 7px;
                            border-bottom: 4px solid #009EE3;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
                            text-align: center;
                        }
                        
                        .card-image{
                            padding: 28px 0 0 ;
                        }
                        
                        .card-title {
                            height: 40px;
                            font-weight: 150;
                            font-size: 1em;
                            box-sizing: border-box;
                            padding-top: 1.2em;
                            margin: 0;
                            color: #333;
                        }

                        .arrow{
                            width: auto;
                            height: auto;
                            display: inline-flex;
                            position: relative;    
                        }
                            
                        .arrow img{
                            padding-top: 1em;
                            width: 15px;
                            height: 10px;
                        }
                            
                    }

                    {/* STYLES FOR DESKTOP */}
                    @media only screen and (min-width: 751px) {
                        .card{
                            width: 12em;
                            height: 11em;
                            border-radius: 5px;
                            overflow: hidden;
                            padding: 0;
                            margin: 12px 10px;
                            border-bottom: 4px solid #009EE3;
                            box-shadow: 0 10px 30px rgba(0, 0, 0, 0.12);
                            cursor: pointer;
                            background: #fff;
                        }

                        .card:hover{
                            transform: translate(0px, -7%);
                            transition: all .3s ease;
                        }
                        
                        .card-image{
                            height: 5em;
                            padding: 25px 0 0 0;
                        }

                        .card-title{
                            height: 30px;
                            font-weight: 150;
                            font-size: 1em;
                            box-sizing: border-box;
                            padding-top: 10px;
                            margin: 0;
                            color: #333333;
                        }

                        .arrow{
                            width: auto;
                            height: auto;
                            display: inline-flex;
                            position: relative;    
                        }
                        
                        .arrow img{
                            margin-top: 8px;
                            width: 15px;
                            height: 10px;
                        }          
                
                    }
                `}
            </style>
        </>
    )
}

export default CardUser;
