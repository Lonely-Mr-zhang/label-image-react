import React, { Component } from 'react';
import type { LabelListShowAreaProps, LabelListShowAreaState } from './data';
import {
  EditOutlined,
  DeleteOutlined,
  EyeInvisibleOutlined,
  EyeOutlined,
} from '@ant-design/icons';

import style from './index.less';

class LabelListShowArea extends Component<
  LabelListShowAreaProps,
  LabelListShowAreaState
> {
  render() {
    const { labelList } = this.props;
    return (
      <div className={style.resultGroup}>
        {labelList.map((item, index, arr) => {
          return (
            // `<span class="${style.result_no}">${_index + 1}</span>` +
            //           `<span class="${style.result_color}" style="background: ${item.labels.labelColor};"></span>` +
            //           `<input class="${style.result_Name}" value="${item.labels.labelName}" disabled>` +
            //           `<i class="${[style.editLabelName, 'icon-pencil'].join(' ')}"></i>` +
            //           `<i class="${[style.deleteLabel, 'icon-trash'].join(' ')}"></i>` +
            //           `<i class="${[style.isShowLabel, eyeIconClass].join(' ')}"></i>`;
            <div>
              <span className={item.id}>item.id</span>
              <input className={item.name} value={item.name} disabled />
              <i className={style.editLabel}>
                <EditOutlined />
              </i>
              <i className={style.deleteLabel}>
                <DeleteOutlined />
              </i>
              <i className={style.isShowLabel}>
                {item.isShowLabel ? <EyeOutlined /> : <EyeInvisibleOutlined />}
              </i>
            </div>
          );
        })}
      </div>
    );
  }
}

export default LabelListShowArea;
