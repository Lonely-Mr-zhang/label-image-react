import React, { Component } from 'react';
import type { OCRResultAreaProps, OCRResultAreaState } from './data';
import { Button, TextArea } from 'antd';

import style from './index.less';
import EditLabelModel from '@/components/LabelArea/component/EditLabelModal';

class OCRResultArea extends Component<OCRResultAreaProps, OCRResultAreaState> {
  render() {
    const { taskType } = this.props;
    let editLabelModelConfig = {
      taskType: taskType,
      labelIndex: this.state.labelIndex,
      positionX: this.state.positionX,
      positionY: this.state.positionY,
      isShow: this.state.childIsShow,
      closeCallBack: () => {
        this.setState({
          childIsShow: true,
        });
      },
    };
    return (
      <div className={style.resultArea}>
        <p className={style.title}>
          标注结果 (<span className="resultLength">0</span>)
        </p>
        <div className={style.resultList_head}>
          <div className={style.headChildren}>
            <p className={style.headName}>名称</p>
            <p className={style.headEdit}>修改</p>
            <p className={style.headDelete}>删除</p>
            <p className={style.headDisplay}>显/隐</p>
          </div>
        </div>
        <div className={style.resultGroup} />
        <EditLabelModel config={editLabelModelConfig} />
        {/*<div className={style.resultSelectLabel}>*/}
        {/*  <span>ocr文本</span>*/}
        {/*  <div>*/}
        {/*    <TextArea rows={2} showCount id="editLabelId"/>*/}
        {/*  </div>*/}
        {/*  <br/>*/}
        {/*  <span>分类</span>*/}
        {/*  <div>*/}
        {/*    <TextArea rows={2} showCount id="editClassifyContentId"/>*/}
        {/*  </div>*/}
        {/*  <div style={{marginTop: '20px'}}>*/}
        {/*    <Button type="primary" id="saveEditLabelButton">*/}
        {/*      保存*/}
        {/*    </Button>*/}
        {/*  </div>*/}
        {/*  <div className={style.closeLabelManage}>*/}
        {/*    <span className="icon-remove-sign"/>*/}
        {/*  </div>*/}
        {/*</div>*/}
      </div>
    );
  }
}

export default OCRResultArea;
