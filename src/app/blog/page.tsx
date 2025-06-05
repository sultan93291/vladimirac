import Container from "@/Components/Shared/Container";
import Aboutbanner from "./components/Aboutbanner";
import Recentblog from "./components/Recentblog";

const page = () => {
  return (
    <section className="pt-20">
      <Container>
        <Aboutbanner />
        <Recentblog />
      </Container>
    </section>
  );
};

export default page;
