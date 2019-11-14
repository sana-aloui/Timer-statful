import React, { Component } from "react";

class Time extends Component {
	constructor(props) {
		super(props);
		this.state = {
			timerStarted: false,
			//   timerStopped: true,
			hours: 0,
			minutes: 0,
			seconds: 0
		};
	}

	handleTimerStart(e) {
		e.preventDefault();
		if (!this.state.timerStarted) {
			this.setState({ timerStarted: !this.state.timerStarted });
			this.timer = setInterval(() => {
				if (this.state.timerStarted) {
					if (this.state.seconds >= 60) {
						this.setState(prevState => ({
							minutes: prevState.minutes + 1,
							seconds: 0
						}));
					}
					if (this.state.minutes >= 60) {
						this.setState(prevState => ({
							hours: prevState.hours + 1,
							minutes: 0,
							seconds: 0
						}));
					}
					this.setState(prevState => ({ seconds: prevState.seconds + 1 }));
				}
			}, 1000);
		} else {
			clearInterval(this.timer);
		}
	}
	//   handleTimerStop(e) {
	//     e.preventDefault();
	//     this.setState({ timerStarted: false, timerStopped: true });

	//   }

	handleTimerReset() {
		this.setState({
			timerStarted: false,
			//   timerStopped: true,
			seconds: 0,
			minutes: 0,
			hours: 0
		});
		clearInterval(this.timer);
	}

	render() {
		return (
			<div className="container">
				    <div className="full-timer-container">
                        <div className="value">
                            <span>{String(this.state.hours).padStart(2, "0")}:</span>
                            <span>{String(this.state.minutes).padStart(2, "0")}:</span>
                            <span>{String(this.state.seconds).padStart(2, "0")}</span>
                        </div>
                        <div className="name">
                            <p> Hour </p>
                            <p> Minute </p>
                            <p> Second </p>

                        </div>
                    </div>
                        
					{/* {this.state.hours + ":" + this.state.minutes + ":" + this.state.seconds} */}

					<div className="timer-controls">
						<button
							className="btn btn-start "
							onClick={this.handleTimerStart.bind(this)}>
							{!this.state.timerStarted ? "Start" : "Stop"}
						</button>
						<button
							className="btn  btn-reset"
							onClick={this.handleTimerReset.bind(this)}>
							Reset
						</button>
					</div>
			</div>
			
		);
	}
}
export default Time;
