"use client";



import Container from "@/Components/Shared/Container";
import Image from "next/image";
import Spinner from "@/Components/Shared/Spinner";
import Recentblog from "@/app/blog/components/Recentblog";
import useFetchData from "@/Hooks/UseFetchData";
import { useParams } from "next/navigation";

type BlogDetail = {
  id: number;
  title: string;
  image: string;
  long_description: string;
};

const page = () => {
  const { id } = useParams();



  const { data, error, isLoading } = useFetchData<{
    success: boolean;
    data: BlogDetail;
  }>(`/blog/details/${id}`);

 
  

  if (isLoading) return <Spinner />;

  if (error)
    return (
      <div className="text-center text-white">
        Error loading blog details: {error}
      </div>
    );

  if (!data?.data)
    return <div className="text-center text-white">Blog not found</div>;

  const blog = data.data;

  console.log(blog);
  

  return (
    <section className="lg:pt-20 pt-8 2xl:px-0 px-5">
      <Container>
        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] rounded-xl overflow-hidden">
          <Image
            src={(process.env.NEXT_PUBLIC_IMG_URL || "") + blog.image}
            alt={blog.title}
            fill
            className="object-cover"
            priority
          />
          <div className="absolute bottom-0 left-0 right-0 bg-black/60 px-4 sm:px-6 md:px-8 py-6 sm:py-8">
            <h3 className="text-white text-center lg:text-[48px] md:text-[38px] sm:text-[28px] text-[20px] font-normal font-arial leading-tight mx-auto">
              {blog.title}
            </h3>
          </div>
        </div>

        <article
          className="text-white pt-8 space-y-6 mx-auto text-[16px] sm:text-[18px] leading-relaxed"
          dangerouslySetInnerHTML={{ __html: blog.long_description }}
        />

        <div className="pt-20">
          <Recentblog />
        </div>
      </Container>
    </section>
  );
};

export default page;



