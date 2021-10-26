export type OCRResultAreaProps = {
  labelList: object[];
  taskType: string;
};

export type OCRResultAreaState = {
  childIsShow: boolean;
  labelIndex: 0;
  positionX: 0;
  positionY: 0;
};
