import React from 'react'
import "./3dModel.css"

import { OBJModel, DirectionLight } from "react-3d-viewer";

export default function App() {
  return (
    <div className="App">
      <div style={{ margin: "auto" }}>
        <OBJModel
          width="800"
          height="800"
          position={{ x: 0, y: 0, z: 0 }}
          src="../images/LEATHERSOFA-2019-obj.obj"
          // "https://dwqdaiwenqi.github.io/react-3d-viewer/site/src/lib/model/freedom.obj"
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