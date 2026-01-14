export default function WhyChooseUs() {
  const features = [
    {
      title: "Handpicked Tours",
      desc: "Carefully selected destinations and experiences for the best value.",
    },
    {
      title: "Best Price Guarantee",
      desc: "We offer competitive pricing with no hidden costs.",
    },
    {
      title: "24/7 Customer Support",
      desc: "Our support team is always ready to help you anytime.",
    },
    {
      title: "Secure Booking",
      desc: "Safe and secure payments with trusted technology.",
    },
  ];

  return (
    <section className='py-16'>
      <div className='mx-auto px-6 max-w-6xl'>
        <div className='mb-12 text-center'>
          <h1 className='bg-clip-text bg-linear-to-r from-blue-500 via-purple-500 to-green-500 text-transparent text-4xl text-center'>
            Why Choose Us
          </h1>
          <p className='mt-3 text-gray-600'>
            We make your travel experience unforgettable
          </p>
        </div>

        <div className='gap-6 grid sm:grid-cols-2 lg:grid-cols-4'>
          {features.map((item) => (
            <div
              key={item.title}
              className='hover:shadow-md p-6 border rounded-xl text-center transition'
            >
              <h3 className='mb-2 font-semibold text-lg'>{item.title}</h3>
              <p className='text-gray-600 text-sm'>{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
