"use client";

import { Hand } from "@/Components/Shared/Icons";
import useFetchData from "@/Hooks/UseFetchData";
import parse from "html-react-parser";
import Spinner from "./Shared/Spinner";

interface Page {
  id: number;
  page_title: string;
  page_slug: string;
  page_content: string;
}

const DynamicPage = ({ slug }: { slug: string }) => {
  const { data, error, isLoading } = useFetchData<{ data: Page[] }>(
    "/dynamic-pages"
  );

  const pageData = data?.data.find(page => page.page_slug === slug);

  if (isLoading) {
    return <Spinner />;
  }

  if (error || !pageData) {
    return <div className="text-red-500">{error || "Page not found."}</div>;
  }

  return (
    <div className="bg-[#32203C] p-6 rounded-[8px] border border-[#C83C7C] text-white w-full">
      <div className="flex flex-col sm:flex-row items-start gap-3 mb-4">
        <div className="p-3 rounded-[8px] flex justify-center items-center bg-[#C83C7C] w-fit">
          <Hand />
        </div>
        <div>
          <h2 className="text-xl font-bold">{pageData.page_title}</h2>
          <p className="text-sm text-[#BCBCBC]">
            This page outlines our {pageData.page_title.toLowerCase()}.
          </p>
        </div>
      </div>

      <div className="text-sm text-[#DADADA] space-y-4">
        {parse(pageData.page_content)}
      </div>
    </div>
  );
};

export default DynamicPage;
