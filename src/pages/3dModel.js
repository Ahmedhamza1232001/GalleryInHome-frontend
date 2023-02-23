import React from 'react'
import "./3dModel.css"

import { OBJModel, DirectionLight } from "react-3d-viewer";


export default function App() {
  return (
    <div className="App">
      <div style={{ margin: "auto" }}>
        <OBJModel
          width="1600"
          height="800"
          position={{ x: 0, y: -40, z: 0 }}
          rotation={{ x:.2 , y:0 , z:0 }}
          enableKeys={true}
          enableZoom={false}
          src="../images/LEATHERSOFA-2019-obj.obj"

          onLoad={() => {
            console.log("Loading");
          }}
          onProgress={(xhr) => {
            console.log("Loaded");
          }}
        >
          <DirectionLight           
            className="canv_1"
            color={0x800000} />
          <DirectionLight
            className="canv_1"
            position={{ x: 180, y: 100, z: 100 }}
            color={0x800000}
          />
        </OBJModel>
      </div>
    </div>
  );

}