import {
  Box,
  Container,
  Grid,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography,
} from "@mui/material";
import Head from "next/head";
import { useEffect, useState } from "react";
import { CommonHero, PageSectionalHeading } from "../../Components/components";
import { CheckCircleOutline } from "@mui/icons-material";

const PrivacyPolicy = () => {
  const [width, setWidth] = useState();

  useEffect(() => {
    setWidth(window.innerWidth);
  }, [width]);

  return (
    <>
      <Head>
        <meta name="description" content="" />
        <meta name="robots" content="noindex" />
        <link rel="canonical" href="/privacy-policy/" />
        <title>Privacy Policy</title>
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Dentist",
            name: "Bayswater Dentist",
            image: "https://dummyjson.com/products/img/logo.png",
            "@id": "",
            url: "https://bayswaterdentist.com.au",
            telephone: "0395460011",
            priceRange: "$$",
            address: {
              "@type": "PostalAddress",
              streetAddress: "664 Mountain Hwy",
              addressLocality: "Bayswater",
              addressRegion: "VIC",
              postalCode: "3153",
              addressCountry: "AU",
            },
            geo: {
              "@type": "GeoCoordinates",
              latitude: -37.8422484,
              longitude: 145.2629995,
            },
            openingHoursSpecification: {
              "@type": "OpeningHoursSpecification",
              dayOfWeek: [
                "Monday",
                "Tuesday",
                "Wednesday",
                "Thursday",
                "Friday",
                "Saturday",
                "Sunday",
              ],
              opens: "10:00",
              closes: "18:00",
            },
            sameAs: [
              "https://www.facebook.com/Bayswater-Dentist-102893878969691",
              "https://twitter.com/bayswaterdentst",
              "https://www.instagram.com/bayswaterdentist/",
              "https://www.pinterest.com.au/bayswaterdentist",
            ],
          })}
        </script>
      </Head>
      <CommonHero />
      <main>
        <section>
          <Container maxWidth="xxl">
            <Grid container>
              <Grid item xs={12} md={10} className="mx-auto">
                <Box py={5}>
                  <Box>
                    <PageSectionalHeading
                      title="Privacy Policy"
                      variant="h2"
                      align="center"
                    />
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Our Dental Practice Privacy Policy & Terms and
                        conditions of The Site Respecting Your Privacy and the
                        law
                      </Typography>
                      <Typography className="para">
                        At Bayswater Dentist, we are committed to respecting
                        your privacy and are committed to protecting your
                        personal information. Our dental practice is bound by
                        relevant Health Privacy Principles in state legislation
                        and Commonwealth National Privacy Principles in the
                        Privacy Act (1988).
                      </Typography>
                      <Typography className="para">
                        We are also bound by other applicable codes of conduct
                        affecting your personal information, such as the Health
                        Records Act 2001 (VIC) and the Health Records and
                        Information Privacy Act 2002 (NSW).
                      </Typography>
                      <Typography className="para">
                        Our staff members are trained on best practices in
                        accordance with the set standards, procedures, and
                        policies to respect your privacy. We also review our
                        privacy policies on a regular basis to keep up with
                        policy changes.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        About Our Privacy Policy
                      </Typography>
                      <Typography className="para">
                        Our Privacy policy states how we manage your personal
                        information. This includes a description of the sort of
                        personal information that’s held, for what purposes, and
                        how long the collected information is retained, used,
                        and disclosed. This privacy policy applies to all
                        dealings with our clinic. We encourage you to please ask
                        at the practice or check our website for any updates to
                        our privacy policy.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Collecting Your Personal Information
                      </Typography>
                      <Typography className="para">
                        Our dental practice collects information from patients
                        and carers or guardians directly. We collect this
                        information when you or your guardian fills out an
                        administrative form such as medical history forms or
                        when you provide personal information on the counter,
                        over the telephone, or on a website.
                      </Typography>
                      <Typography className="para">
                        We collect information that may include your names,
                        email or postal address, health fund membership, date of
                        birth, health information, medicare card details, and
                        any other information that our practice may consider
                        necessary.
                      </Typography>
                      <Typography className="para">
                        In specific cases, we may collect your personal
                        information from third parties. For example, our clinic
                        may collect information on your health and prior
                        treatment from other health care practices and general
                        medical practitioners to aid in your treatment plan.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Using and disclosing your personal information
                      </Typography>
                      <Typography className="para">
                        At our dental practice, we only use health information
                        to provide you with the needed healthcare. We can only
                        use your information for other purposes if you have
                        consented to it.
                      </Typography>
                      <Typography className="para">
                        We may use your information for other purposes that you
                        may have reasonably consistent with or when we are
                        authorised and required by the law. We may also file or
                        use your personal information to notify you about any
                        developments, products, or services from our dental
                        practice that might serve your needs. For example, we
                        may send outpatient reminder notices. If you no longer
                        wish us to contact you, you can request cancellation via
                        the “Contact Us” option below.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Keep your personal information up to date and accurate
                      </Typography>
                      <Typography className="para">
                        Our dental practice aims to make sure that any personal
                        information we collect, use, or disclose is complete, up
                        to date, and accurate. To achieve this, we take
                        reasonable steps to ensure that’s the case so that we
                        can provide you with the best healthcare. In case of any
                        changes in your health and medical information, you
                        should notify the dental practice promptly. This
                        includes medications and any natural alternatives you
                        may be taking. Failure to provide this updated
                        information may lead to the following but are not
                        limited to:
                      </Typography>
                      <List>
                        {[
                          "We may not be able to provide the best health care;",
                          "You may suffer adverse outcomes or harm.",
                          "Please contact us below if you believe that your personal information is inaccurate,",
                          "incomplete, or out of date.",
                        ].map((item) => (
                          <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline
                                style={{ color: "#117295" }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Protecting your personal information
                      </Typography>
                      <Typography className="para">
                        Our dental practice may store your personal information
                        in different ways, including electronic and paper forms.
                        The security of your personal information is paramount
                        to us, and we take all reasonable steps to protect it
                        from loss, unauthorised access, misuse, modification, or
                        disclosure. Here are some of the steps we take to
                        protect your personal information:
                      </Typography>
                      <List>
                        {[
                          "Confidential agreements for all of our employees",
                          "Security policies for all document storage",
                          "System access security measures",
                          "Providing a discrete environment for all confidential discussions within the dental clinic",
                          "Personal information transfers are only allowed when the initial seeking access provides written consent.",
                          "Controlled access to all of our buildings",
                          "Electronic records systems for records backups on cloud storage providers located outside Australia",
                          "Taking necessary steps to ensure that offshore information transfers come with our obligations as specified by the Australian privacy laws.",
                        ].map((item) => (
                          <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline
                                style={{ color: "#117295" }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Your privacy on the internet
                      </Typography>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Our websites
                      </Typography>
                      <Typography className="para">
                        No intentional personal information collection is
                        undertaken by secret means on our website.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Links to other sites
                      </Typography>
                      <Typography className="para">
                        We have links to other sites that you may access by
                        clicking on links in our content leading to external
                        websites. These sites are not subject to our privacy
                        standards, procedures, and policies. You will have to
                        review those sites directly or contact them to ascertain
                        their privacy procedures, policies, and standards.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Gaining access to your personal information
                      </Typography>
                      <Typography className="para">
                        You are entitled to access the personal information that
                        we may have collected. However, the access is subject to
                        exceptions that are allowed by law. In case of any
                        denial of access, we will give you specific reasons as
                        to why. In some data access request cases, we may
                        provide the information over the counter or by
                        telephone. You will need a fully signed consent form to
                        transfer our personal information from the practice. In
                        this case, our staff will assist you with the
                        appropriate arrangements.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Using Government Identifiers
                      </Typography>
                      <Typography className="para">
                        We only use or disclose government identifiers when
                        required or authorised by law and when you have given
                        express consent to disclose the information to third
                        parties. In certain circumstances, the clinic is
                        required to collect government identifiers such as Vet
                        affairs card numbers or Medicare numbers.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Dealing with us with a pseudonym or anonymously
                      </Typography>
                      <Typography className="para">
                        You can deal with our clinic anonymously or under a
                        pseudonym when it’s practicable and lawful to do so. We
                        will still need to uniquely identify your dental records
                        for future use, so you will need to remember your
                        pseudonym details.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Resolving Your Privacy Issues
                      </Typography>
                      <Typography className="para">
                        Our dental clinic provides various ways to resolve any
                        issues you may have with our privacy policy. These
                        include:
                      </Typography>
                      <List>
                        {[
                          "You are always welcome to communicate directly with any member of our staff, and they will help you to the best of their abilities.",
                          "You can talk to your treating dental practitioner to resolve your issue.",
                          "You can contact the dental practice principal owner via the contact details provided on the website.",
                          "If the issue is not resolved to your satisfaction via any of our communication channels, you can always let us know, and we will investigate the specific case and keep you advised of progress. If such channels still don’t bear any progress, the issue will be escalated to the appropriate channels to facilitate resolution.",
                        ].map((item) => (
                          <ListItem key={item}>
                            <ListItemIcon>
                              <CheckCircleOutline
                                style={{ color: "#117295" }}
                              />
                            </ListItemIcon>
                            <ListItemText primary={item} />
                          </ListItem>
                        ))}
                      </List>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Contacting Us
                      </Typography>
                      <Typography className="para">
                        Our patients are advised to speak to the dental
                        practitioner for more information regarding our privacy
                        policy. We also provide contact details on this website.
                        Please visit the Office of the Australian Information
                        Commissioner’s website www.oaic.gov.au for all general
                        information about privacy.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Website Privacy and Copyright
                      </Typography>
                      <Typography className="para">
                        We are fully committed to respecting and protecting your
                        privacy while on our website. Our policy statement
                        explains how we use any information we collect on our
                        website. Generally, we do not collect personal
                        identifying information whenever you visit our site
                        unless you choose to provide the information to our
                        website. This process still makes sure that you don’t
                        have to reveal who you are or any personally identifying
                        information. We only receive information that depends on
                        your interactions with our website.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Collecting your information
                      </Typography>
                      <Typography className="para">
                        We do not collect personal information through this
                        website as a standard practice. If for any reason, we
                        end up collecting personal information on this website,
                        we will expressly provide a purpose of use on the
                        website.
                      </Typography>
                      <Typography className="para">
                        Our dental clinic may offer the services of collecting
                        address information changes and collecting personal
                        information and medical history of any new patients.
                        These services may or may not be provided on this site,
                        and you are encouraged to contact us at the address
                        provided on this page. If offered, the service is only
                        intended for patients who have already booked an
                        appointment with our dentists and have been advised of
                        the availability of this service.
                      </Typography>
                      <Typography className="para">
                        This website will generally communicate the information
                        via standard encryption emails unless stated otherwise.
                        We cannot guarantee that all data transmission over the
                        internet will be 100% secure.
                      </Typography>
                      <Typography className="para">
                        This website cannot give an absolute assurance that the
                        information will be secure at all times. Accordingly,
                        you do provide the information at your own risk, and the
                        practice will not be held responsible for any events
                        arising from unauthorized access to the information. The
                        website’s databases will also not store information for
                        further development use.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Statistics
                      </Typography>
                      <Typography className="para">
                        Our web hosting company will automatically record
                        information regarding your visit for statistical
                        purposes. The information includes your server’s
                        address, your domain name, date and time of your visit,
                        the pages you accessed and specific documents you
                        downloaded, previous web visits you may have visited,
                        and the type of browser used to access the site. This
                        information is used to assess the visitors’ traffic and
                        discover what information is most relevant and how to
                        improve other parts of the site to make them helpful to
                        visitors.
                      </Typography>
                      <Typography className="para">
                        Our website will not attempt to identify users and their
                        browsing activities in the unlikely event of an
                        investigation where law enforcement agencies can
                        exercise a warrant to inspect the web hosting logs that
                        may contain such information. This website contains
                        external links that we are not responsible for the
                        privacy practices and content published on them. We
                        encourage you to examine each website’s privacy policy
                        and make your personal decision on the correctness of
                        the information found and its reliability.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Security
                      </Typography>
                      <Typography className="para">
                        The internet is not always a secure environment, and if
                        you send us any information via your email address, it
                        is at your own risk. All patient information forms and
                        address changes are emailed directly to the clinic’s
                        email address on standard protocols. The information is
                        not permanently stirred on the web hosting company’s or
                        developer’s database.
                      </Typography>
                      <Typography className="para">
                        Any information collected by the dental practice is
                        changeable and viewable at the dental practice. In case
                        you are worried about the security or sensitivity of the
                        information, kindly contact us directly via phone or pay
                        us a visit. We will not disclose or use personal
                        information for other purposes without your express
                        consent unless required to disclose by the law. If you
                        believe that we have failed to adhere to the principles
                        in this [privacy statement or you have any comments on
                        the privacy policy, please get in touch with us @{" "}
                        <a href="mailto:Bayswaterdentist@gmail.com">
                          Bayswaterdentist@gmail.com
                        </a>
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Use of cookies
                      </Typography>
                      <Typography className="para">
                        At the moment, our website does not use cookies. Cookies
                        are small messages given to the web browser by a site’s
                        server. Your browser stores these messages, and they are
                        routinely sent to the server every time you request a
                        web page from the same server. Cookies don’t store
                        personal information unless you have expressly granted
                        the information.
                      </Typography>
                      <Typography className="para">
                        Most browsers are set up to auto-accept cookies. If you
                        wish to stop receiving cookies, you can set your browser
                        to reject all cookies or notify you each time a request
                        to use cookies is made.
                      </Typography>
                      <Typography className="para">
                        Please note that some browsers can allow cookie access
                        from other servers besides the origin server. Feel free
                        to contact us with any queries regarding how we handle
                        your personal information and our privacy issues
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Copyright
                      </Typography>
                      <Typography className="para">
                        The information on this website is subject to Australian
                        copyright laws.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Liability
                      </Typography>
                      <Typography className="para">
                        We are not responsible to you or another party for
                        losses suffered in connection with the use of any of
                        this website and any of its contents. This includes but
                        is not limited to any transmissions that might contain
                        computer viruses.
                      </Typography>
                      <Typography className="para">
                        The clinic makes no representations or warranties about
                        this website or any of the content published on it. To
                        the maximum extent permitted by law, we exclude any
                        liability which may arise from the use of this website,
                        its information, or the content on it. Where the
                        liability cannot be excluded, any liability by us in
                        relation to the usage of this website or its content is
                        limited under the Trade Practices Act 1974 (S68A). The
                        clinic will never be held liable for any indirect,
                        special, incidental, or consequential loss that arises
                        from the use of this website, including but not limited
                        to loss of business profits and medical and health
                        consequences.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Our Intellectual Property
                      </Typography>
                      <Typography className="para">
                        Some of the content published on this website may be
                        owned by someone else’s copyright and is included under
                        a license or agreement. You may only use the content for
                        non-commercial use or access it for personal use unless
                        you have written approval from us. Any content on this
                        website can be printed for your personal use.
                      </Typography>
                      <Typography className="para">
                        All other uses that may include copying and reproduction
                        of this website or any parts of its content are
                        prohibited to the extent permitted by law. None of the
                        content published on this website may be reproduced on
                        another website. If you seek to use the content in any
                        other way, it’s your responsibility to obtain prior
                        approval where necessary.
                      </Typography>
                    </Box>
                    <Box mt={3}>
                      <Typography
                        className="subtitle"
                        variant="h3"
                        gutterBottom
                        align={width > 600 ? "left" : "center"}
                      >
                        Links from this website
                      </Typography>
                      <Typography className="para">
                        Our web pages contain external links to other websites
                        that we have no control ove3r. We make no
                        representations of the accuracy of any information found
                        on these websites. We are not liable for any content on
                        these websites.
                      </Typography>
                      <Typography className="para">
                        If you have any questions or comments on our privacy
                        policy, feel free to get in touch with us on the
                        “contact us” page, and we will get back to you promptly.
                      </Typography>
                    </Box>
                  </Box>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </section>
      </main>
    </>
  );
};

export default PrivacyPolicy;
