import ContactInfo from "@/components/contact/ContactInfo";
import Form from "@/components/contact/Form";
import HeadingBg from "@/shared/HeadingBg";

const page = () => {
  return (
    <>
      <HeadingBg label="Contact Us" />
      <ContactInfo />
      <Form />

      <div className="max-w-7xl mx-auto px-4 rounded-2xl overflow-hidden pb-10">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2557.831230890238!2d90.35939184779701!3d24.955238091893527!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3757b5003c4aca59%3A0x425ed810c5e4028d!2sPouch%20Care!5e0!3m2!1sen!2sbd!4v1730877129509!5m2!1sen!2sbd"
          width="100%"
          height="450"
          style={{ border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </div>
    </>
  );
};

export default page;
