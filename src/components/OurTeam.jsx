import React from "react";

const teamMembers = [
  {
    name: "Michael Brown",
    role: "Chief Executive Officer",
    img: "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/elementor/thumbs/seo-team-pro-8-r034dccml5je8k6uhd6n6n3lfzm6058lw666fry0mw.jpg",
  },
  {
    name: "William Young",
    role: "Link Building Specialist",
    img: "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/elementor/thumbs/seo-team-pro-2-r034cz6vxh1dq0pym7hv7qf54lf10dsd6d1dpwhj20.jpg",
  },
  {
    name: "Amelia Robinson",
    role: "Content SEO Strategist",
    img: "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/elementor/thumbs/seo-team-pro-4-r034d3w2vn7tc2j4urj0278g3irv2vb0v0at4aak6w.jpg",
  },
  {
    name: "Ava Martinez",
    role: "Technical SEO Expert",
    img: "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/elementor/thumbs/seo-team-pro-1-r034cwddcyxir6u22o9zi94rcfsxdah65z2xa2lpko.jpg",
  },
  {
    name: "Sophia Miller",
    role: "SEO Manager",
    img: "https://wordpress.zozothemes.com/seoinux/wp-content/uploads/sites/33/elementor/thumbs/seo-team-pro-7-r034dagy7hgtlc9kscde1nko97vfkr157wv7h80szc.jpg",
  },
];

const OurTeam = () => {
  return (
    <section
      className="w-full bg-[#181210] py-16 px-4 text-white relative"
      style={{
        background: "radial-gradient(ellipse at top, #2d1808 0%, #181210 80%)",
      }}
    >
      <div
        className="max-w-4xl mx-auto text-center mb-12"
        data-aos="fade-up"
        data-aos-duration="1000"
      >
        <h2 className="text-white text-4xl font-semibold uppercase tracking-wide mb-4   flex items-center justify-center gap-2">
          Our Team
        </h2>
        <p className="text-xl md:text-xl  text-white mb-4">
          Meet Our Digital Marketing Professional Experts
        </p>
      </div>
      <div className="flex flex-wrap justify-center gap-y-12 gap-x-8">
        {teamMembers.map((member, idx) => (
          <div
            key={idx}
            className="flex flex-col items-center w-56"
            data-aos="fade-up"
            data-aos-delay={200 + idx * 150}
            data-aos-duration="900"
          >
            <div className="w-28 h-28 rounded-full overflow-hidden mb-4 bg-gray-100 flex items-center justify-center">
              <img
                src={member.img}
                alt={member.name}
                className="w-full h-full object-cover"
                draggable={false}
              />
            </div>
            <h3 className="text-lg font-semibold text-white">{member.name}</h3>
            <p className="text-sm text-orange-500 mt-1">{member.role}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurTeam;
