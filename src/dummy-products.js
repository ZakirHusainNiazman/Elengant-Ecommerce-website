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
    colors: {
      images: [pillow1, pillow1, pillow2],
    },
    price: 129.99,
    quantity: 10,
    discount: 0,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 3,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p2",
    images: [pillow2, pillow2, pillow2],
    title: "Off-white Pillow",
    colors: {
      images: [pillow1, pillow1, pillow2],
    },
    price: 129.99,
    quantity: 10,
    discount: 10,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p3",
    images: [lamp1, lamp1],
    title: "Off-white Pillow",
    colors: {
      images: [lamp1, lamp1, lamp1],
    },
    price: 129.99,
    quantity: 10,
    discount: 30,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p4",
    images: [lamp2, 2],
    title: "Off-white Pillow",
    colors: {
      images: [lamp2, lamp2, lamp2],
    },
    price: 129.99,
    quantity: 10,
    discount: 0,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 0,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p5",
    images: [lamp3, lamp3],
    title: "Off-white Pillow",
    colors: {
      images: [lamp3, lamp3, lamp3],
    },
    price: 129.99,
    quantity: 10,
    discount: 30,
    status: "NEW",
    description:
      "Like small jewels in shiny brass and gray clear glass, pread a soft mood light that creates exciting shadows on walls and ceilings",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 4,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p6",
    images: [drawer1, drawer1, drawer1],
    title: "Off-white Pillow",
    colors: {
      images: [drawer1, drawer1, drawer1],
    },
    price: 129.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p7",
    images: [sofa1, sofa1, sofa1],
    title: "Cozy Sofa",
    colors: {
      images: [sofa1, sofa1, sofa1],
    },
    price: 129.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p8",
    images: [sofa2, sofa2, sofa2],
    title: "Cozy Sofa",
    colors: {
      images: [sofa2, sofa2, sofa2],
    },
    price: 129.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p9",
    images: [sofa3, sofa3, sofa3],
    title: "Cozy Sofa",
    colors: {
      images: [sofa3, sofa3, sofa3],
    },
    price: 129.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Easy transportation was the goal when we created this comfy loveseat with durable beige polyester fabric.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p10",
    images: [smallChair1, smallChair1, smallChair1],
    title: "Black Brow Side table",
    colors: {
      images: [smallChair1, smallChair1, smallChair1],
    },
    price: 129.99,
    quantity: 10,
    discount: 70,
    status: "NEW",
    description:
      "Super-soft cushion cover in off-white with a tactile pattern that enhances the different tones in the pile and base.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p11",
    images: [trayTable1, trayTable1, trayTable1, trayTable1],
    title: "Black Tray table",
    colors: {
      images: [trayTable1, trayTable1, trayTable1, trayTable1],
    },
    price: 129.99,
    quantity: 10,
    discount: 50,
    status: "NEW",
    description:
      "Buy one or buy a few and make every space where you sit more convenient. Light and easy to move around with removable tray top, handy for serving snacks.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes. You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes. You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
  {
    id: "p12",
    images: [bucket1, bucket1, bucket1, bucket1],
    title: "Bamboo Basket",
    colors: {
      images: [bucket1, bucket1, bucket1, bucket1],
    },
    price: 129.99,
    quantity: 10,
    discount: 20,
    status: "NEW",
    description:
      "With its soft shape and color, this spacious basket is just as decorative wherever you choose to put it.",
    details:
      "You can use the removable tray for serving. The design makes it easy to put the tray back after use since you place it directly on the table frame without having to fit it into any holes.",
    stars: 5,
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
    custumerReviews: [
      {
        id: "r1",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 5,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r2",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 1,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r3",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 4,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
      {
        id: "r14",
        image: profileImage1,
        custumerName: "Sofia Harvetz",
        stars: 2,
        body:
          "I bought it 3 weeks ago and now come back just to say “Awesome Product”. I really enjoy it. At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupt et quas molestias excepturi sint non provident.",
      },
    ],
    questions: [
      {
        id: "q1",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q2",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q3",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
      {
        id: "q4",
        question: "Can I get this in different color",
        answer:
          "Yes we can But your will have to pay in advance in order to get your product ready.",
      },
    ],
  },
];

export function calculatePrice(price, discount) {
  if (discount === 0) {
    return price;
  }

  var newPrice = price * (1 - discount / 100);

  return newPrice.toFixed(2);
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
