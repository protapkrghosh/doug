import { useState } from "react";
import Container from "../Container/Container";
import { FaPlus, FaWindowMinimize } from "react-icons/fa6";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"

const Faq = () => {
  const [accordionOne, setAccordionOne] = useState(false);
  const [accordionTwo, setAccordionTwo] = useState(false);
  const [accordionThree, setAccordionThree] = useState(false);
  const [accordionFour, setAccordionFour] = useState(false);
  const [accordionFive, setAccordionFive] = useState(false);
  const [accordionSix, setAccordionSix] = useState(false);

  return (
    <div>
      <Container>
        <div className="text-center">
          <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] font-montserrat font-bold textShadow hidden md:block'>FAQS</h1>

          <h1 className='text-[#111] text-[28px] md:text-[60px] xl:text-[80px] font-montserrat font-bold textShadowSm block md:hidden'>FAQS</h1>

          <p className="text-[#333131] md:text-[24px] md:mb-14">Questions? Doug’s got answers.</p>
        </div>

        <Accordion type="single" defaultValue="item-1" collapsible className="lg:w-[75%] mx-auto">
          <AccordionItem value="item-1" className="relative">
            <AccordionTrigger onClick={() => setAccordionOne(!accordionOne)}>How Can I Get Some Doug?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionOne ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5 right-4 md:right-8">
                    <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                      <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>
          
          <AccordionItem value="item-2" className="relative">
            <AccordionTrigger onClick={() => setAccordionTwo(!accordionTwo)}>How Do I Stay Updated on Doug?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionTwo ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                    <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                    <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5  right-4 md:right-8">
                      <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>

          <AccordionItem value="item-3" className="relative">
            <AccordionTrigger onClick={() => setAccordionThree(!accordionThree)}>Can I Contribute to Doug’s Development?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionThree ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                    <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                    <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5 right-4 md:right-8">
                      <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>

          <AccordionItem value="item-4" className="relative">
            <AccordionTrigger onClick={() => setAccordionFour(!accordionFour)}>Is $Doug a Financial Investment?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionFour ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                    <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                    <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5 right-4 md:right-8">
                      <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>

          <AccordionItem value="item-5" className="relative">
            <AccordionTrigger onClick={() => setAccordionFive(!accordionFive)}>Why the Solana Blockchain?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionFive ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                    <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                    <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5 right-4 md:right-8">
                      <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>

          <AccordionItem value="item-6" className="relative">
            <AccordionTrigger onClick={() => setAccordionSix(!accordionSix)}>What is a Meme Coin?</AccordionTrigger>
            <AccordionContent>
              $Doug is exclusively available on the Solana Blockchain. To acquire $Doug, first, ensure you have a Solana-compatible wallet like Phantom or Solflare. Then, obtain $Dougthrough participating exchanges. Have some SOL for transaction fees.Avoid scammers by using Doug's contract address from this webpage.
            </AccordionContent>

            {
              accordionSix ? (
                <div>
                  <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center absolute top-3.5 right-4 md:right-8">
                    <FaWindowMinimize className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              ) : (
                <div>
                    <div className="w-9 h-9 bg-[#111] rounded-full flex justify-center items-center absolute top-3.5 right-4 md:right-8">
                      <FaPlus className="text-[#fff] text-[20px]" />
                  </div>
                </div>
              )
            }
          </AccordionItem>

        </Accordion>
      </Container>
    </div>
  );
};

export default Faq;
