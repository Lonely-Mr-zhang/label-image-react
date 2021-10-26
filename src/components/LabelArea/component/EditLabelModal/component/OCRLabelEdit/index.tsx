import React, { Component } from 'react';
import type { OCRLabelEditProps, OCRLabelEditState } from './data';

import style from './index.less';
import { Button, Input } from 'antd';

const { TextArea } = Input;

class OCRLabelEdit extends Component<OCRLabelEditProps, OCRLabelEditState> {
  ocrTextOnChange = (e: any) => {
    const { value } = e.target;
    this.setState({
      ocrText: value,
    });
  };

  classifyTextOnChange = (e: any) => {
    const { value } = e.target;
    this.setState({
      classifyText: value,
    });
  };

  saveButtonClick = () => {};

  render() {
    const { ocrText, classifyText } = this.state;
    return (
      <div>
        <span>ocr文本:</span>
        <div>
          <TextArea
            rows={2}
            showCount
            allowClear={true}
            value={ocrText}
            onChange={this.ocrTextOnChange}
          />
        </div>
        <br />
        <span>分类:</span>
        <div>
          <TextArea
            rows={2}
            showCount
            allowClear={true}
            value={classifyText}
            onChange={this.classifyTextOnChange}
          />
        </div>
        <div className={style.saveButton}>
          <Button type="primary" onClick={this.saveButtonClick}>
            保存
          </Button>
        </div>
        <div className={style.closeLabelManage}>
          <span className="icon-remove-sign" />
        </div>
      </div>
    );
  }
}

export default OCRLabelEdit;
