type ImageItem = {
  src: string;
};

export type Position = {
  x: number;
  y: number;
};

type LabelItem = {
  labelType: string;
  positionList: Position[];
};

export type SketchpadAreaProps = {
  currentImage: ImageItem;
  labelList: LabelItem[];
};

export type SketchpadAreaState = {};
