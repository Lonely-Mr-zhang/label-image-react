import React, { Component } from 'react';
import type { HistoryAreaProps, HistoryAreaState } from './data';
import style from '@/pages/LabelImage_Bak/DoLabel/style.less';

class HistoryArea extends Component<HistoryAreaProps, HistoryAreaState> {
  historyClick = (e: any) => {
    const { index } = e.target.dataset;
    if (index) {
      // eslint-disable-next-line radix
      let historyIndex = parseInt(index);
      // todo 发送重新绘画命令
      // this.RenderHistoryState(this.historyIndex);
    }
  };

  render() {
    const { historyList } = this.props;
    return (
      <div className={style.historyContent}>
        <p className={style.title}>历史记录</p>
        <div className={style.historyGroup} onClick={this.historyClick}>
          {historyList &&
            historyList.map((item, index, arr) => {
              return (
                <p data-item-type={item.type} data-index={item.index}>
                  {item.desc}
                </p>
              );
            })}
        </div>
      </div>
    );
  }
}

export default HistoryArea;
