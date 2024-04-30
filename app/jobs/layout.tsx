import Footer from "@/components/footer";
import Navbar from "../../components/navbar";
import { Separator } from "@/components/ui/separator";

const JobLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Navbar />
      <div className="mt-20">{children}</div>
      <Separator />
      <Footer />
    </>
  );
};

export default JobLayout;
