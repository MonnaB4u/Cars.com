import React, { useEffect, useState } from 'react';
import Data from './Data';
import LatestNew from './LatestNew';

const Latest = () => {
    const [data, setData] = useState(Data)
    console.log(data)
    return (
       <div className="container">
            <div className="row">
            {
        
                data.map( data=> <LatestNew data={data} ></LatestNew> )
                
            }
        </div>
       </div>
    );
};

export default Latest;