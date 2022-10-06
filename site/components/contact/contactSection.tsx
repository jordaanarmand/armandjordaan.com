import React from "react";

interface ContactProps {}

const ContactSection: React.FC<ContactProps> = () => {
  return (
    <>
      <div className="bg-richLemon pt-16 pr-20 pl-20 pb-10">
        <div className="flex w-full flex-row space-x-40">
          <div
            className="h-10 w-44 flex-none bg-raisinBlack pl-2"
            style={{
              clipPath: "polygon(0% 100%, 0% 0%, 100% 0%, 100% 63%, 93% 100%)",
            }}
          >
            <span className="inline-block w-full align-middle font-blenderProBold text-4xl uppercase text-richLemon">
              contact
            </span>
          </div>
          <div className="grow">
            <form>
              <div className="flex flex-col">
                <input
                  required
                  className="w-72 border-b-2 border-raisinBlack bg-richLemon pb-2 text-raisinBlack"
                  type="email"
                  placeholder="Enter your email address"
                />
                <textarea
                  required
                  className="mt-5 h-20 w-72 border-2 border-raisinBlack bg-richLemon text-raisinBlack"
                  placeholder="Details"
                />
                <button
                  type="submit"
                  className="mt-5 h-10 w-72 border-2 border-gray-500 font-blenderProBold text-gray-500"
                >
                  SUBMIT
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactSection;
