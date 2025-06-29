"use client";

import React from "react";
import Container from "@/Components/Shared/Container";
import Workwithuscard from "@/Components/Reusable/Workwithuscard";
import useFetchData from "@/Hooks/UseFetchData";
import Spinner from "@/Components/Shared/Spinner";
import Link from "next/link";

type Job = {
  id: number;
  title: string;
  department: string;
  deadline: string;
  location: string;
  career_level: string;
  employment_status: string;
  description: string;
};

const Page = () => {
  const { data, isLoading, error } = useFetchData<{
    success: boolean;
    data: Job[];
  }>("/jobs");

  const jobs = data?.data || [];
  console.log(jobs);
  
  return (
    <section className="lg:py-20 py-8 2xl:px-0 px-5">
      <Container>
        <h2 className="lg:text-[64px] text-[30px] font-bold text-white font-arial text-center">
          Work With Us
        </h2>
        <div className="lg:mt-[60px] mt-5">
          <h4 className="text-center text-white font-arial lg:text-[32px] text-[24px] font-normal">
            Find your perfect position
          </h4>

          {isLoading ? (
            <div className="flex justify-center mt-20">
              <Spinner />
            </div>
          ) : error ? (
            <p className="text-center text-red-500 mt-10">
              Error loading jobs: {error}
            </p>
          ) : (
            <div className="mt-[60px] grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
              {jobs.map(job => (
                <Link key={job.id} href={`/work-with-us/${job.id}`}>
                  <Workwithuscard
                    backgroundImage="/work.png"
                    title={job.title}
                    subtitle={job.department}
                    location={job.location}
                  />
                </Link>
              ))}
            </div>
          )}
        </div>
      </Container>
    </section>
  );
};

export default Page;
