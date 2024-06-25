import React from "react";

import { Link } from "react-router-dom";
import BlogsCard from "./BlogsCard.jsx";
import Img1 from "../../assets/blog.png";
import Img2 from "../../assets/blog1.png";
import Img3 from "../../assets/blog2.png";
import Img4 from "../../assets/blog3.png";
import Img5 from "../../assets/blog4.png";
import Img6 from "../../assets/blog6.png";

const BlogsData = [
  {
    id: 1,
    image: Img1,
    title: " Menu Score: How we cracked the Menu Code (and you can too!)",
    description:
      "Menu is one of the most important elements that defines a restaurant. Most restaurants tend to spend a disproportionate time creating a winning menu. In interactions with our restaurant partners as well, some questions we frequently hear are: “How do I make my menu more attractive? What changes can I make to my menu to improve orders from customers?” Hence, we have now compiled the best practices to help restaurant partners build an effective menu that appeals to new customers, help get better conversion, and help improve average order values. A good menu is visually appealing, easy to navigate and communicates the right value. The menu should ideally have high quality dish images, with accurate descriptions, justifiable prices charged by the restaurant partners and be one that is not too long or too repetitive. We recognize that each restaurant is unique and so are its challenges and accordingly this tool has been designed to help each of our restaurant partners with personalized recommendations. Our goal is to empower restaurant partners with the knowledge to make informed decisions that could drive growth. Menu Score helps restaurant partners to convert their menu by drilling down into three key areas:",
  },
  {
    id: 1,
    image: Img2,
    title: "Hackoween: Elevating cybersecurity resilience at Zomato through competitive challenges",
    description:
      "At Zomato, our tech teams are always working towards creating innovative solutions and ensuring we have adequate security measures in place that uphold them. This commitment led us to recently organize an event, ‘Capture The Flag’ (CTF), that was aimed at teaching security concepts to our developers in a practical and fun way. Taking learnings from our internal security audits and our active bug bounty program, it became evident that for building robust applications, developers required a thorough grasp of frequently encountered security weaknesses and that is why we created Hackoween – a security hackathon.",
  },
  {
    id: 1,
    image: Img3,
    title: "A Tale of Scale: Behind the Scenes at Food Way Tech for NYE 2023",
    description:
      "The Magnitude of New Year’s Eve On this day, every second counts, and every order is a celebration. This year, we didn’t just surpass expectations; we redefined them. On the technical front, our observability platform adeptly handled 2.2 billion active time series metrics, reaching a peak throughput of 17.8 million per second, showcasing robust performance during peak demand periods. Customers placed about 2 million orders from new restaurants they explored, highlighting adventurous palates and a vast variety of options on Zomato.",
  },
  {
    id: 1,
    image: Img4,
    title: "Unlocking performance, scalability, and cost-efficiency of Food Way’s Billing Platform by switching from TiDB to DynamoDB",
    description:
      "Considering the nature of the business, customer traffic is primarily concentrated during meal times, leading to notable differences in workload between peak and non-peak hours. Additionally, on special occasions like Diwali and New Year’s Eve, Zomato experiences massive traffic surges with significantly higher spikes compared to regular days. Therefore, it’s crucial for Zomato to select a database that ensures consistent low latency, regardless of scale, and possesses the capability to handle traffic spikes without the need for expensive overprovisioning during periods of lower activity.",
  },
  {
    id: 1,
    image: Img5,
    title: "How we increased our Food Way Restaurant Partner App speed by over 90%",
    description:
      "We are deeply committed to providing a seamless experience through our restaurant partner app, that enables our restaurant partners to efficiently handle incoming orders, streamline operations and have an elevated user experience with Food Way. Here’s everything that we did –We applied a straightforward rule to examine our overheads. Our assessment of solutions was centered around their return on investment and the level of effort demanded from our engineering team. With these criteria as our guiding principles, we began a significant journey of improvement, categorizing our work into 7 key areas:",
  },
  {
    id: 1,
    image: Img6,
    title: "Powering restaurant ads on Food Way via Machine Learning",
    description:
      "There’s a popular saying that ‘great ads are those which don’t feel like ads’. The statement holds true in every case, be it a television advertisement, a newspaper commercial, or a digital ad. In our case, it is the latter-most, wherein we show promoted restaurants to customers on our app. For example, when you visit a restaurant and ask the waiter what they would suggest the best. They ask you certain questions like your preference (veg/ non-veg), your spice tolerance, your preferred taste (sour/ sweet) and then come up with suggestions based on it. We aim for the same thing – to suggest dishes and restaurants that are relevant and unique.  ",
  },
];

const BlogsComp = () => {
 

  return (
    <div>
      <div className="container">
        <h1
          className="my-8 border-l-8
        border-primary py-2 pl-2
        text-3xl font-bold"
        >
          Our latest Blogs
        </h1>
        <div
          className="grid grid-cols-1 gap-4
         sm:grid-cols-2 md:grid-cols-3"
        >
          {BlogsData?.map((item, index) => (
            <BlogsCard key={index} {...item} />
          ))}
        </div>

        <div className="mb-[-200px] md:mb-[-150px] flex justify-center sm:justify-start md:justify-center lg:justify-end xl:justify-end 2xl:justify-end mt-4">
          <Link to="/blognext">
            <button className="mb-5 inline-block bg-secondary text-white hover:bg-transparent hover:border-secondary hover:text-secondary font-size-2 border border-secondary px-5 py-1 sm:ml-2 md:ml-0 lg:ml-4 xl:ml-4 2xl:ml-4 mt-6">
              Next
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default BlogsComp;
