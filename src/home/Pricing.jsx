import React from 'react';
function Pricing() {
    return ( 
        <div className='container'>
            <div className='row p-5 md-5'>
                <div className="col-6 p-5">
                    <h1 className="fs-2 mb-5">Unbeatable pricing</h1>
                    <h2 className="fs-4 mt-2">Customer-first always</h2>
                    <p className="text-muted">
                        We pioneered the concept of discount broking and price transparency <br /> in India. Flat fees and no hidden charges.
                    </p>
                </div>
                <div className='col-6 d-flex align-items-center'> 
                    <div className='d-flex flex-row align-items-center'>
                        <img src="public/zero.png" alt="" style={{width:"70%"}} /> 
                        <span className='text-muted' style={{fontSize:'70%'}}>Free account opening</span>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <img src="public/zero.png" alt="" style={{width:"70%"}} />
                        <span className='text-muted' style={{fontSize:'70%'}}>Free equity delivery <br /> and direct mutual funds</span>
                    </div>
                    <div className='d-flex flex-row align-items-center'>
                        <img src="public/20.png" alt="" style={{width:"70%"}} />
                        <span className='text-muted' style={{fontSize:'70%'}}> Intraday and <br />F&O</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Pricing;