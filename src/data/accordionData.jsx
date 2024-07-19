import { RiDashboard3Fill } from "react-icons/ri";
import { BsFillBoxFill } from "react-icons/bs";
import { HiUserGroup } from "react-icons/hi";
import { TbChartDonutFilled } from "react-icons/tb";
import { PiPencilSimpleFill } from "react-icons/pi";
import { BsCalendar2CheckFill } from "react-icons/bs";
import { PiChatsCircleFill } from "react-icons/pi";
import { HiMiniInboxArrowDown } from "react-icons/hi2";
import { BsFillCalendarFill } from "react-icons/bs";
import { BsStars } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { PiCirclesFourFill } from "react-icons/pi";
import { RiLoginCircleFill } from "react-icons/ri";
import { FaCircleNodes } from "react-icons/fa6";
import { TbChartCircles } from "react-icons/tb";

export const accordionData1 = [
  {
    title: "Dashboard",
    icon: (
      <RiDashboard3Fill className="text-white bg-[#6366F1] rounded-full p-1 text-2xl mr-2" />
    ),
    content: ["Main", "Analytics", "Fintech"],
  },
  {
    title: "E-Commerce",
    icon: <BsFillBoxFill className="text-gray-500 text-2xl mr-2" />,
    content: [
      "Customers",
      "Orders",
      "Invoices",
      "Shop",
      "Shop 2",
      "Single Product",
      "Cart",
      "Cart 2",
      "Cart 3",
    ],
  },
  {
    title: "Community",
    icon: <HiUserGroup className="text-gray-500 text-2xl mr-2" />,
    content: ["Community"],
  },
  {
    title: "Finance",
    icon: <TbChartDonutFilled className="text-gray-500 text-2xl mr-2" />,
    content: ["Finance"],
  },
  {
    title: "Job Board",
    icon: <PiPencilSimpleFill className="text-gray-500 text-2xl mr-2" />,
    content: ["Job Board"],
  },
  {
    title: "Task",
    icon: <BsCalendar2CheckFill className="text-gray-500 text-2xl mr-2" />,
    content: ["Task"],
  },
  {
    title: "Messages",
    icon: <PiChatsCircleFill className="text-gray-500 text-2xl mr-2" />,
    content: [],
  },
  {
    title: "Inbox",
    icon: <HiMiniInboxArrowDown className="text-gray-500 text-2xl mr-2" />,
    content: [],
  },
  {
    title: "Calendar",
    icon: <BsFillCalendarFill className="text-gray-500 text-2xl mr-2" />,
    content: [],
  },
  {
    title: "Campaigns",
    icon: <BsStars className="text-gray-500 text-2xl mr-2" />,
    content: [],
  },
  {
    title: "Settings",
    icon: <IoMdSettings className="text-gray-500 text-2xl mr-2" />,
    content: ["My Account"],
  },
  {
    title: "Utility",
    icon: <PiCirclesFourFill className="text-gray-500 text-2xl mr-2" />,
    content: ["Roadmap"],
  },
];

export const accordionData2 = [
  {
    title: "Authentication",
    icon: <RiLoginCircleFill className="text-gray-500 text-2xl mr-2" />,
    content: ["Signin"],
  },
  {
    title: "Onboarding",
    icon: <FaCircleNodes className="text-gray-500 text-2xl mr-2" />,
    content: ["step1"],
  },
  {
    title: "Components",
    icon: <TbChartCircles className="text-gray-500 text-2xl mr-2" />,
    content: ["Button"],
  },
];
