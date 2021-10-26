import React, { Component } from 'react';
import {
  Row,
  Col,
  Button,
  Tooltip,
  Switch,
  Popover,
  Tag,
  Pagination,
} from 'antd';
import type {
  GlobalBottomFunctionBarProps,
  GlobalBottomFunctionBarState,
} from './data';
import {
  FolderOpenOutlined,
  CaretLeftOutlined,
  CaretRightOutlined,
  CameraOutlined,
  FullscreenOutlined,
  createFromIconfontCN,
} from '@ant-design/icons';
import style from './style.less';

const { CheckableTag } = Tag;

const IconFont = createFromIconfontCN({
  scriptUrl: '//at.alicdn.com/t/font_2815299_48zwx19jgz3.js',
});

class GlobalBottomFunctionBar extends Component<
  GlobalBottomFunctionBarProps,
  GlobalBottomFunctionBarState
> {
  constructor(props: GlobalBottomFunctionBarProps) {
    super(props);
    this.state = {
      imageIndex: 11,
    };
  }
  render() {
    const { imageIndex } = this.state;
    return (
      // <div style={{'background':'#6f7c88'}}>
      <div
        style={{
          background: `url(${require('/public/background/snow3.jpeg')})`,
        }}
      >
        <Row justify="space-between" align="middle" gutter={0}>
          <Col span={1}>
            <div style={{ userSelect: 'none', color: '#080100' }}>
              <Tooltip title="选择任务">
                <Button ghost icon={<FolderOpenOutlined />} size={'large'} />
              </Tooltip>
              {/*<span>选任务</span>*/}
            </div>
          </Col>
          {/*<Col span={15} >*/}
          {/*  <Row justify="space-between" align="middle" >*/}
          {/*    <Col span={2}>*/}
          {/*      <Button icon={<CaretLeftOutlined/>} size={'large'}/>*/}
          {/*    </Col>*/}
          {/*    <Col span={20} style={{textAlign: 'center'}}>*/}
          {/*      <Popover placement="top" content="content" title="Title" >*/}
          {/*        <CheckableTag*/}
          {/*          checked={true}*/}
          {/*          onChange={() => {}}*/}
          {/*          style={{color: imageIndex > 10 ? "red" : 'green',textAlign: 'center'}}*/}
          {/*        >*/}
          {/*          1/500*/}
          {/*        </CheckableTag>*/}
          {/*        <span style={{color: imageIndex > 10 ? "red" : 'green'}}>1/500</span>*/}
          {/*      </Popover>*/}
          {/*    </Col>*/}
          {/*    <Col span={2}>*/}
          {/*      <Button icon={<CaretRightOutlined/>} size={'large'}/>*/}
          {/*    </Col>*/}
          {/*  </Row>*/}
          {/*</Col>*/}
          <Col span={18}>
            <Tooltip title="图片名称">
              <Row justify="center">
                <Pagination
                  style={{ color: 'red' }}
                  simple
                  defaultPageSize={1}
                  defaultCurrent={2}
                  total={50}
                />
              </Row>
            </Tooltip>
          </Col>
          <Col span={1}>
            <div
              style={{
                userSelect: 'none',
                textAlign: 'center',
                color: 'black',
              }}
            >
              <Switch
                checkedChildren={
                  <div style={{ color: 'red' }}>
                    <IconFont type="icon-13shizixian" />
                  </div>
                }
                unCheckedChildren={<IconFont type="icon-13shizixian" />}
                onChange={() => {}}
              />
              <span>十字线</span>
            </div>
            {/*<Switch checkedChildren="十字线" unCheckedChildren="十字线" onChange={() => {}}/>*/}
          </Col>
          <Col span={1}>
            <div
              style={{
                userSelect: 'none',
                textAlign: 'center',
                color: 'black',
              }}
            >
              <Switch
                checkedChildren={
                  <div style={{ color: 'red' }}>
                    <IconFont type="icon-mingcheng1" />
                  </div>
                }
                unCheckedChildren={<IconFont type="icon-mingcheng1" />}
                onChange={() => {}}
              />
              <span>标签名</span>
            </div>
            {/*<Switch checkedChildren="标签名" unCheckedChildren="标签名" onChange={() => {}}/>*/}
          </Col>
          <Col span={1}>
            <div
              style={{
                userSelect: 'none',
                textAlign: 'center',
                color: 'black',
              }}
            >
              <Switch
                checkedChildren={
                  <div style={{ color: 'red' }}>
                    <IconFont type="icon-icon_yulan" />
                  </div>
                }
                unCheckedChildren={<IconFont type="icon-icon_yulan" />}
                onChange={() => {}}
              />
              <span>预览</span>
            </div>
          </Col>
          <Col span={1} className={style.gutterBox}>
            <div
              style={{
                userSelect: 'none',
                textAlign: 'center',
                color: 'black',
              }}
            >
              <Tooltip title="快照">
                <Button
                  ghost
                  icon={<IconFont type="icon-kuaizhao" />}
                  size={'large'}
                />
              </Tooltip>
              {/*<span>快照</span>*/}
            </div>
          </Col>
          <Col span={1} className={style.gutterBox}>
            <div
              style={{
                userSelect: 'none',
                textAlign: 'center',
                color: 'black',
              }}
            >
              <Tooltip title="全屏">
                <Button
                  ghost
                  icon={<IconFont type="icon-fullScreen" />}
                  size={'large'}
                />
              </Tooltip>
              {/*<span>全屏</span>*/}
            </div>
          </Col>
        </Row>
      </div>
    );
  }
}

export default GlobalBottomFunctionBar;
