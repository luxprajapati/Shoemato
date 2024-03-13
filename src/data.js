const products = [
  {
    id: 1,
    name: "Nike Revolution 7",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 3695.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/745c32f2-8e2e-49cd-9f61-ea67c93b2c2c/revolution-7-road-running-shoes-dC34tK.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/cd26201a-5008-48d1-846d-fc5160902bf0/revolution-7-road-running-shoes-dC34tK.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b454edec-502f-48e5-b8c5-3d5bbcc346b0/revolution-7-road-running-shoes-dC34tK.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/948347dd-1fbf-49f2-9d03-8868771178e2/revolution-7-road-running-shoes-dC34tK.png",
  },
  {
    id: 2,
    name: "Air Jordan 1 Mid SE",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 12295.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/622aaff1-d6c9-4238-9c21-d01c885eb47a/air-jordan-1-mid-se-shoes-qG5ltp.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ddd5a6a-0353-4fc1-a7f0-25d08fb4d220/air-jordan-1-mid-se-shoes-qG5ltp.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a79bf635-0b4f-4bf9-80b6-43228d1c49de/air-jordan-1-mid-se-shoes-qG5ltp.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/20de9b49-876b-4428-9873-75780a0dd438/air-jordan-1-mid-se-shoes-qG5ltp.png",
  },
  {
    id: 3,
    name: "Jumpman MVP",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 15295.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/6ede48e2-7cfa-4a17-8ccf-f0ae3f851a46/jumpman-mvp-shoes-JV1HCs.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/db118040-245b-42f4-baac-817689e950a3/jumpman-mvp-shoes-JV1HCs.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/632afcc5-6b53-4098-8f8e-32c6ad3e5d7f/jumpman-mvp-shoes-JV1HCs.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/97cabcd2-3ede-4fba-b296-34803908e4ca/jumpman-mvp-shoes-JV1HCs.png",
  },
  {
    id: 4,
    name: "Jordan Max Aura 5",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 11297.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/bd294664-d21a-4b39-86a9-0ee269e51513/jordan-max-aura-5-shoes-ZBZ4Pz.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/069b8be6-0228-4807-8ef8-9e2f6fc38e74/jordan-max-aura-5-shoes-ZBZ4Pz.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a48c0256-aca5-4b73-863c-c54de23f55a3/jordan-max-aura-5-shoes-ZBZ4Pz.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/a4a14f46-9bda-4a69-9a17-08193b011ff5/jordan-max-aura-5-shoes-ZBZ4Pz.png",
  },
  {
    id: 5,
    name: "Nike Air Flight Lite Mid",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 11895.0,
    category: "men",
    subCategory: "nike",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/831167c9-9040-45b8-96ba-79819ab3e628/air-flight-lite-mid-shoe-GrnpgF.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f1b5725e-bbc5-4fb1-8e5e-e4b72a643e1d/air-flight-lite-mid-shoe-GrnpgF.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/3fa9d99b-5a6a-4545-aebe-8424a58d8383/air-flight-lite-mid-shoe-GrnpgF.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/32371bce-4bf6-4e5c-9ff6-8c1f324d2edc/air-flight-lite-mid-shoe-GrnpgF.png",
  },
  {
    id: 6,
    name: "Nike TC 7900",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 10995.0,
    category: "women",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9ecba19c-a2a3-4047-896e-46bbab267521/tc-7900-shoes-S0G9Gn.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/18eeb8ed-c509-439e-982d-ee030ba5d4a9/tc-7900-shoes-S0G9Gn.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/39029296-4157-4077-bb43-a56adb9c2239/tc-7900-shoes-S0G9Gn.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b1161531-176e-44f3-9f6a-ceb07420ddf4/tc-7900-shoes-S0G9Gn.png",
  },
  {
    id: 7,
    name: "Jordan Stadium 90",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 12975.0,
    category: "women",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/e48b21b9-405e-4697-b9b6-b9675a40bb66/jordan-stadium-90-shoes-0cSSz3.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c3b8929c-43da-468b-861e-ee5e963c48c6/jordan-stadium-90-shoes-0cSSz3.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/0e9512c7-a0e5-4692-83f9-0cb7271ac9d0/jordan-stadium-90-shoes-0cSSz3.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/310723e8-1f85-42dc-846b-b592763e795c/jordan-stadium-90-shoes-0cSSz3.png",
  },
  {
    id: 8,
    name: "Air Jordan 1 Elevate High",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 14195.0,
    category: "women",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/61089404-82a0-4adb-a6c2-a88ae94b76c1/air-jordan-1-elevate-high-shoes-rKPNHR.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/5822cb40-e93e-4c15-9b96-3dbd1a24b9c4/air-jordan-1-elevate-high-shoes-rKPNHR.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/32ccdb60-4486-4d12-b6cd-8dbf1f3fd09e/air-jordan-1-elevate-high-shoes-rKPNHR.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco,u_126ab356-44d8-4a06-89b4-fcdcc8df0245,c_scale,fl_relative,w_1.0,h_1.0,fl_layer_apply/c2d2e7de-55b3-4c7d-a6fc-23f4ff975461/air-jordan-1-elevate-high-shoes-rKPNHR.png",
  },
  {
    id: 9,
    name: "Nike MC Trainer 2",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 5695.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d66ea2c4-9886-46f8-9e90-1277a1a70759/mc-trainer-2-workout-shoes-WFVXbk.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/a97f9ed2-67eb-47c7-ac5a-b0703d7daab4/mc-trainer-2-workout-shoes-WFVXbk.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/5d146dd3-5f32-45a7-a2b1-2db39e08e50f/mc-trainer-2-workout-shoes-WFVXbk.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/19d6b5da-778a-44dd-a76d-1f63d34d5583/mc-trainer-2-workout-shoes-WFVXbk.png",
  },
  {
    id: 10,
    name: "Nike Free Metcon 5",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 10257.0,
    category: "women",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9b2ac01d-e0c0-456c-b4c5-079373ce857f/free-metcon-5-workout-shoes-7wNZNf.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7aaafc2c-213e-442b-9d13-430190bbff24/free-metcon-5-workout-shoes-7wNZNf.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/b42aba4c-62dd-471a-a400-d55dbf5a3d4d/free-metcon-5-workout-shoes-7wNZNf.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/8f46fbb6-fd83-46ad-8af3-c516d0f4a209/free-metcon-5-workout-shoes-7wNZNf.png",
  },
  {
    id: 11,
    name: "Forum mid Shoes",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 5499.0,
    category: "men",
    image:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/c9fdf27c73cc481aa8efacb6002c81bc_9366/Forum_Mid_Shoes_White_FY7939_01_standard.jpg",
    image2:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/221b5a079051417a95d7acb6002c6490_9366/Forum_Mid_Shoes_White_FY7939_02_standard_hover.jpg",
    image3:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/f3c373ceeb5f420f9c78acb6002d39b3_9366/Forum_Mid_Shoes_White_FY7939_03_standard.jpg",
    image4:
      "https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/1c0a267a632e45e3abe1acb600270983_9366/Forum_Mid_Shoes_White_FY7939_04_standard.jpg",
  },
  {
    id: 12,
    name: "Nike Pegasus 40",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 11895.0,
    category: "men",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/ac2fa989-e2af-4733-a2c0-0f5311273088/pegasus-40-road-running-shoes-3JpHzl.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/60538b8b-2750-467b-b6f3-6e7606846791/pegasus-40-road-running-shoes-3JpHzl.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/1df4d4cf-fb23-40b0-9617-32be732ca819/pegasus-40-road-running-shoes-3JpHzl.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/d03190f0-7083-4e72-b989-fbf777f1c2e5/pegasus-40-road-running-shoes-3JpHzl.png",
  },
  {
    id: 13,
    name: "Nike SB Dunk High Pro",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 10257.0,
    category: "unisex",
    image:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/6dadd84c-5324-4614-a4f9-1323c9d9f890/sb-dunk-high-pro-skate-shoes-MznD12.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/29195664-e71e-429e-9f38-28b6f37f2bc7/sb-dunk-high-pro-skate-shoes-MznD12.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/f93aaa7a-b5e8-4c09-a40a-badb61a49641/sb-dunk-high-pro-skate-shoes-MznD12.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/88258b95-79f4-4da6-91c3-7f9d98005d81/sb-dunk-high-pro-skate-shoes-MznD12.png",
  },
  {
    id: 14,
    name: "Nike Dunk High Unlocked By You",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 15295.0,
    category: "unisex",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7d522211-0fb4-475c-b593-059b23bc35c6/custom-dunk-high-unlocked-by-you.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/059fcd23-eb54-4e59-a2d3-f2161c2901e4/custom-dunk-high-unlocked-by-you.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/1e57c859-3711-44b7-bbed-55e2f7ab34d5/custom-dunk-high-unlocked-by-you.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/dd2178eb-1720-480e-a4f2-4754ffb85857/custom-dunk-high-unlocked-by-you.png",
  },
  {
    id: 15,
    name: "Nike Dunk High Warped Unlocked",
    description:
      "Things You Need To Know Using advanced edging technology and high-quality materials, our premium sunglasses have a luxurious look and feel with subtly curved lenses. These striking, sophisticated sunglasses offer timeless design updated with shiny gold metal accents at the temples for just a bit of bling. The wide frame...",
    price: 15989.0,
    category: "unisex",
    image:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/b9578781-ca94-4492-a444-efc45d6d487d/custom-dunk-high-unlocked-warped-by-you.png",
    image2:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/7a86598d-a84d-4647-b107-9e1f477f19fe/custom-dunk-high-unlocked-warped-by-you.png",
    image3:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/e57616ea-b6d3-4c33-8ce2-e97f4d36d71b/custom-dunk-high-unlocked-warped-by-you.png",
    image4:
      "https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5/ce4a0110-0ad0-43e1-8622-f7e8b702f8da/custom-dunk-high-unlocked-warped-by-you.png",
  },
];

export default products;
