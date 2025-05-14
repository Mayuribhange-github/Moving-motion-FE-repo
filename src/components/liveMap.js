// import React, { useEffect, useState } from "react";
// import { io } from "socket.io-client";
// import { MapContainer, TileLayer, Marker, Popup, Polyline } from "react-leaflet";
// import "leaflet/dist/leaflet.css";
// import L from "leaflet";

// // Custom Marker Icon
// const customIcon = new L.Icon({
//   iconUrl: "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
//   iconSize: [25, 41],
//   iconAnchor: [12, 41],
// });

// const socket = io("http://localhost:4000"); // WebSocket connection

// const LiveMap = () => {
//   const [position, setPosition] = useState({ lat: 28.7041, lng: 77.1025 }); // Default: Delhi
//   const [motionAction, setMotionAction] = useState("Stationary");
//   const [route, setRoute] = useState([]); // Stores movement path

//   useEffect(() => {
//     socket.on("connect", () => {
//       console.log("✅ WebSocket Connected");
//     });

//     // Receive motion actions
//     socket.on("motionAction", (data) => {
//       console.log("🛑 Motion Action:", data.recommendedAction);
//       setMotionAction(data.recommendedAction);
//     });

//     return () => socket.disconnect();
//   }, []);

//   // Track real-time GPS location
//   useEffect(() => {
//     if ("geolocation" in navigator) {
//       navigator.geolocation.watchPosition(
//         (pos) => {
//           const { latitude, longitude } = pos.coords;
//           const newPos = { lat: latitude, lng: longitude };
//           console.log("Current Location:", pos.coords.latitude, pos.coords.longitude);

//           setPosition(newPos); // Update position
//           setRoute((prevRoute) => [...prevRoute, newPos]); // Store route

//           // Send real GPS data via WebSocket
//           socket.emit("motionData", {
//             userId: "12345",
//             acceleration: { x: 0.02, y: 0.02, z: 0.02 },
//             gyro: { x: 0.005, y: 0.005, z: 0.002 },
//             location: newPos,
//           });
//         },
//         (error) => console.error("GPS Error:", error),
//         { enableHighAccuracy: true, maximumAge: 0 }
//       );
//     }
//   }, []);

// // // For dummy testing.

// // useEffect(() => {
// //     let counter = 0; // Mock movement counter

// //     const interval = setInterval(() => {
// //       counter += 0.0005; // Fake movement

// //       const fakeLocation = {
// //         lat: 28.7041 + counter, // Mock latitude change
// //         lng: 77.1025 + counter, // Mock longitude change
// //       };

// //       setPosition(fakeLocation);
// //       setRoute((prevRoute) => [...prevRoute, fakeLocation]);

// //       socket.emit("motionData", {
// //         userId: "12345",
// //         location: fakeLocation,
// //         acceleration: { x: 0.02, y: 0.02, z: 0.02 },
// //         gyro: { x: 0.005, y: 0.005, z: 0.002 },
// //       });

// //       console.log("📡 Fake GPS Update Sent:", fakeLocation);
// //     }, 3000); // Every 3 seconds

// //     return () => clearInterval(interval);
// //   }, []);

//   return (
//     <div>
//       <h2>📍 Live Tracking Map</h2>
//       <p><strong>Current Action:</strong> {motionAction}</p>

//       <MapContainer center={position} zoom={15} style={{ height: "500px", width: "100%" }}>
//         <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
//         <Marker position={position} icon={customIcon}>
//           <Popup>🚗 Moving: {motionAction}</Popup>
//         </Marker>
//         {route.length > 1 && <Polyline positions={route} color="blue" />}
//       </MapContainer>
//     </div>
//   );
// };

// export default LiveMap;

import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  Polyline,
} from "react-leaflet";
import "leaflet/dist/leaflet.css";
import axios from "axios";
import L from "leaflet";
import WebApi from "../Services/WebApi";
import WebService from "../Services/WebServices";

// Custom Marker Icon
const customIcon = new L.Icon({
  iconUrl:
    "https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png",
  iconSize: [25, 41],
  iconAnchor: [12, 41],
});

// WebSocket Connection
const socket = io("http://localhost:4000");

const LiveMap = () => {
  const [start, setStart] = useState(""); // Start location
  const [end, setEnd] = useState(""); // End location
  const [position, setPosition] = useState({ lat: 28.7041, lng: 77.1025 }); // Default: Delhi
  const [motionAction, setMotionAction] = useState("Stationary");
  const [route, setRoute] = useState([]); // Stores route points

  // Fetch Route Data from Backend
  const getRoute = async () => {
    if (!start || !end) return;
    try {
    //   let response = await WebService.getApi(
    //     `${WebApi.NAVIGATION}?start=${start}&end=${end}`
    //   );
      const response = await axios.get(`http://localhost:4000/motion/navigation?start=${start}&end=${end}`);
      console.log(response);
      setRoute(response.data.route); // Route from API
      setPosition(response.data.route[0]); // Set first point as starting position
    } catch (error) {
      console.error("Error fetching route:", error);
    }
  };

  useEffect(() => {
    socket.on("connect", () => console.log("✅ WebSocket Connected"));

    // Receive motion updates
    socket.on("motionAction", (data) => {
      console.log("🚗 Motion Action:", data.recommendedAction);
      setMotionAction(data.recommendedAction);
    });

    return () => socket.disconnect();
  }, []);

  // Simulate Movement Along Route
  useEffect(() => {
    if (route.length === 0) return;

    let index = 0;
    const interval = setInterval(() => {
      if (index < route.length) {
        setPosition(route[index]);
        socket.emit("motionData", {
          userId: "12345",
          location: route[index],
          acceleration: { x: 0.02, y: 0.02, z: 0.02 },
          gyro: { x: 0.005, y: 0.005, z: 0.002 },
        });
        index++;
      } else {
        clearInterval(interval);
      }
    }, 3000);

    return () => clearInterval(interval);
  }, [route]);

  return (
    <div>
      <h2>📍 Live Route Tracking</h2>
      <p>
        <strong>Current Action:</strong> {motionAction}
      </p>

      <input
        type="text"
        placeholder="Start Location"
        onChange={(e) => setStart(e.target.value)}
      />
      <input
        type="text"
        placeholder="End Location"
        onChange={(e) => setEnd(e.target.value)}
      />
      <button onClick={getRoute}>Get Route</button>

      <MapContainer
        center={position}
        zoom={15}
        style={{ height: "500px", width: "100%" }}
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position} icon={customIcon}>
          <Popup>🚗 Moving: {motionAction}</Popup>
        </Marker>
        {route.length > 1 && <Polyline positions={route} color="blue" />}
      </MapContainer>
    </div>
  );
};

export default LiveMap;
