import { Hand } from "@/Components/Shared/Icons";
import React from "react";

const Privacy = () => {
  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white">
      <div className="flex items-start gap-3 mb-4">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C]">
          <Hand />
        </div>
        <div>
          <h2 className="text-xl font-bold">Privacy Policy</h2>
          <p className="text-sm text-[#BCBCBC]">
            At SAVA Logistics, your privacy matters. We collect information to
            improve your experience.
          </p>
        </div>
      </div>

      <div className="text-sm text-[#DADADA] space-y-6">
        <div>
          <h3 className="font-semibold">We Collect:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Personal information such as your name and email address</li>
            <li>Data related to logistics and service interactions</li>
            <li>Information on how you navigate our website</li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold">We Use It To:</h3>
          <ul className="list-disc list-inside space-y-1">
            <li>Address your questions and feedback</li>
            <li>Provide you with insightful dashboards and tools</li>
            <li>Enhance the overall functionality of our site</li>
          </ul>
        </div>

        <p className="pt-2">
          We respect your privacy and do not sell your data. We only share it
          with trusted partners or as legally required. You have the right to
          request access, corrections, or deletion of your data at any time.
          Your information is securely stored. For inquiries, please contact us
          at: <span className="italic">[Insert Email]</span>
        </p>
      </div>
    </div>
  );
};

export default Privacy;
