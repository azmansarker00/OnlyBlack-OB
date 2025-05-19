import React, { useEffect, useState } from "react";
import { collection, query, onSnapshot } from "firebase/firestore";
import { fireDB } from "../../firebase/FirebaseConfiq";

const Faqs = () => {
  const [faqs, setFaqs] = useState([]);
  const [loading, setLoading] = useState(false);

  const getfaqstData = () => {
    setLoading(true);
    try {
      const q = query(collection(fireDB, "faqs"));
      const unsubscribe = onSnapshot(q, (querySnapshot) => {
        const faqsarray = [];
        querySnapshot.forEach((doc) => {
          faqsarray.push({ ...doc.data(), id: doc.id });
        });
        setFaqs(faqsarray);
        setLoading(false);
      });

      return unsubscribe;
    } catch (error) {
      console.error("Error fetching FAQs:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    const unsubscribe = getfaqstData();
    return () => unsubscribe && unsubscribe();
  }, []);

  return (
    <div>
      <section className="text-gray-400 UpSh">
        <div className="container px-5 py-24 mx-auto">
          <div className="text-center mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium text-center title-font text-gray-400 mb-4">
              Frequently Asked Questions
            </h1>
            <p className="text-base leading-relaxed xl:w-2/4 lg:w-3/4 mx-auto">
              The most common questions about how our business works and what we
              can do for you.
            </p>
          </div>
          <div className="flex flex-wrap lg:w-4/5 sm:mx-auto sm:mb-2 -mx-2">
            <div className="w-full lg:w-1/2 px-4 py-2">
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((faq) => (
                <details key={faq.id} className="mb-4 cursor-pointer">
                  <summary className="font-semibold bg-[#161616] rounded-md py-2 px-4">
                    {faq.questions}
                  </summary>
                  <span className="block mt-2 text-gray-300 px-4">
                    {faq.answers}
                  </span>
                </details>
              ))}
            </div>
            <div className="w-full lg:w-1/2 px-4 py-2">
              {faqs.slice(Math.ceil(faqs.length / 2)).map((faq) => (
                <details key={faq.id} className="mb-4 cursor-pointer">
                  <summary className="font-semibold bg-[#161616] rounded-md py-2 px-4">
                    {faq.questions}
                  </summary>
                  <span className="block mt-2 text-gray-300 px-4">
                    {faq.answers}
                  </span>
                </details>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Faqs;
