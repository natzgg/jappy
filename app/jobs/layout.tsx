import Footer from "@/components/footer";
import Navbar from "../../components/navbar";

const JobLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-20">{children}</div>
      <Footer />
    </>
  );
};

export default JobLayout;
