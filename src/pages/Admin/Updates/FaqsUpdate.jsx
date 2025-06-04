import React, { useContext, useEffect, useState } from "react";
import myContext from "../../../context/data/MyContext";
import { PlusCircle } from "lucide-react";
import Layout from "../../../components/layout/Layout";

function Updatefaq() {
  const context = useContext(myContext);
  const { faq, updateFaq } = context;

  const [localFaq, setLocalFaq] = useState({
    questions: "",
    answers: "",
    id: null,
  });

  // Load faq from context into local state on mount
  useEffect(() => {
    if (faq) {
      setLocalFaq(faq);
    }
  }, [faq]);

  const handleUpdate = () => {
    updateFaq(localFaq); // pass the updated FAQ to context update method
  };

  return (
    <Layout>
      <div className="min-h-screen bg-[#1e1e1e] flex justify-center items-center px-4 py-10">
        <div className="bg-[#161616] px-6 sm:px-10 py-10 rounded-2xl shadow-2xl w-full max-w-lg border border-gray-500">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-extrabold text-gray-400 tracking-wide">
              Update FAQ
            </h1>
            <p className="text-gray-400 mt-1 text-sm">
              Fill all the FAQ details below
            </p>
          </div>

          <div className="space-y-4">
            <InputField
              label="Questions"
              value={localFaq.questions}
              onChange={(e) =>
                setLocalFaq({ ...localFaq, questions: e.target.value })
              }
              placeholder="Enter question"
            />
            <InputField
              label="Answers"
              value={localFaq.answers}
              onChange={(e) =>
                setLocalFaq({ ...localFaq, answers: e.target.value })
              }
              placeholder="Enter answer"
            />
            <button
              onClick={handleUpdate}
              className="bg-black text-gray-400 font-semibold w-full flex items-center justify-center gap-2 py-2.5 rounded-lg hover:bg-[#0a0a0a] cursor-pointer transition duration-300"
            >
              <PlusCircle className="w-5 h-5" />
              Update FAQ
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default Updatefaq;

// Reusable InputField Component
const InputField = ({ label, value, onChange, placeholder }) => (
  <div>
    <label className="text-gray-300 text-sm mb-1 block ml-1">{label}</label>
    <input
      type="text"
      value={value}
      onChange={onChange}
      placeholder={placeholder}
      className="bg-[#161616] border border-gray-700 text-gray-200 placeholder:text-gray-500 px-3 py-2 rounded-lg w-full outline-none focus:ring-2 focus:ring-gray-600"
    />
  </div>
);
