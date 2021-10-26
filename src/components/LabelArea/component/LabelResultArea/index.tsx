import React, { Component } from 'react';
import type { LabelResultAreaProps, LabelResultAreaState } from './data';
import OCRResultArea from './components/OCRResultArea';
import ClassifyResultArea from './components/ClassifyResultArea';

class LabelResultArea extends Component<
  LabelResultAreaProps,
  LabelResultAreaState
> {
  render() {
    const { taskType, labelList } = this.props;
    return (() => {
      switch (taskType) {
        case 'OCR':
          return <OCRResultArea labelList={labelList} />;
        case 'Classify':
          return <ClassifyResultArea labelList={labelList} />;
      }
    })();
  }
}

export default LabelResultArea;
