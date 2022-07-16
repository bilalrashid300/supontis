import Accordion from "./Accordion";
import { useTranslation } from "react-i18next";
import "./faq.css";

const FAQ = () => {
  const { t } = useTranslation();

  const faqData = [
    {
      title: t("faq_h1"),
      content: t("faq_d1"),
    },

    {
      title: t("faq_h2"),
      content: t("faq_d2"),
    },
    {
      title: t("faq_h3"),
      content: t("faq_d3"),
    },
    {
      title: t("faq_h4"),
      content: t("faq_d4"),
    },
    {
      title: t("faq_h5"),
      content: t("faq_d5"),
    },
  ];

  return (
    <div className="faq" id="faq">
      <div className="faq-cnt">
        <div className="faq-hd">
          <h2>{t("faq")}</h2>
        </div>

        <div className="faq-ct">
          {faqData.map((item, index) => (
            <Accordion
              title={item.title}
              content={item.content}
              key={item.title + index}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default FAQ;
