import React from 'react';
import { Carousel } from 'antd';

const contentStyle: React.CSSProperties = {
    width: '100%',
    height: '600px',
    objectFit: 'cover',
};

const App: React.FC = () => (
  <Carousel autoplay>
    <div>
      <img src="/Imagenes/Space/potw2525a.webp" alt="ImgSpace1" style={contentStyle} />
    </div>
    <div>
      <img src="/Imagenes/Space/iss067e035826orig.webp" alt="ImgSpace2" style={contentStyle} />
    </div>
    <div>
      <img src="/Imagenes/Space/dsc09386orig.webp" alt="ImgSpace3" style={contentStyle} />
    </div>
    <div>
        <img src="/Imagenes/Space/1-themis-views-mars-arsia-mons-volcano-crop1-c27fa8.webp" alt="ImgSpace4" style={contentStyle} />
    </div>
  </Carousel>
);

export default App;