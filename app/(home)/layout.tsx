import { Separator } from "@/components/ui/separator";
import Banner from "./_components/banner";
import Featured from "./_components/featured";
import Navbar from "../../components/navbar";
import ApplicantList from "./_components/applicant-list";
import AboutSection from "./_components/about-section";
import TopCompanies from "./_components/top-companies";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="xl:p-16">
        <Banner />
        <Separator />
        <Featured />
        <div className="lg:flex lg:mb-40">
          <ApplicantList />
          <AboutSection />
        </div>
        <TopCompanies />
      </div>
      <Footer />
      {children}
    </div>
  );
};

export default Layout;
