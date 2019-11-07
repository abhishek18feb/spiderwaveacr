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
            <div className="left">
                left div
                <button id="left-button" onClick={onClickLeft}>
                    swipe left
                </button>
                </div>
                <div className="center" id="content">
                    <div className='internal'>
                        div 1
                    </div>
                    <div className='internal'>
                        div 2
                    </div>
                    <div className='internal'>
                        div 3
                    </div>
                    <div className='internal'>
                        div 4
                    </div>
                    <div className='internal'>
                        div 5
                    </div>
                    <div className='internal'>
                        div 6
                    </div>
                    <div className='internal'>
                        div 7
                    </div>
                    <div className='internal'>
                        div 8
                    </div>
                </div>
                <div className="right">
                <button id="right-button" onClick={onClickRight}>
                    swipe right
                </button>
                right div
            </div>
        </React.Fragment>
    )
}

export default Service;