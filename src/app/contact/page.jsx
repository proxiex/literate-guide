
import ContactUsComponent from "@/component/contactUs/conatactUsComponent";
import Layout from "@/component/contactUs/contactLayout";
import React from "react";

function ContactUs() {
  return (
    <div >
      <Layout hidden={true}>
        <ContactUsComponent />
      </Layout>
    </div>
  );
}

export default ContactUs;
