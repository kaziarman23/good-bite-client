import PieChart from "../../Components/PieChart/PieChart";

const OurImpact = () => {
  return (
    <div className="w-4/5 h-full mx-auto text-white space-y-5">
      {/* title content */}
      <div>
        <h1 className="text-2xl text-center font-bold">Our Impact</h1>
        <h4 className="text-center">
          Fighting Hunger & Reducing Food Waste Together
        </h4>
      </div>
      <p className="text-left">
        At Good Bite, we are committed to making sure that no food goes to
        waste, and no one in our community goes hungry. <br /> Here’s a snapshot
        of our work so far:
      </p>
      <div className="grid grid-cols-1 gap-3 xl:grid-cols-2 xl:gap-2">
        <div className="w-full h-full space-y-5">
          <h1 className="text-2xl text-center p-2">Food Rescued & Shared</h1>
          <p>
            <span className="font-bold">Meals shared: </span> Thanks to the
            generosity of local restaurants, grocery stores, and community
            members, we have successfully redistributed over 7,500 kg (16,500
            lbs) of surplus food to families in need. This includes fresh
            produce, packaged goods, and prepared meals that would have
            otherwise been wasted.
          </p>
          <p>
            <span className="font-bold">Local food waste: </span>
            Our platform has helped local businesses reduce their food waste by
            more than half, ensuring that edible food goes to those who need it
            most rather than ending up in landfills.
          </p>
        </div>
        <div className="w-full h-full space-y-5">
          <h1 className="text-2xl text-center p-2">Helping Local Families</h1>
          <p>
            <span className="font-bold">Families served: </span> Through our
            partnerships with food banks and community kitchens, we have
            provided nutritious meals and essential groceries to more than 2,500
            families facing food insecurity this year alone.
          </p>
          <p>
            <span className="font-bold">Special focus on children: </span>
            We’ve made it a priority to support vulnerable populations,
            distributing healthy food packages to over 1,200 children and 800
            seniors who struggle with access to regular meals.
          </p>
        </div>
        <div className="w-full h-full space-y-5">
          <h1 className="text-2xl text-center p-2">Partnering for Good</h1>
          <p>
            <span className="font-bold">Local businesses partnered: </span>
            From cafes and restaurants to farms and supermarkets, we’ve teamed
            up with over 40 businesses to collect surplus food and redistribute
            it to those in need.
          </p>
          <p>
            <span className="font-bold">Volunteers powering change: </span>
            With the support of 200+ dedicated volunteers, we’ve been able to
            efficiently collect, sort, and deliver food to local charities and
            directly to individuals in need.
          </p>
        </div>
        <div className="w-full h-full space-y-5">
          <h1 className="text-2xl text-center p-2">
            Recent Activity: A Successful Food Drive
          </h1>
          <p>
            <span className="font-bold">Community Food Drive Event: </span> Last
            month, we hosted a food drive where over 1,000 kg (2,200 lbs) of
            food was donated by community members in just two days! This food
            was immediately redistributed to 300 families in our area, providing
            them with fresh meals for the week.
          </p>
          <p>
            <span className="font-bold">Supporting Crisis Relief: </span>
            During a recent local emergency, we stepped up to provide immediate
            food support, delivering over 500 emergency food kits to displaced
            families, ensuring they had access to basic essentials during tough
            times.
          </p>
        </div>
        <div className="w-full h-full">
          <PieChart />
        </div>

        {/* chart description */}
        <div className="w-full h-full space-y-5">
          <h1 className="text-2xl text-center p-2">
            Food Source Contributions - October 2024
          </h1>
          <p>
            The pie chart illustrates the food contributions from various
            sources for October 2024, as part of the community initiative aimed
            at redistributing surplus food to children and people in need. This
            month, the community successfully collected and donated a total of
            2,500 meals, which were distributed to local families and
            individuals facing food insecurity.
          </p>
          <p>
            <span className="font-bold">
              The food came from four primary sources:
            </span>{" "}
            restaurants, cafes, homes, and shops.
          </p>
          <p>
            <span className="font-bold">1. Restaurants: </span>
            Contributing 35% of the total food collected, restaurants donated
            approximately 875 meals. This includes prepared dishes and excess
            ingredients that were close to expiration but still in perfect
            condition for consumption. Restaurant donations make up the largest
            share, providing ready-to-eat meals that can be immediately
            distributed to those in need.
          </p>
          {/*  */}

          <p>
            <span className="font-bold">2. Cafes: </span>
            Cafes donated around 15% of the total, equating to 375 meals. These
            contributions include baked goods, sandwiches, and beverages that
            are often nearing the end of their display life but remain fresh and
            safe to eat. Although smaller in quantity compared to restaurants,
            cafes provide a steady flow of nourishing food items.
          </p>
          <p>
            <span className="font-bold">3. Homes: </span>
            ndividual households contributed 30% of the total, or about 750
            meals. Families in the community participated by donating leftovers
            from events, homemade meals, and non-perishable food items. This
            emphasizes the grassroots nature of the initiative, where everyday
            citizens are encouraged to reduce waste and help those in need.
          </p>
          <p>
            <span className="font-bold">4. Shops: </span>
            Local shops, such as grocery stores and bakeries, made up 20% of the
            contributions, donating around 500 meals. These donations consist of
            fruits, vegetables, bread, and other fresh products that were close
            to their best-before dates. Shops provide an essential variety of
            nutritious food, ensuring that balanced and healthy meals are
            available for distribution.
          </p>
        </div>
      </div>
    </div>
  );
};

export default OurImpact;
