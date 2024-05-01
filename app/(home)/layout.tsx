import { Separator } from "@/components/ui/separator";
import Banner from "./_components/banner";
import Featured from "./_components/featured";
import Navbar from "../../components/navbar";
import ApplicantList from "./_components/applicant-list";
import AboutSection from "./_components/about-section";
import TopCompanies from "./_components/top-companies";
import Footer from "@/components/footer";
import DemoAlert from "@/components/demo";

const Layout = () => {
  return (
    <div className="h-screen">
      <Navbar />
      <div className="xl:p-16">
        <DemoAlert />
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
    </div>
  );
};

export default Layout;
