import HText from "@/shared/HText";
import { BenefitTypes, SelectedPage } from "@/shared/types";
import { AcademicCapIcon, HomeModernIcon, UserGroupIcon } from "@heroicons/react/24/solid";
import { motion } from "framer-motion";
import Benefit from "./Benefit";
import ActionButton from "@/shared/ActionButton";
import BenefitsPageGraphic from '@/assets/BenefitsPageGraphic.png'

type Props = {
  setSelectedPage: (value: SelectedPage) => void;
}

const benefits: Array<BenefitTypes> = [
  {
    icon: <HomeModernIcon className="h-6 w-6" />,
    title: "State of the Art Facilities",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam delectus cupiditate molestiae quibusdam dolorum odit repudiandae temporibus, in nobis maxime!"
  },
  {
    icon: <UserGroupIcon className="h-6 w-6" />,
    title: "100's of Diverse Classes",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam delectus cupiditate molestiae quibusdam dolorum odit repudiandae temporibus, in nobis maxime!"
  },
  {
    icon: <AcademicCapIcon className="h-6 w-6" />,
    title: "Expert and Pro Trainers",
    description: "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Aperiam delectus cupiditate molestiae quibusdam dolorum odit repudiandae temporibus, in nobis maxime!"
  }
]

const container = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.2 }
  }
}

const Benefits = ({ setSelectedPage }: Props) => {
  return (
    <section id="benefits" className="mx-auto min-h-full w-5/6 py-20">
      <motion.div className="" onViewportEnter={() => setSelectedPage(SelectedPage.Home)}>
        <motion.div className="md:my-5 md:w-3/5" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{
          hidden: { opacity: 0, x: -50 },
          visible: { opacity: 1, x: 0 }
        }}>
          <HText>MORE THAN JUST GYM.</HText>
          <p className="my-5 text-sm">We provide world class fitness equipment, trainers and classes to get you to your ultimate fitness goals with ease. We provide true care into each and every member.</p>
        </motion.div>
        <motion.div className="md:flex items-center justify-between gap-8 mt-5"
          initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} variants={container}>
          {
            benefits.map((benefit: BenefitTypes) => (
              <Benefit key={benefit.title} icon={benefit.icon} title={benefit.title} description={benefit.description} setSelectedPage={setSelectedPage} />
            ))
          }
        </motion.div>
        <div className="mt-16 items-center justify-between gap-20 md:mt-28 md:flex">
          <img src={BenefitsPageGraphic} alt="benefits-page-graphic" className="mx-auto" />
          <div className="">
            <div className="relative">
              <div className="before:absolute before:-top-20 before:-left-20 before:z-[1] before:content-abstractwaves">
                <motion.div className="" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ duration: 0.5 }} variants={{
                  hidden: { opacity: 0, x: -50 },
                  visible: { opacity: 1, x: 0 }
                }}>
                  <HText>MILLIONS OF HAPPY MEMBERS GETTING{" "}<span className="text-primary-500">FIT</span>.
                  </HText>
                </motion.div>
              </div>
            </div>

            <motion.div className="" initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.5 }} transition={{ delay: 0.2, duration: 0.5 }} variants={{
              hidden: { opacity: 0, x: 50 },
              visible: { opacity: 1, x: 0 }
            }}>
              <p className="my-5">Lorem ipsum dolor, sit amet consectetur adipisicing elit. Deleniti nemo consectetur ea beatae eligendi laborum explicabo rem odio rerum culpa consequatur modi, expedita non id incidunt, odit cupiditate cum deserunt earum aspernatur voluptatem enim voluptas adipisci. Accusamus ratione, odio saepe quae sapiente est illum.</p>
              <p className="mb-5">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolor placeat, quam rem itaque facilis assumenda necessitatibus voluptatem perspiciatis explicabo non magnam unde voluptatum saepe aliquid quos sint consequuntur? Soluta, distinctio?</p>
            </motion.div>

            <div className="relative mt-16">
              <div className="before:absolute before:-bottom-20 before:right-40 before:z-[-1] before:content-sparkles">
                <ActionButton setSelectedPage={setSelectedPage}>Join Now</ActionButton>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  )
}
export default Benefits