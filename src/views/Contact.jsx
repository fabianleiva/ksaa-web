import { FaInstagram } from "react-icons/fa";

const Contact = () => {
  return (
    <main className="absolute inset-0 flex justify-center items-center overflow-hidden px-3 font-work-sans page-fade-in">
      <section className="text-center">
        <div>
          <p>Francisco de Riveros 4375</p>
          <p>Vitacura, Santiago. CHILE</p>
          <p className="mt-5">+56 9 7969 8916</p>
          <p>+56 9 6727 5050</p>
        </div>
        <div className="mt-5">
          <p>contacto@ksaa.cl</p>
          <div className="flex justify-center">
            <a
              href="https://www.instagram.com/studioksaa_/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-[#adadad] hover:text-[#000000]"
            >
              <FaInstagram className="text-lg mr-1" />
              studioksaa_
            </a>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Contact;
