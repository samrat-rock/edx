  import { Modal, Form, Input, Button, Cascader, DatePicker } from "antd";


  interface TestScoreProps {
    onCancel: () => void;
    open: boolean;
  }

  const TestScore: React.FC<TestScoreProps> = ({ onCancel, open }) => {
    

    const options = [
      {
        value: "IELTS Test Card",
        label: "IELTS Test Card",
        
        
      },
      {
        value: "PTE Test Card",
        label: "PTE Test Card",
        
      },
      {
          value: "Duolingo Test Card",
          label: "Duolingo Test Card",
          
        },
        {
          value: "SAT",
          label: "SAT",
          
        },
        {
          value: "Duolingo Test Card",
          label: "Duolingo Test Card",
          
        },
        {
          value: "IELTS Test Card",
          label: "IELTS Test Card",
          
        },
    
        
        
    ];

    

    return (
      <Modal open={open} onCancel={onCancel} footer={null} centered>
        <div className="font-semibold text-2xl">Upload Test Score</div>

        <Form layout="vertical">
          <Form.Item
            label={
              <span className="font-semibold pt-2">
                Select file <span className="text-red-500">*</span>
              </span>
            }
          >
            <Cascader
              className="w-full"
              placeholder="--Select--"
              options={options}
              
          
            
            />
          </Form.Item>

          <Form.Item label={<span className="font-semibold">Test date <span className="text-red-500">*</span></span>}>
            <DatePicker className="w-full" />
          </Form.Item>

          <div className="grid grid-cols-2 gap-4">
            {["Listening", "Speaking", "Writing", "Reading"].map((skill, index) => (
              <Form.Item
                key={index}
                label={
                  <span className="font-semibold">
                    {skill} <span className="text-red-500">*</span>
                  </span>
                }
              >
                <Input placeholder="Enter score" />
              </Form.Item>
            ))}
          </div>

          <Form.Item label={<span className="font-semibold">Short description</span>}>
            <Input.TextArea placeholder="Enter details" rows={3} />
          </Form.Item>

          <Form.Item label={<span className="font-semibold">Upload File</span>}>
            <div className="border rounded-lg flex items-center p-2 hover:border-blue-500 focus-within:border-blue-500">
              <div className="flex items-center gap-2 px-2 bg-gray-200">
                <span className="text-gray-500">📁</span>
                <button
                  type="button"
                  className="text-gray-700 hover:bg-gray-300 px-3 py-1 rounded"
                >
                  Select file
                </button>
              </div>
              <input
                type="text"
                placeholder="No file selected"
                readOnly
                className="flex-1 bg-transparent border-none px-3 outline-none"
              />
            </div>
          </Form.Item>

          <div className="flex gap-5 mt-4">
            <Button className="w-32 border-[#007296] text-[#007296]" onClick={onCancel}>
              Cancel
            </Button>
            <Button className="w-32 bg-[#007296] text-white" htmlType="submit">
              Submit
            </Button>
          </div>
        </Form>
      </Modal>
    );
  };

  export default TestScore;
