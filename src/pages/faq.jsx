import { InputField } from '@/components/InputField';
import { Button } from '@mui/material';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import { memo, useState } from 'react';
import { BiMinus, BiPlus } from 'react-icons/bi';

import Layout from '../layouts/Layout';

const FAQ_LIST = [
  {
    id: 1,
    que: 'Suspendisse ultrices pharetra libero sed interdum.',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 2,
    que: 'Fusce molestie condimentum facilisis.',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 3,
    que: 'Quisque quis nunc quis urna tempor lobortis vel non orci.',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 4,
    que: 'Suspendisse ultrices pharetra libero sed interdum.',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
  {
    id: 5,
    que: 'Suspendisse ultrices pharetra libero sed interdum.',
    ans: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget.',
  },
];

const Faq = () => {
  const [open, setOpen] = useState(null);

  const handleChange = (id) => {
    if (open === id) {
      setOpen(null);
    } else {
      setOpen(id);
    }
  };

  return (
    <Layout>
      <div className="mx-auto my-6">
        <div className="grid grid-cols-5 gap-6 lg:gap-5">
          <div className="flex col-span-5 lg:col-span-3 flex-col gap-5 lg:gap-10">
            <h1 className="font-semibold lg:text-32px leading-10 text-gray-900 sm:text-2xl sm:text-left text-xl text-center">
              Frequently Asked Questions
            </h1>

            <div className="flex flex-col gap-5">
              {FAQ_LIST.map(({ ans, id, que }) => (
                <Accordion
                  key={id}
                  className={`!border-gray-100 bg-white border !overflow-hidden !rounded !shadow-none !h-auto !p-0 !m-0`}
                  onChange={() => handleChange(id)}
                  expanded={open === id}
                >
                  <AccordionSummary
                    expandIcon={
                      open === id ? (
                        <BiMinus className="text-2xl text-white" />
                      ) : (
                        <BiPlus className="text-2xl" />
                      )
                    }
                    className={`${
                      open === id ? '!bg-primary-500 !text-white' : 'bg-white'
                    } !p-4 md:!py-5 md:!px-6 !text-gray-900`}
                  >
                    <p className="font-medium leading-130 text-base">{que}</p>
                  </AccordionSummary>

                  <AccordionDetails className="!px-6">
                    <p className="text-sm font-normal leading-5 text-gray-700">
                      {ans}
                    </p>
                  </AccordionDetails>
                </Accordion>
              ))}
            </div>
          </div>

          <div className="p-6 lg:p-8 col-span-5 bg-warning-100 h-fit flex flex-col gap-6 lg:col-span-2 rounded xs:w-100">
            <div>
              <h3 className="lg:text-lg font-medium leading-6 mb-3 text-gray-900">
                Don’t find your answer, Ask for support.
              </h3>
              <p className="lg:text-sm font-normal leading-5 text-gray-700">
                Interdum et malesuada fames ac ante ipsum primis in faucibus.
                Sed molestie accumsan dui, non iaculis primis in faucibu raesent
                eget sem purus.
              </p>
            </div>

            <form className="flex flex-col gap-6">
              <div className="flex flex-col gap-3">
                <InputField
                  id="email"
                  label="Email Address"
                  variant="outlined"
                  name="email"
                  type="email"
                  className="bg-white"
                />

                <InputField
                  id="sub"
                  label="Subject"
                  variant="outlined"
                  name="subject"
                  type="text"
                  className="bg-white"
                />

                <InputField
                  id="msg"
                  label="Message (Optional)"
                  variant="outlined"
                  name="msg"
                  type="text"
                  className="bg-white"
                  isMultiline={true}
                  minRows={3}
                  maxRows={3}
                />
              </div>

              <Button
                type="submit"
                className="!w-fit !py-3 !px-4 !font-public-sans !text-base !font-semibold !leading-140 !rounded !bg-primary-500 !text-white !hover:bg-primary-500/90"
              >
                Send message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default memo(Faq);
