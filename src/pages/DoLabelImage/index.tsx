import React, { Component } from 'react';
import type { DoLabelImageProps, DoLabelImageState } from './data';
import GlobalBottomFunctionBar from '@/components/GlobalBottomFunctionBar';
import LabelArea from '@/components/LabelArea';
import { Layout } from 'antd';
import style from './index.less';

const { Header, Sider, Content, Footer } = Layout;

class DoLabelImage extends Component<DoLabelImageProps, DoLabelImageState> {
  render() {
    return (
      <div style={{ height: '95vh' }}>
        <Layout style={{ padding: 10, height: '92vh' }}>
          <LabelArea />
          <Footer
            style={{ padding: '0 0', background: '#57693c', opacity: 0.5 }}
          >
            <GlobalBottomFunctionBar />
          </Footer>
          {/*<Footer >©2021 蜗牛保险技术部出品</Footer>*/}
        </Layout>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            userSelect: 'none',
            justifyContent: 'center',
            background: 'white',
            height: '3vh',
          }}
        >
          <span>©2021 蜗牛保险技术部出品</span>
        </div>
      </div>
    );
  }
}

export default DoLabelImage;
