import React, { Component } from 'react';
import type { Position, SketchpadAreaProps, SketchpadAreaState } from './data';
import useImage from 'react-konva';

import {
  Stage,
  Line,
  Layer,
  RegularPolygon,
  Rect,
  Text,
  Circle,
  Image as KonvaImage,
} from 'react-konva';

class SketchpadArea extends Component<SketchpadAreaProps, SketchpadAreaState> {
  calRectPosition = (positionList: Position[]) => {
    return {
      x: 0,
      y: 0,
      width: 0,
      height: 0,
    };
  };
  calPolygonPosition = (positionList: Position[]) => {
    return [1, 2, 3, 4, 5, 6];
  };
  render() {
    const { currentImage, labelList } = this.props;
    // const url = "https://www.2008php.com/09_Website_appreciate/2010-11-27/20101127141549.jpg";
    const image = new Image();
    image.src = currentImage.src;
    return (
      <div>
        <KonvaImage image={image} />
        {labelList.map((labelItem, index, array) => {
          const { labelType, positionList } = labelItem;
          switch (labelType) {
            case 'rect':
              const { x, y, width, height } =
                this.calRectPosition(positionList);
              <Rect x={x} y={y} width={width} height={height} fill={'red'} />;
              break;
            case 'polygon':
              const pointList = this.calPolygonPosition(positionList);
              <Line points={pointList} closed={true} />;
              break;
          }
        })}
      </div>
    );
  }
}

export default SketchpadArea;
