export default function TimerCard({ time, tail}: { time: string,tail: string}) {
    return (<div className="timer-main-container">
        <div className="timer-card-container">
            <div className="timer-card">
                <p>{time}</p>
            </div>
            <div className="timer-divider"></div>
        </div>
        <p>{tail}</p>
    </div>)

}