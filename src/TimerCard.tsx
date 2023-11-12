export default function TimerCard({ time, tail, isAnimated }: { time: string, tail: string, isAnimated: boolean }) {
    return  <div className="timer-main-container"> <div className="time-container">
        <div className="time-container-main">
            <p>{time}</p>
            <div className={`time-content time-content--lhs ${isAnimated? "folding-animation" : ""}`}>
                <p>{time}</p>
            </div>
            <div className="time-content time-content--rhs" aria-hidden="true">
                <p>{time}</p>
            </div>
        </div>

    </div>
    <p>{tail}</p>
    </div>

    // (<div className="timer-main-container">
    //     <div classNameName="timer-card-container">
    //         <div classNameName="timer-card">
    //             <p>{time}</p>
    //         </div>
    //         <div classNameName="timer-divider"></div>
    //     </div>
    //     <p>{tail}</p>
    // </div>)

}