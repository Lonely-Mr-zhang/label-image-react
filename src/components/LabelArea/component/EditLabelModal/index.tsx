import React, { FC } from 'react';
import OCRLabelEdit from '@/components/LabelArea/component/EditLabelModal/component/OCRLabelEdit';
import ClassifyLabelEdit from '@/components/LabelArea/component/EditLabelModal/component/ClassifyLabelEdit';
import style from './index.less';
import { Popconfirm } from 'antd';
import { CloseCircleOutlined } from '@ant-design/icons';

type EditLabelModelProps = {
  config: {
    taskType: string;
    labelIndex: number;
    positionX: number;
    positionY: number;
    isShow: boolean;
    closeCallBack: Function;
  };
};

// function EditLabelModel<T>(Component: React.ComponentType<T>) {
//   return (props: T) => {
//     return <Component {...props}/>
//   }
// }

const EditLabelModel: FC<EditLabelModelProps> = (props) => {
  const { config, children } = props;
  const { isShow, taskType, positionX, positionY, closeCallBack } = config;
  const closeLabelEditModal = () => {
    closeCallBack();
  };
  return isShow ? (
    <div className={style.labelResultEditModal}>
      {(() => {
        switch (taskType) {
          case 'OCR':
            return <OCRLabelEdit />;
          case 'Classify':
            return <ClassifyLabelEdit />;
        }
      })()}
      <div
        onClick={closeLabelEditModal}
        className={style.closeLabelResultEditModal}
      >
        <CloseCircleOutlined />
      </div>
    </div>
  ) : (
    <></>
  );
};

export default EditLabelModel;
