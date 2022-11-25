import React, { Component } from 'react';
import Clock from 'react-live-clock';
import '../Nav.css';

class LiveClockTest extends Component {
  render() {
    return (
      <div>
        {/* format 부분에서 원하는 날짜 형식으로 변경 가능, 타임존 변경 가능*/}
        <Clock
          className="nav__clock2"
          format={'HH:mm:ss'}
          ticking={true}
          timezone={'US/Pacific'}
        />
      </div>
    );
  }
}

export default LiveClockTest;
