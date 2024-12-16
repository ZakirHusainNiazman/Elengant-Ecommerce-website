import sofa1 from "./assets/products-images/sofa1.svg";
import sofa2 from "./assets/products-images/sofa2.svg";
import sofa3 from "./assets/products-images/sofa3.svg";
import lamp1 from "./assets/products-images/lamp1.svg";
import lamp2 from "./assets/products-images/lamp2.svg";
import lamp3 from "./assets/products-images/lamp3.svg";
import pillow1 from "./assets/products-images/pillow1.svg";
import pillow2 from "./assets/products-images/pillow2.svg";
import smallChair1 from "./assets/products-images/small-chaire1.svg";
import trayTable1 from "./assets/products-images/tray-table1.svg";

import drawer1 from "./assets/products-images/drawer1.svg";
import bucket1 from "./assets/products-images/bucket1.svg";

import profileImage1 from "./assets/product-images/profile-image1.svg";

export const DUMMY_PRODUCTS = [
  {
    id: "p1",
    images: [pillow1, pillow1, pillow1],
    title: "Off-white Pillow",
    colors: [
      { image: pillow1, name: "White" },
      { image: pillow1, name: "Cream" },
      { image: pillow2, name: "Beige" },
    ],
    category: "living",
    date: "11/29/2024",
    price: 299.99,
    quantity: 10,
    discount: 10,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 3,
    isLiked: true,
    measurements: {
      width: 20,
      height: 1.5,
      length: 21.1,
      weight: 7.5,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I didn't like it much. Could be better.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
    ],
  },
  {
    id: "p2",
    images: [pillow2, pillow2, pillow2],
    title: "Modern Pillow",
    colors: [
      { image: pillow2, name: "Blue" },
      { image: pillow2, name: "Gray" },
      { image: pillow2, name: "Black" },
    ],
    category: "living",
    date: "11/22/2024",
    price: 89.99,
    quantity: 10,
    discount: 10,
    status: "NEW",
    description:
      "A modern pillow design that offers both style and comfort, perfect for any living space.",
    details:
      "This modern pillow is not only stylish but also comfortable. Designed to enhance any living space.",
    stars: 5,
    isLiked: false,
    measurements: {
      width: 18,
      height: 2,
      length: 20,
      weight: 6.5,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "John Doe",
        stars: 4,
        body: "Great product, but delivery was delayed.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Is this available in larger sizes?",
        answer: "No, only the current size is available.",
      },
    ],
  },
  {
    id: "p3",
    images: [lamp1, lamp1],
    title: "Off-white Pillow",
    colors: [
      { image: lamp1, name: "Brass" },
      { image: lamp1, name: "Gray" },
      { image: lamp1, name: "Clear" },
    ],
    category: "living",
    date: "11/19/2024",
    price: 129.99,
    quantity: 10,
    discount: 30,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, spread a soft mood light that creates exciting shadows on walls and ceilings.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: true,
    measurements: {
      width: 200,
      height: 1.5,
      length: 21.1,
      weight: 7.5, // Weight converted to a single number for simplicity
      packages: 22,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I didn't like it much. Could be better.",
      },
      {
        id: "r3",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 4,
        body: "Great product, but delivery was delayed.",
      },
      {
        id: "r14",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 2,
        body: "It was fine, but I expected more.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
    ],
  },
  {
    id: "p4",
    images: [lamp2, lamp2],
    title: "Off-white Pillow",
    colors: [
      { image: lamp2, name: "Brass" },
      { image: lamp2, name: "Gray" },
      { image: lamp2, name: "Clear" },
    ],
    category: "living",
    date: "11/19/2024",
    price: 129.99,
    quantity: 10,
    discount: 0,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, spread a soft mood light that creates exciting shadows on walls and ceilings.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 0,
    isLiked: true,
    measurements: {
      width: 20,
      height: 1.5,
      length: 21.1,
      weight: 7.5, // Weight converted to a single number for simplicity
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I didn't like it much. Could be better.",
      },
      {
        id: "r3",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 4,
        body: "Great product, but delivery was delayed.",
      },
      {
        id: "r14",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 2,
        body: "It was fine, but I expected more.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, but you will have to pay in advance to get your product ready.",
      },
    ],
  },
  {
    id: "p5",
    images: [lamp1, lamp1],
    title: "Luxurious Lamp",
    colors: [
      { image: lamp3, name: "White" },
      { image: lamp3, name: "Gray" },
      { image: lamp3, name: "Black" },
    ],
    category: "living",
    date: "12/15/2024",
    price: 120.0,
    quantity: 15,
    discount: 10,
    status: "NEW",
    description:
      "Stylish and modern lamp to brighten up your space with its elegant and sleek design.",
    details:
      "The lamp features adjustable brightness and is made with durable materials for long-lasting use.",
    stars: 4.5,
    isLiked: true,
    measurements: {
      width: 25,
      height: 10,
      length: 25,
      weight: {
        lb: 3,
        oz: 8,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Alice Johnson",
        stars: 5,
        body: "This lamp is amazing! The design fits perfectly with my living room.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "John Doe",
        stars: 4,
        body: "Good product, but the price could be a little lower.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Does it come with a bulb?",
        answer:
          "Yes, the lamp comes with a complimentary energy-efficient bulb.",
      },
      {
        id: "q2",
        question: "Is the light adjustable?",
        answer: "Yes, the brightness can be adjusted to suit your needs.",
      },
    ],
  },
  {
    id: "p6",
    images: [sofa1, sofa1],
    title: "Cozy Sofa",
    colors: [
      { image: sofa1, name: "Beige" },
      { image: sofa1, name: "Light Brown" },
      { image: sofa1, name: "Gray" },
    ],
    category: "living",
    date: "11/28/2024",
    price: 199.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: false,
    measurements: {
      width: 24,
      height: 2.5,
      length: 25,
      weight: {
        lb: 9,
        oz: 15,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Mike Miller",
        stars: 4,
        body: "Very comfortable, but the fabric could be more stain-resistant.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color?",
        answer:
          "Yes we can, but you will have to pay in advance to get your product customized.",
      },
      {
        id: "q2",
        question: "Is the sofa easy to assemble?",
        answer:
          "Yes, the sofa comes with easy-to-follow instructions for quick assembly.",
      },
    ],
  },
  {
    id: "p7",
    images: [drawer1, drawer1, drawer1],
    title: "Modern Drawer",
    colors: [
      { image: drawer1, name: "Off-white" },
      { image: drawer1, name: "Beige" },
      { image: drawer1, name: "Gray" },
    ],
    category: "living",
    date: "11/29/2014",
    price: 89.99,
    quantity: 20,
    discount: 15,
    status: "NEW",
    description:
      "A sleek and modern drawer unit that provides a perfect storage solution for your space.",
    details:
      "The drawers slide smoothly, and the elegant design adds a touch of sophistication to any room.",
    stars: 4,
    isLiked: true,
    measurements: {
      width: 23,
      height: 2,
      length: 23,
      weight: {
        lb: 8,
        oz: 12,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Liam Gray",
        stars: 4,
        body: "Very practical and looks great, but it was a bit challenging to assemble.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color?",
        answer:
          "Yes we can, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q2",
        question: "Is the drawer unit stable?",
        answer:
          "Yes, it is made from sturdy materials to ensure long-lasting use.",
      },
    ],
  },
  {
    id: "p8",
    images: [lamp3, lamp3],
    title: "Off-white Pillow",
    colors: [
      { image: lamp3, name: "Off-white" },
      { image: lamp3, name: "Light Beige" },
      { image: lamp3, name: "Gray" },
    ],
    category: "living",
    date: "1/29/2024",
    price: 129.99,
    quantity: 10,
    discount: 100,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 4,
    isLiked: false,
    measurements: {
      width: 22,
      height: 2,
      length: 22,
      weight: {
        lb: 8,
        oz: 10,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Emily Davis",
        stars: 4,
        body: "Lovely lamp, but the base is a little bit heavier than I expected.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color?",
        answer:
          "Yes, we can, but you will have to pay in advance to get your product ready.",
      },
      {
        id: "q2",
        question: "Is the light adjustable?",
        answer:
          "Yes, the light intensity can be adjusted with the built-in dimmer.",
      },
    ],
  },
  {
    id: "p9",
    images: [lamp3, lamp3],
    title: "Off-white Pillow",
    colors: [
      { image: bucket1, name: "Off-white" },
      { image: bucket1, name: "Light Beige" },
      { image: bucket1, name: "Gray" },
    ],
    category: "living",
    date: "1/29/2024",
    price: 149.99,
    quantity: 10,
    discount: 75,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: false,
    measurements: {
      width: 22,
      height: 2,
      length: 22,
      weight: {
        lb: 8,
        oz: 10,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Emily Davis",
        stars: 5,
        body: "The design is beautiful, and it casts a soft, warm glow in my room.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color?",
        answer:
          "Yes, we can customize the color as per your request, but it will take some time.",
      },
      {
        id: "q2",
        question: "Is the light adjustable?",
        answer:
          "Yes, it has a dimmer function for easy adjustment of brightness.",
      },
    ],
  },
  {
    id: "p10",
    images: [sofa2, sofa2, sofa2],
    title: "Cozy Sofa",
    colors: [
      { image: sofa2, name: "Beige" },
      { image: sofa2, name: "Light Gray" },
      { image: sofa2, name: "Dark Blue" },
    ],
    category: "Dinning",
    date: "11/24/2024",
    price: 299.99, // Adjusted to be within 50-1000
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLIked: true,
    measurements: {
      width: 20,
      height: 1.5,
      length: 21.1,
      weight: {
        lb: 7,
        oz: 8,
      },
      packages: 1,
    },
    custumercustumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body: "I bought it 3 weeks ago and now come back just to say 'Not as expected'.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body: "I bought it 3 weeks ago and now come back just to say 'Good product'.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body: "I bought it 3 weeks ago and now come back just to say 'Not great'.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
    ],
  },
  {
    id: "p11",
    images: [sofa3, sofa3, sofa3],
    title: "Cozy Sofa",
    colors: [
      { image: sofa3, name: "Dark Gray" },
      { image: sofa3, name: "Light Beige" },
      { image: sofa3, name: "Ocean Blue" },
    ],
    category: "Dinning",
    date: "11/22/2024",
    price: 350.99, // Adjusted to be within 50-1000
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLIked: false,
    measurements: {
      width: 20,
      height: 1.5,
      length: 21.1,
      weight: {
        lb: 7,
        oz: 8,
      },
      packages: 1,
    },
    custumercustumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say 'Awesome Product'. I really enjoy it.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body: "I bought it 3 weeks ago and now come back just to say 'Not as expected'.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body: "I bought it 3 weeks ago and now come back just to say 'Good product'.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body: "I bought it 3 weeks ago and now come back just to say 'Not great'.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can, but you'll have to pay in advance to get the product ready.",
      },
    ],
  },
  {
    id: "p12",
    images: [smallChair1, smallChair1, smallChair1],
    title: "Black Brow Side Table",
    colors: [
      { image: smallChair1, name: "Off-White" },
      { image: smallChair1, name: "Black" },
      { image: smallChair1, name: "Gray" },
    ],
    category: "Dining",
    date: "11/23/2024",
    price: 99.99, // updated to be between 50 and 1000
    quantity: 10,
    discount: 70,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: false,
    measurements: {
      width: 24, // updated measurements
      height: 2,
      length: 24,
      weight: {
        lb: 9,
        oz: 4,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 4,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 2,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p13",
    images: [trayTable1, trayTable1, trayTable1, trayTable1],
    title: "Black Tray Table",
    colors: [
      { image: trayTable1, name: "Black" },
      { image: trayTable1, name: "White" },
      { image: trayTable1, name: "Natural Wood" },
    ],
    category: "Dining",
    date: "11/21/2024",
    price: 89.99, // updated to be between 50 and 1000
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: false,
    measurements: {
      width: 22, // updated measurements
      height: 2,
      length: 22,
      weight: {
        lb: 8,
        oz: 5,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 4,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 2,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p14",
    images: [bucket1, bucket1, bucket1, bucket1],
    title: "Bamboo Basket",
    colors: [
      { image: bucket1, name: "Natural Bamboo" },
      { image: bucket1, name: "Dark Bamboo" },
      { image: bucket1, name: "Light Bamboo" },
    ],
    category: "bathroom",
    date: "11/21/2024",
    price: 79.99, // updated to be between 50 and 1000
    quantity: 10,
    discount: 20,
    status: "NEW",
    description:
      "With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
    isLiked: true,
    measurements: {
      width: 22, // updated measurements
      height: 2, // updated measurements
      length: 23,
      weight: {
        lb: 8,
        oz: 2,
      },
      packages: 1,
    },
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 5,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 1,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 4,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        customerName: "Sofia Harvetz",
        stars: 2,
        body: "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in a different color?",
        answer:
          "Yes, we can. But you will have to pay in advance in order to get your product ready.",
      },
    ],
  },
];

export function calculatePrice(price, discount) {
  // Ensure discount is a valid number
  if (discount === 0) {
    return price; // No discount applied
  }

  const newPrice = price * (1 - discount / 100);

  // Round to two decimal places
  return Math.round(newPrice * 100) / 100;
}



export function formatter(amount) {
  
  const validAmount = isNaN(amount) ? 0 : parseFloat(amount);
  const formattedAmount = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "USD",
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(validAmount);

  return formattedAmount;
}
