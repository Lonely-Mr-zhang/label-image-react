import React, { Component } from 'react';
import type {
  LocalSideFunctionBarProps,
  LocalSideFunctionBarState,
} from './data';
import {
  DragOutlined,
  BorderOutlined,
  createFromIconfontCN,
  CloseOutlined,
  CheckOutlined,
} from '@ant-design/icons';
import { Row, Col, Layout, Button, Tooltip, Switch } from 'antd';

import style from './index.less';

const { Footer } = Layout;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2815299_48zwx19jgz3.js',
});

class LocalSideFunctionBar extends Component<
  LocalSideFunctionBarProps,
  LocalSideFunctionBarState
> {
  render() {
    return (
      <div className={style.localSideFunctionBar}>
        <Tooltip title="拖拽">
          <Button ghost icon={<DragOutlined />} size={'large'} />
        </Tooltip>
        <Tooltip title="矩形">
          <Button ghost icon={<IconFont type="icon-juxing" />} size={'large'} />
        </Tooltip>
        <Tooltip title="多边形">
          <Button
            ghost
            icon={<IconFont type="icon-duobianxing" />}
            size={'large'}
          />
        </Tooltip>
        <Tooltip title="编辑模式">
          <Button ghost icon={<IconFont type="icon-bianji" />} size={'large'} />
        </Tooltip>
        {/*<span>验收<IconFont style={{color: "red"}} type="icon-yiyanshou" /></span>*/}
        <div
          style={{
            userSelect: 'none',
            position: 'absolute',
            bottom: 50,
            textAlign: 'center',
            color: '#17C3D2',
          }}
        >
          <Switch
            size="small"
            checkedChildren={
              <IconFont style={{ color: 'red' }} type="icon-yiyanshou" />
            }
            unCheckedChildren={<IconFont type="icon-yiyanshou" />}
            onChange={() => {}}
          />
          <span>验收</span>
        </div>
      </div>
    );
  }
}

export default LocalSideFunctionBar;
