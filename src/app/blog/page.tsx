import Container from "@/Components/Shared/Container";
import Aboutbanner from "./components/Aboutbanner";
import Recentblog from "./components/Recentblog";

const page = () => {
  return (
    <section className="lg:pt-20 pt-10 2xl:px-0 px-5">
      <Container>
        <Aboutbanner />
        <Recentblog />
      </Container>
    </section>
  );
};

export default page;
