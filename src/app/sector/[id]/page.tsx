"use client";

import React from "react";
import { useParams, useSearchParams } from "next/navigation";
import Container from "@/Components/Shared/Container";
import Workcard from "@/Components/Reusable/Workcard";
import Spinner from "@/Components/Shared/Spinner";
import useFetchData from "@/Hooks/UseFetchData";
import SectorPage from "@/app/company-with-work/SectorPage";

interface Company {
  id: number;
  sector_id: number;
  logo: string;
}

interface ApiResponse {
  success: boolean;
  message: string;
  data: Company[];
  code: number;
}

const baseURL = process.env.NEXT_PUBLIC_IMG_URL || "";

const CompanyWithWorkPage = () => {
 
  const searchParams = useSearchParams();
  const title = searchParams.get("title");
  console.log(title);
  
  const { id } = useParams();
  
  const endpoint = id ? `/get_company/${id}` : null;

  const {
    data: apiResponse,
    isLoading,
    error,
  } = useFetchData<ApiResponse>(endpoint);

  if (isLoading) {
    return (
      <Container>
        <Spinner />
      </Container>
    );
  }

  if (!id) {
    return (
      <Container>
        <p className="text-white text-center">
          Sector ID is missing in the URL.
        </p>
      </Container>
    );
  }

  if (error) {
    return (
      <Container>
        <p className="text-white text-center">Error loading companies.</p>
      </Container>
    );
  }

  const companies = apiResponse?.data || [];

  return (
    <section className="lg:py-20 py-5 2xl:px-0 px-5">
      <Container>
        <SectorPage/>
        <div className="mt-[60px] grid xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-1 gap-3">
          {companies.length > 0 ? (
            companies.map(company => (
              <Workcard
                key={company.id}
                imageSrc={baseURL + company.logo}
                altText={`Company Logo ${company.id}`}
                height={180}
                width={280}
              />
            ))
          ) : (
            <p className="text-white col-span-full text-center">
              No companies found for this sector.
            </p>
          )}
        </div>
      </Container>
    </section>
  );
};

export default CompanyWithWorkPage;
