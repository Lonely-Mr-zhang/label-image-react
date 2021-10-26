import React, { Component } from 'react';
import type { ClassifyResultAreaProps, ClassifyResultAreaState } from './data';
import { Button } from 'antd';

import style from './index.less';

class ClassifyResultArea extends Component<
  ClassifyResultAreaProps,
  ClassifyResultAreaState
> {
  // render() {
  //   return (
  //     <div className={style.resultArea}>
  //       <p className={style.title}>
  //         标注结果 (<span className="resultLength">0</span>)
  //       </p>
  //       <div className={style.resultList_head}>
  //         <div className={style.headChildren}>
  //           {this.state.isOCR ? (
  //             <p className={style.headName}>名称</p>
  //           ) : (
  //             <p className={style.headName}>内容</p>
  //           )}
  //           {this.state.isOCR ? (
  //             <p className={style.headEdit}>修改</p>
  //           ) : (
  //             <p className={style.modify}>编辑</p>
  //           )}
  //           <p className={style.headDelete}>删除</p>
  //           <p className={style.headDisplay}>显/隐</p>
  //         </div>
  //       </div>
  //       <div className={style.resultGroup}/>
  //       {/* 选择标签操作 */}
  //       {/* {this.state.isOCR ? ( */}
  //       {this.state.isOCR ? (
  //         <div className={style.resultSelectLabel}>
  //           <span>ocr文本</span>
  //           <div>
  //             <TextArea rows={2} showCount id="editLabelId"/>
  //           </div>
  //           <br/>
  //           <span>分类</span>
  //           <div>
  //             <TextArea rows={2} showCount id="editClassifyContentId"/>
  //           </div>
  //           <div style={{marginTop: '20px'}}>
  //             <Button type="primary" id="saveEditLabelButton">
  //               保存
  //             </Button>
  //           </div>
  //           <div className={style.closeLabelManage}>
  //             <span className="icon-remove-sign"/>
  //           </div>
  //         </div>
  //       ) : (
  //         <div className={style.resultSelectLabel}>
  //           <p className={style.selectLabelTip} hidden>
  //             请先创建标签
  //           </p>
  //           <div>
  //             <Search
  //               onSearch={this.onSearchTags}
  //               placeholder="输入过滤或新增"
  //               style={{width: '60%'}}
  //               enterButton
  //             />
  //           </div>
  //           <ul className={style.selectLabelUl}/>
  //           <div className={style.closeLabelManage}>
  //             <span className="icon-remove-sign"/>
  //           </div>
  //         </div>
  //       )}
  //     </div>
  //   );
  // }
}

export default ClassifyResultArea;
