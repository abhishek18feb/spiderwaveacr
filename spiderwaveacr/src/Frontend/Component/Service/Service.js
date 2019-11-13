import React from 'react';
import './Service.css';
const Service = () =>{
    // document.getElementById('left-button').onclick = function () {
    //     scrollLeft(document.getElementById('content'), -300, 1000);   
    // }
    
    // document.getElementById('right-button').onclick = function () {
    //     scrollLeft(document.getElementById('content'), 300, 1000);   
    // }
    const onClickLeft = () => {
        scrollLeft(document.getElementById('content'), -300, 1000);  
    }
    const onClickRight = () => {
        scrollLeft(document.getElementById('content'), 300, 1000); 
    }
         
    function scrollLeft(element, change, duration) { 
        var start = element.scrollLeft,
            currentTime = 0,
            increment = 20;
            
            console.log(start)
            
        var animateScroll = function(){        
            currentTime += increment;
            var val = Math.easeInOutQuad(currentTime, start, change, duration);
            element.scrollLeft = val;
            if(currentTime < duration) {
                setTimeout(animateScroll, increment);
            }
        };
        animateScroll();
    }
     
    //t = current time
    //b = start value
    //c = change in value
    //d = duration
    Math.easeInOutQuad = function (t, b, c, d) {
    t /= d/2;
        if (t < 1) return c/2*t*t + b;
        t--;
        return -c/2 * (t*(t-2) - 1) + b;
    };

    return (
        <React.Fragment>
            <div className="w3-container w3-padding-32" id="services">
                <h3 className="w3-border-bottom w3-border-light-grey w3-padding-16">Services</h3>
                <p>Lets get in touch and talk about your next project.</p>
                <div className="left">
                    <button className="left-button" onClick={onClickLeft}>
                        <i className="fas fa-arrow-left"></i>
                    </button>
                </div>
                <div className="center" id="content">
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                    <div className='internal'>
                        <div class="vertical-center">
                            <p>I am vertically centered.</p>
                        </div>
                    </div>
                </div>
                <div className="right">
                    <button className="right-button" onClick={onClickRight}>
                        <i className="fas fa-arrow-right"></i>
                    </button>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Service;