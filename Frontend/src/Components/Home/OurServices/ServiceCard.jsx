import React from 'react'


const ServiceCard = (props) => {
    const{Title,Description,Imgsrc} = props;
  return (
    <>
        <div className="d-flex pt-5 serviceCard">
            <div className="col-2">
            <div className='text-center ps-4'>
                <img src={Imgsrc} className='servicelogo' height={"55vh"} />
                </div>
            </div>
            <div className="col-1"></div>
       
            <div className="col-9">
                <h6>{Title}</h6>
                <p className='serviceParagraph'>{Description}</p>
            </div>
        </div>
    </>
  )
}

export default ServiceCard