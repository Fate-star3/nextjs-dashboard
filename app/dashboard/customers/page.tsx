'use client';
import React, { useEffect } from 'react';
import { Checkbox, GetProp, Form, Radio, Input, RadioChangeEvent } from 'antd';
import classNames from 'classnames';
const Customers = () => {
  const [form] = Form.useForm();
  const getValue = () => {
    const name = form.getFieldValue('username');
    console.log('name', name);

    if (name === 'Apple') {
      return 1;
    }
    if (name === 'Pear') {
      return 2;
    }
    if (name === 'Orange') {
      return 3;
    }
    return 0;
  };
  const [state, setState] = React.useState({
    key: getValue(),
  });

  const handleClick = () => {
    setState({ key: getValue() });
  };
  const onChange = (e: RadioChangeEvent) => {
    handleClick();
    // form.setFieldsValue({ username: e.target.value });
    console.log('checked = ', e.target.value, state.key, getValue());
  };
  const [leftEyePosition, setLeftEyePosition] = React.useState({
    x: 20,
    y: 20,
  });
  const [rightEyePosition, setRightEyePosition] = React.useState({
    x: 5,
    y: 5,
  });
  const leftEye = React.useRef<HTMLDivElement>(null);
  const rightEye = React.useRef<HTMLDivElement>(null);
  const leftPupil = React.useRef<HTMLDivElement>(null);
  const rightPupil = React.useRef<HTMLDivElement>(null);
  //   useEffect(() => {
  //     const eye = document.getElementById('leftEye');
  //     const pupil = document.getElementById('leftPupil');
  //     document.addEventListener('mousemove', (event) => {
  //       if (eye && pupil) {
  //         const eyeRect = eye.getBoundingClientRect();
  //         const eyeCenterX = eyeRect.left + eyeRect.width / 2;
  //         const eyeCenterY = eyeRect.top + eyeRect.height / 2;
  //         const angle = Math.atan2(
  //           event.clientY - eyeCenterY,
  //           event.clientX - eyeCenterX,
  //         );
  //         const distance = Math.min(
  //           eyeRect.width / 4,
  //           Math.hypot(event.clientX - eyeCenterX, event.clientY - eyeCenterY) /
  //             4,
  //         );
  //         pupil.style.transform = `translate(${Math.cos(angle) * distance}px, ${
  //           Math.sin(angle) * distance
  //         }px)`;
  //       }
  //     });
  //   }, []);
  return (
    <>
      {/* <Form
        form={form}
        name="basic"
        labelCol={{ span: 8 }}
        wrapperCol={{ span: 16 }}
        style={{ maxWidth: 600 }}
        initialValues={{ remember: true }}
        autoComplete="off"
      >
        {' '}
        <CheckBox onChange={onChange} />
      </Form> */}
      {/* <Radio.Group
        options={plainOptions}
        onChange={onChange}
        defaultValue="Apple"
      /> */}

      <p>{state.key}</p>
      <div
        className="relative h-[200px] w-[200px] rounded-full bg-[#e2d137cb] shadow-[0px_0px_4px_rgba(0,0,0,0.1)]"
        onMouseEnter={(e) => {
          console.log(e.clientX, e.clientY);

          setLeftEyePosition({ x: 12, y: 12 });
          setRightEyePosition({ x: 12, y: 12 });
        }}
        onMouseMove={(event) => {
          const leftEye = document.getElementById('leftEye');
          const rightEye = document.getElementById('rightEye');
          const leftPupil = document.getElementById('leftPupil');
          const rightPupil = document.getElementById('rightPupil');

          if (leftEye && leftPupil) {
            const eyeRect = leftEye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const angle = Math.atan2(
              event.clientY - eyeCenterY,
              event.clientX - eyeCenterX,
            );
            const distance = Math.min(
              eyeRect.width / 4,
              Math.hypot(
                event.clientX - eyeCenterX,
                event.clientY - eyeCenterY,
              ) / 4,
            );
            leftPupil.style.transform = `translate(${
              Math.cos(angle) * distance
            }px, ${Math.sin(angle) * distance}px)`;
          }
          if (rightEye && rightPupil) {
            const eyeRect = rightEye.getBoundingClientRect();
            const eyeCenterX = eyeRect.left + eyeRect.width / 2;
            const eyeCenterY = eyeRect.top + eyeRect.height / 2;
            const angle = Math.atan2(
              event.clientY - eyeCenterY,
              event.clientX - eyeCenterX,
            );
            const distance = Math.min(
              eyeRect.width / 4,
              Math.hypot(
                event.clientX - eyeCenterX,
                event.clientY - eyeCenterY,
              ) / 4,
            );
            rightPupil.style.transform = `translate(${
              Math.cos(angle) * distance
            }px, ${Math.sin(angle) * distance}px)`;
          }
        }}
        onMouseLeave={() => {
          const leftPupil = document.getElementById('leftPupil');
          const rightPupil = document.getElementById('rightPupil');
          setLeftEyePosition({ x: 20, y: 20 });
          setRightEyePosition({ x: 5, y: 5 });
          if (leftPupil) {
            leftPupil.style.transform = `translate(${0}px, ${0}px)`;
          }
          if (rightPupil) {
            rightPupil.style.transform = `translate(${0}px, ${0}px)`;
          }
        }}
      >
        <div className="absolute left-1/2 top-[60px] flex -translate-x-1/2 transform ">
          <div
            id="leftEye"
            className="relative mr-[24px] h-[40px] w-[40px] rounded-full bg-white"
            ref={leftEye}
          >
            <div
              id="leftPupil"
              ref={leftPupil}
              className={classNames(
                'absolute h-[16px] w-[16px] rounded-full bg-[#200808]',
              )}
              style={{
                left: `${leftEyePosition.x}px`,
                top: `${leftEyePosition.y}px`,
              }}
            ></div>
          </div>
          <div
            id="rightEye"
            className="relative h-[40px] w-[40px] rounded-full bg-white"
            ref={rightEye}
          >
            <div
              id="rightPupil"
              ref={rightPupil}
              className={classNames(
                'absolute h-[16px] w-[16px] rounded-full bg-[#200808]',
              )}
              style={{
                left: `${rightEyePosition.x}px`,
                top: `${rightEyePosition.y}px`,
              }}
            ></div>
          </div>
        </div>
        <div className="absolute left-1/2 top-[120px] h-[50px] w-[100px]  -translate-x-1/2 transform rounded-[0_0_100px_100px] bg-[#f39c12]"></div>
      </div>
    </>
  );
};
const CheckBox = (props: { onChange: any }) => {
  const { onChange } = props;

  const plainOptions = ['Apple', 'Pear', 'Orange'];
  return (
    <Form.Item
      label="Username"
      name="username"
      rules={[{ required: true, message: 'Please input your username!' }]}
    >
      <Radio.Group
        options={plainOptions}
        onChange={onChange}
        defaultValue="Apple"
      />
    </Form.Item>
  );
};
export default Customers;
