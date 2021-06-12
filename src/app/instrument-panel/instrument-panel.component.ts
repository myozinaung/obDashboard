import { Component, OnInit } from '@angular/core';
import 'openbridge-web-components';

@Component({
  selector: 'app-instrument-panel',
  templateUrl: './instrument-panel.component.html',
  styleUrls: ['./instrument-panel.component.scss'],
})
export class InstrumentPanelComponent implements OnInit {
  time = 0;

  constructor() {
    setInterval(
      // call the function every specified time interval
      () => {
        this.time += 0.01;

        this.hdgUpdate();
        this.rudderUpdate();
        this.azimuthUpdate();
        this.updateRollPitch();
        this.updateRot();
        this.updateMainEngine();
        this.updateTunnelThruster();
        this.updateSpeedometer();

        this.resetTime();
      },
      10 // milisecond
    );
  }

  ngOnInit() {}

  resetTime() {
    if (this.time > 60) {
      this.time = 0;
    }
  }

  // HDG
  hdgHeading = 60;
  hdgCourseOverGround = 30;
  hdgNorthUp = true;

  hdgUpdate() {
    this.hdgHeading = 120 * Math.sin(this.time);
    this.hdgCourseOverGround = 90 * Math.sin(this.time);
  }

  // RUDDER
  rudderAngle = 25;
  rudderSetPointAngle = 35;
  rudderClipAngle = 60;
  rudderShowPortStarboard = true;
  rudderShowSetPoint = true;

  rudderUpdate() {
    this.rudderAngle = 60 * Math.sin(0.95 * this.time);
    this.rudderSetPointAngle = 60 * Math.sin(this.time);
  }

  // AZIMUTH
  azimuthAngle = 60;
  azimuthTargetAngle = 45;
  azimuthValue = 60;
  azimuthTarget = 60;
  azimuthShowSetPointAngle = this.azimuthAngle !== this.azimuthTargetAngle;
  azimuthShowSetPointValue = this.azimuthValue !== this.azimuthTarget;
  azimuthShowPortStarboard = true;
  azimuthThrusterWidth = 'REGULAR';

  azimuthUpdate() {
    if (this.time < 10) {
      this.azimuthAngle = 25 + 2 * this.time;
      this.azimuthValue = 10;
      this.azimuthTarget = 10;
    } else if (this.time < 20) {
      this.azimuthValue = 10 + 2 * (this.time - 10);
    } else if (this.time < 30) {
      this.azimuthAngle = 25 + 2 * (30 - this.time);
      this.azimuthTargetAngle = 25;
      this.azimuthValue = 60;
      this.azimuthTarget = 60;
    } else if (this.time < 40) {
      this.azimuthAngle = 25;
      this.azimuthTargetAngle = 25;
      this.azimuthValue = 10 + 5 * (40 - this.time);
      this.azimuthTarget = 10;
    }
  }

  // ROLL & PITCH
  pitch = 1;
  lowerPitch = -6;
  upperPitch = 6;
  roll = 4;
  lowerRoll = -6;
  upperRoll = 6;
  pitchRollScale = 5;

  updateRollPitch() {
    this.pitch = 2 * Math.sin(0.5 * this.time);
    this.roll = 5 * Math.sin(this.time);
  }

  // ROT
  rateOfTurn = 0;

  updateRot() {
    this.rateOfTurn = 40 * Math.sin(this.time);
  }

  // MAIN ENGINE
  mainEngineTarget = 50;
  mainEngineValue = 50;
  mainEngineShowSetPoint = true;

  updateMainEngine() {
    this.mainEngineTarget = 90 * Math.sin(this.time);
    this.mainEngineValue = 90 * Math.sin(0.95 * this.time);
  }

  // TUNNEL THRUSTER
  tunnelThrusterTarget = 50;
  tunnelThrusterValue = 50;
  tunnelThrusterShowSetPoint = true;
  tunnelThrusterWidth = 'REGULAR';

  updateTunnelThruster() {
    this.tunnelThrusterTarget = 90 * Math.sin(this.time);
    this.tunnelThrusterValue = 90 * Math.sin(0.95 * this.time);
  }

  // ROT
  speedometerValue = 0;

  updateSpeedometer() {
    this.speedometerValue = 10 * Math.sin(this.time) + 5;
  }
}
