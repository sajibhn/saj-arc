import React, { useState } from 'react'
import CountUp from 'react-countup';
import VisibilitySensor from 'react-visibility-sensor';
import { completedData } from '../../../data/completedData';

const CompletedContent = () => {

    const [datas, setDatas] = useState(completedData);

    return (
        <div className="completed__content grid">
            {/* <div className="completed__content__data">
                <h3>57</h3>
                <h4>Web development</h4>
            </div>
            <div className="completed__content__data">
                <h3>26</h3>
                <h4>Web development</h4>
            </div>
            <div className="completed__content__data">
                <h3>42</h3>
                <h4>Web development</h4>
            </div>
            <div className="completed__content__data">
                <h3>38</h3>
                <h4>Web development</h4>
            </div> */}
            <VisibilitySensor partialVisibility >
                {({ isVisible }) => (
                    datas.map((data) => {
                        return (
                            <div className="completed__content__data" key={data.id}>
                                <h3>{isVisible ? <CountUp end={data.number} /> : null}</h3>
                                <h4>{data.title}</h4>
                            </div>
                        )
                    })
                )}
            </VisibilitySensor>
        </div>
    )
}

export default CompletedContent