import React, { memo } from 'react';

import { Button, Input } from 'antd';

import {
    DivWrapper,
    ImgWrapper
} from './style';
import { useSelector, useDispatch } from 'react-redux';
import {
    send,
    postSend,
    selectData,
    selectPostData
} from '@/store/test-axios';
const { TextArea } = Input;

export default memo(function Recommemd() {
    const dataInfo = useSelector(selectData)
    const postDataInfo = useSelector(selectPostData)
    const dispatch = useDispatch();
    return (
        <DivWrapper>
            <ImgWrapper bgImage={'https://img1.baidu.com/it/u=3292610633,1656705683&fm=253&fmt=auto&app=138&f=JPEG?w=410&h=412'} className="App-logo" alt="logo" />
            <div className='axios-p'>
                <Button
                    onClick={() => dispatch(send())}
                >
                    get请求
                </Button>
                <TextArea readOnly name="" id="" cols="30" rows="10" value={JSON.stringify(dataInfo.data)} />
                <Button
                    onClick={() => dispatch(postSend())}
                >
                    post请求
                </Button>
                <TextArea readOnly name="" id="" cols="30" rows="10" value={JSON.stringify(postDataInfo.data)} />
            </div>
        </DivWrapper>
    )
})
