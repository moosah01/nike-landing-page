import Nav from "./components/Nav";
import ScrollToTop from "./components/ScrollToTop";
import {
  CustomerReviews,
  Footer,
  Hero,
  PopularProducts,
  Services,
  SpecialOffer,
  Subscribe,
  SuperQuality,
} from "./sections";

const App = () => {
  return (
    <main className="relative">
      <Nav />
      <section className="padding-l wide:padding-r pr-16 padding-b p">
        <Hero />
      </section>
      <section className="padding">
        <PopularProducts />
      </section>
      <section className="padding">
        <SuperQuality />
      </section>
      <section className="padding-x py-10">
        <Services />
      </section>
      <section className="padding">
        <SpecialOffer />
      </section>
      <section className="bg-pale-blue padding">
        <CustomerReviews />
      </section>
      <section className="padding-x sm:py-32 py-16 w-full">
        <Subscribe />
      </section>
      <section className="my-responsive-class text-shadow-black font-bold font-montserrat text-center text-wrap">
        <div className="text-white-400">
          Hello! This is a dummy section to test out responsiveness with
          TailwindCSS and its different className specifications. Try Resizing
          it!
        </div>
      </section>
      <section className=" bg-black padding-x padding-t pb-8">
        <Footer />
      </section>

      <ScrollToTop />
    </main>
  );
};

export default App;
