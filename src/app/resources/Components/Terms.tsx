import { Hand } from "@/Components/Shared/Icons";
import React from "react";

const Terms = () => {
  return (
    <div className="bg-[#32203C] p-6 rounded-t-[8px] border border-[#C83C7C] border-b-0 text-white w-full">
      <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C] w-fit">
          <Hand />
        </div>
        <div>
          <h2 className="text-xl font-bold">Terms of Service</h2>
          <p className="text-sm text-[#BCBCBC]">
            By using the SAVA Logistics website and platform, you agree to the
            following terms:
          </p>
        </div>
      </div>

      <div className="text-sm text-[#DADADA] space-y-4">
        <div>
          <h3 className="font-semibold">Use of Services</h3>
          <p>
            You may access features like job applications, contact forms,
            destination info, supplier/driver dashboards, and business tools.
            Use must be lawful and respectful.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Accounts</h3>
          <p>
            Some features require registration. Keep your login info safe.
            You’re responsible for your account activity.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Privacy</h3>
          <p>
            We collect personal and logistic data to offer our services. Your
            data is safe and only used with your consent. See our Privacy
            Policy.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Content & Copyright</h3>
          <p>
            All content is owned by SAVA or its partners. You may not copy,
            share, or use it without permission.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Liability</h3>
          <p>
            We are not responsible for losses from downtime, incorrect data, or
            third-party issues. Use the platform at your own risk.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Changes</h3>
          <p>
            We may update these terms at any time. Continued use means you
            accept the changes.
          </p>
        </div>

        <div>
          <h3 className="font-semibold">Contact</h3>
          <p>
            Questions? Contact us at:{" "}
            <a
              href="https://www.savaexpress.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-pink-400 underline break-all"
            >
              www.savaexpress.com
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Terms;
