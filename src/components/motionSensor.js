import React, { useState, useEffect } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:4000");

const MotionSensor = () => {
    const [motionData, setMotionData] = useState({});
    const [action, setAction] = useState("Waiting for motion...");

    useEffect(() => {
        if (window.DeviceMotionEvent) {
            window.addEventListener("devicemotion", handleMotion, true);
        }
        return () => {
            window.removeEventListener("devicemotion", handleMotion);
        };
    }, []);

    const handleMotion = (event) => {
        const { x, y, z } = event.accelerationIncludingGravity;
        const gyroX = event.rotationRate?.alpha || 0;
        const gyroY = event.rotationRate?.beta || 0;
        const gyroZ = event.rotationRate?.gamma || 0;

        const motionPayload = { acceleration: { x, y, z }, gyro: { x: gyroX, y: gyroY, z: gyroZ } };
        setMotionData(motionPayload);

        // Send motion data to backend in real-time
        socket.emit("motionData", motionPayload);
    };

    // Listen for motion recommendations from the backend
    useEffect(() => {
        socket.on("motionAction", (data) => {
            setAction(data.recommendedAction);
        });
    }, []);

    return (
        <div className="container text-center mt-5">
            <h2>Motion-Based Navigation</h2>
            <p>{action}</p>
        </div>
    );
};

export default MotionSensor;
