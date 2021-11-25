import React from 'react';
import { createForm } from 'rc-form';
import { WingBlank, WhiteSpace, InputItem, Button } from 'antd-mobile';

interface LoginFormProps {
  form: {
    getFieldProps: Function;
    getFieldsValue: Function;
  };
  handleSubmit: Function;
}

const LoginForm: React.FC<LoginFormProps> = ({ form, handleSubmit }) => {
  const { getFieldProps, getFieldsValue } = form;

  const loginSubmit = () => {
    let value = getFieldsValue();
    // 子传父 传值
    handleSubmit(value);
  };

  return (
    <WingBlank size="lg">
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('name')}
        type="text"
        placeholder="请输入登录名"
        clear
      />
      <WhiteSpace size="lg" />
      <InputItem
        {...getFieldProps('password')}
        type="password"
        placeholder="请输入登录名"
        autoComplete="new-password"
        clear
      />
      <WhiteSpace size="lg" />
      <WhiteSpace size="lg" />
      <Button type="primary" onClick={loginSubmit}>
        登录
      </Button>
    </WingBlank>
  );
};

export default createForm()(LoginForm);
