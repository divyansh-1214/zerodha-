import React from "react";

function Hero() {
return (
    <div className="container">
        <div className="row p-5 mt-5 mb-5 justify-content-center">
            <div className="row -5 text-center" style={{ margin: '0 auto', fontSize: '10%', padding: '5rem 10rem' }}>
                <h1 className="fs-2">Charges</h1>
                <p className="text-muted p-2" style={{ fontSize: '1.5rem' }}>List of all charges and taxes</p>
            </div>
        </div>
        <div className="row justify-content-center" style={{ margin: '0 auto', padding: '10px 20px' }}>
            <div className="col-4 text-center" style={{ paddingLeft: '10px' }}>
                <img src="./public/zero.png" alt="" />
                <h1 className="fs-2 ">Free equity delivery</h1>
                <p className="text-muted p-2" style={{ fontSize: '1rem' }}>All equity delivery investments (NSE, BSE), are absolutely free — ₹ 0 brokerage.</p>
            </div>
            <div className="col-4 text-center ">
                <img src="./public/20.png" alt="" />
                <h1 className="fs-2">Intraday and F&O trades</h1>
                <p className="text-muted p-2 fs-6" style={{ fontSize: '1rem' }}>Flat ₹ 20 or 0.03% (whichever is lower) per executed order on intraday trades across equity, currency, and commodity trades. Flat ₹20 on all option trades.</p>
            </div>
            <div className="col-4 text-center">
                <img src="./public/zero.png" alt="" />
                <h1 className="fs-2">Free direct MF</h1>
                <p className="text-muted p-2" style={{ fontSize: '1rem' }}>All direct mutual fund investments are absolutely free — ₹ 0 commissions & DP charges.</p>
            </div>
        </div>
    </div>
);
}

export default Hero;