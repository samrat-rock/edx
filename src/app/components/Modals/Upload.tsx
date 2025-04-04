import React from "react";
import { Modal, Form, Input, Button, Upload as AntUpload, Radio } from "antd";
import { UploadOutlined } from "@ant-design/icons";

interface UploadProps {
  onCancel: () => void;
  open: boolean;
}

const Upload: React.FC<UploadProps> = ({ onCancel, open }) => {
  return (
    <Modal open={open} onCancel={onCancel} footer={null} centered>
      <div className="font-semibold text-2xl mb-4">Upload documents</div>

      <Form layout="vertical" requiredMark={false}>
        <Form.Item
          label={
            <span>
              Select file type
              <span className="text-red-500 ml-1">*</span>
            </span>
          }
          name="fileType"
          rules={[{ required: true, message: 'Please select a file type first' }]}
        >
          <Radio.Group>
            <Radio value="academics">Academics</Radio>
            <Radio value="testCard">Test card</Radio>
          </Radio.Group>
        </Form.Item>

        <Form.Item
          label="Short description"
          name="description"
        >
          <Input.TextArea rows={2} placeholder="text" />
        </Form.Item>

        <Form.Item
          label={
            <span>
              Upload
              <span className="text-red-500 ml-1">*</span>
            </span>
          }
          name="upload"
          valuePropName="fileList"
          rules={[{ required: true, message: 'Please select a file' }]}
        >
          <AntUpload beforeUpload={() => false}>
            <Button icon={<UploadOutlined />}>Select a file</Button>
          </AntUpload>
        </Form.Item>

        <Form.Item>
          <div className="flex gap-2">
            <Button onClick={onCancel}>Cancel</Button>
            <Button type="primary" htmlType="submit">Submit</Button>
          </div>
        </Form.Item>
      </Form>
    </Modal>
  );
};

export default Upload;