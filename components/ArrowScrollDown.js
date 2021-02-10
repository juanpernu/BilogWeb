const ArrowScrollDown = ({ src }) => {
    return (
        <div className="arrow-container">
            <img src={src} className="animated bounce" />
            <style jsx>
                {`
                    {/* STYLES FOR MOBILE */}
                    @media only screen and (max-width: 750px) {
                        .arrow-container {
                            height: 100%;
                            width: 100%;
                            text-align: center;
                        }
                        img {
                            height: 50px;
                            width: auto;
                        }
                        .arrow-container img {
                            line-height: 60px;
                            left: 50%;
                            bottom: 0px;
                        }
                        .bounce {
                            animation-iteration-count: infinite;
                            animation-duration: 1.5s;
                            animation: bounce 3.6s ease infinite;
                            transform-origin: 50% 50%;
                        }
                        @keyframes bounce {
                            0% {
                            transform: translateY(0);
                            }
                            5.55556% {
                            transform: translateY(0);
                            }
                            11.11111% {
                            transform: translateY(0);
                            }
                            22.22222% {
                            transform: translateY(-15px);
                            }
                            27.77778% {
                            transform: translateY(0);
                            }
                            33.33333% {
                            transform: translateY(-15px);
                            }
                            44.44444% {
                            transform: translateY(0);
                            }
                            100% {
                            transform: translateY(0);
                            }
                        }
                    }

                    {/* STYLES FOR DESKTOP */}
                    @media only screen and (min-width: 751px) {             
                        .arrow-container {
                            height: 100%;
                            width: 100%;
                            text-align: center;
                        }
                        img {
                            height: 50px;
                            width: auto;
                        }
                        .arrow-container img {
                            line-height: 60px;
                            position: relative;
                            left: 50%;
                            bottom: 0px;
                        }
                        .bounce {
                            animation-iteration-count: infinite;
                            animation-duration: 1.5s;
                            animation: bounce 3.6s ease infinite;
                            transform-origin: 50% 50%;
                        }
                        @keyframes bounce {
                            0% {
                            transform: translateY(0);
                            }
                            5.55556% {
                            transform: translateY(0);
                            }
                            11.11111% {
                            transform: translateY(0);
                            }
                            22.22222% {
                            transform: translateY(-15px);
                            }
                            27.77778% {
                            transform: translateY(0);
                            }
                            33.33333% {
                            transform: translateY(-15px);
                            }
                            44.44444% {
                            transform: translateY(0);
                            }
                            100% {
                            transform: translateY(0);
                            }
                        }
                    }
                `}
            </style>
        </div>
    )
}

export default ArrowScrollDown