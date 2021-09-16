import React, { Component } from 'react';
import { Row, Col, Layout } from 'antd';
import type { LabelAreaProps, LabelAreaState } from './data';
import LocalSideFunctionBar from '@/components/LabelArea/component/LocalSideFunctionBar';
import SketchpadArea from '@/components/LabelArea/component/SketchpadArea';
import LabelResultArea from '@/components/LabelArea/component/LabelResultArea';
import HistoryArea from '@/components/LabelArea/component/HistoryArea';
import style from './index.less';

const { Header, Sider, Content, Footer } = Layout;

class LabelArea extends Component<LabelAreaProps, LabelAreaState> {
  render() {
    return (
      <>
        <Layout>
          <Sider
            width={40}
            style={{
              background: `url(${require('/public/background/sea.jpg')})`,
            }}
          >
            <LocalSideFunctionBar />
          </Sider>
          <Content style={{ background: '#8c919c' }}>
            <SketchpadArea />
          </Content>
          <Sider width={300} style={{}}>
            <LabelResultArea />
            <HistoryArea />
          </Sider>
        </Layout>
        {/*<Row justify="space-between" align="middle" style={{height: '90%',background: 'black'}}>*/}
        {/*  <Col></Col>*/}
        {/*  <Col></Col>*/}
        {/*  <Col>*/}
        {/*    */}
        {/*  </Col>*/}
        {/*</Row>*/}
      </>
    );
  }
}

export default LabelArea;
