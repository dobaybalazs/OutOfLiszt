import DefaultList from "../models/defaultlist";
import ListItem from "../models/listitem";
import User from "../models/user";

export const LISTITEMS = [
  new ListItem(
    "i1",
    "Csokoládé",
    "https://i2.wp.com/karissasvegankitchen.com/wp-content/uploads/2019/03/c-vegan-chocolate-bars-4-500x500.jpg",
    "db",
    250,
    "edessegek",
    false
  ),
  new ListItem(
    "i2",
    "Banán",
    "https://m.blog.hu/al/alimento/image/banan_1.jpg",
    "kg",
    600,
    "gyumolcs",
    false
  ),
  new ListItem(
    "i3",
    "Tej",
    "https://cdn.picpng.com/milk/milk-picture-27385.png?fbclid=IwAR07-qjuPoSaXHvMXT1FYtUSgCs2A6DIHjonX8usi15QrFKIFTqsRw5GeVU",
    "l",
    "400",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i4",
    "Tarja",
    "https://lh3.googleusercontent.com/proxy/8yBNyDk2G_Lfqu1nz-TkpZXYFRhNr3TaeOiblX0Uy2uBGp8yekb98QGONEo4U035ViRdUw2G6bOKQhJncVo5JHAXzL555RnzkfanvffR4n-WcwWZK71Ef12MSwUZjsOZAvAEKwHZVcomEPSrJnbgOp4DgHY",
    "db",
    "250",
    "husok",
    true
  ),
  new ListItem(
    "i5",
    "Margarin",
    "https://image-api.nosalty.hu/nosalty/images/ingredients/Zw/vz/6ZKPZ8iabXIkHAL7hJLZslmHCVeRT10zfo0BbhaL.jpeg?w=670&fit=crop&fm=webp&crop=%2C%2C%2C&h=460&s=b5b128e7d269ce2047f63cba5f3d08c1",
    "kg", // 0.5 
    "610",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i6",
    "Túró",
    "https://ocdn.eu/pulscms-transforms/1/xhKktkqTURBXy8zODU0NDBkNjFhNzU5NWZiZDJiZWIwNmZkZDIxMWQ5Yi5qcGVnkpUDACbNBADNAkCVAs0DUgDCww?fbclid=IwAR2AdbS0aXDjSBSPdM0KGS-Brvl3211eDNGExaT_JOl5DmXa05sgLbu6Xns",
    "kg",
    "500",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i7",
    "Vaj",
    "https://freight.cargo.site/i/37cc760e6c63a6591e874bd90c14f5c22afc16b227817a37310aedd4b5a04507/free-png-butter-png-images-transparent-butter-png-850_559.png?fbclid=IwAR31udGoLFe7NLrLufURWM7DiR3JfPOFjMxgJpeRtjjLPkx5CngkNh1QkIs",
    "kg", // 0.1
    "400",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i8",
    "Főzőtejszín",
    "https://media.istockphoto.com/photos/milk-or-cream-jug-isolated-on-white-background-picture-id1131111437?k=20&m=1131111437&s=612x612&w=0&h=023Fm70j1XBqxO6CrH5T9XpqFQD2dJthNThQHWMCSv0%3D&fbclid=IwAR2BtHUjKaJjfYrwD8a3qf6HJwDpWCwRfL-VGYOtjAPKMqN29BpGi0tmJB0",
    "l", // 0.2
    "389",
    "tejtermekek",
    false
  ),
  new ListItem(
    "i9",
    "Habtejszín",
    "https://media.istockphoto.com/photos/milk-or-cream-jug-isolated-on-white-background-picture-id1131111437?k=20&m=1131111437&s=612x612&w=0&h=023Fm70j1XBqxO6CrH5T9XpqFQD2dJthNThQHWMCSv0%3D&fbclid=IwAR2BtHUjKaJjfYrwD8a3qf6HJwDpWCwRfL-VGYOtjAPKMqN29BpGi0tmJB0",
    "l", // 0.2
    "460",
    "tejtermekek",
    false
  ),
  new ListItem(
    "i10",
    "Mascarpone",
    "https://www.justgotochef.com/uploads/1551180535-mascarpone%20cheese%20landing.png?fbclid=IwAR01CiX__U8rT_lvqv2xjPXozZfoY35bjgEn2Bk7qdeIFVGjGGMyk2biDos",
    "kg", // 0.5
    "1300",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i11",
    "Tejföl",
    "https://images.eatthismuch.com/site_media/img/54_erin_m_044fe97f-90c7-4dfb-aaf0-0692a73e6292.png?fbclid=IwAR3VZiWRf5c0iJNw3LZjRp3ZiVbtp6K_T7rnNoHvl0umlJbTJrRrIGT-mfo",
    "l",
    "300",
    "tejtermekek",
    true
  ),
  new ListItem(
    "i12",
    "Tojás",
    "https://www.mindmegette.hu/images/166/O/crop_201609230006_tojas.jpg?fbclid=IwAR30RB3FqthwGj9W_5TOBwHBqj6mZXADvFV-HnV_v_avi_r1wLwwcOm3B_8",
    "db",
    "45",
    "egyéb",
    true
  ),
  new ListItem(
    "i13",
    "Sajt",
    "https://media.istockphoto.com/photos/cheese-on-white-picture-id1127471287?k=20&m=1127471287&s=170667a&w=0&h=md8EzisxLE73EZ2dY_iPkTmtSzgfiTmAwB8jKcW2-7w%3D&fbclid=IwAR2VjK4kl4XoJSPiKwV5BmUcCSCHE3w-L150YNJs60egBm3LlJtsiTS9o5M",
    "kg",
    "1000",
    "tejtermek",
    true
  ),
  new ListItem(
    "i14",
    "Darált sertés",
    "https://grantsofspeyside.co.uk/wp-content/uploads/2016/03/Pork-Mince.jpg?fbclid=IwAR01CiX__U8rT_lvqv2xjPXozZfoY35bjgEn2Bk7qdeIFVGjGGMyk2biDos",
    "kg",
    "1200",
    "husok",
    true
  ),
  new ListItem(
    "i15",
    "Darált marha",
    "https://www.nicepng.com/png/full/161-1611121_ground-beef-beef-mince-minced-beef-and-minced.png?fbclid=IwAR01CiX__U8rT_lvqv2xjPXozZfoY35bjgEn2Bk7qdeIFVGjGGMyk2biDos",
    "kg",
    "2200",
    "husok",
    true
  ),
  new ListItem(
    "i16",
    "Csirkemell",
    "https://chefmarket.hu/public/upload/product_image/13621/13621258/13689/hus1203-csirkemell-file-4kgjpg1056965669.jpg?fbclid=IwAR1O6sf-RnYC6d1PFlPHb2quNEk2H4x8gNtN6ahsZc4MdyA27ckJ7udXp44",
    "kg",
    "1600",
    "husok",
    true
  ),
  new ListItem(
    "i17",
    "Karaj",
    "https://www.baromfiudvar.hu/images/products/906/elohutott-sertes-karaj-csont-nelkul-szeletelt_20190821013622.png?fbclid=IwAR1l4Dd7Rl1IfmSmO5xOXcWsfJXdUnJXRUdjg1TFW9DecTUIGCE2_s2yFt4",
    "kg",
    "1200",
    "husok",
    true
  ),
  new ListItem(
    "i18",
    "Csirke szárny",
    "https://thenaturalk9.co.uk/wp-content/uploads/2020/03/RawChickenWings.jpg?fbclid=IwAR0APTSR372EcvxsEgVGSLjgC7axjhCC0DaNwSGKhFUnoEOeXo5lISW7dr4",
    "kg",
    "700",
    "husok",
    true
  ),
  new ListItem(
    "i19",
    "Csirke comb",
    "https://cdn.mymarket.gr/cdn/farfuture/Gf_EGx3G-CA5PG_9Zn0BcEbDr_ModIfvXF5SLj3oWHY/1623073883/sites/default/files/137706.jpg?fbclid=IwAR1l4Dd7Rl1IfmSmO5xOXcWsfJXdUnJXRUdjg1TFW9DecTUIGCE2_s2yFt4",
    "kg",
    "799",
    "husok",
    true
  ),
  new ListItem(
    "i20",
    "Eper",
    "https://www.spar.hu/content/dam/sparhuwebsite/eletmod/zgy/zgy-kepek17.jpg/_jcr_content/renditions/responsive.665.665.noborder.ba28df3a2fb12e71.jpg?fbclid=IwAR2kE8E3BP5xwv-KzqXAMIlCqFa1iCHG9UbqC5WEDpY94gqm-g0ANkWHkLw",
    "kg",
    "2750",
    "gyumolcs",
    true
  ),
  new ListItem(
    "i21",
    "Saláta",
    "https://chefmarket.hu/public/upload/product_image/11511/11511636/13217/9320-fejessalata-mosottjpg559787761.jpg?fbclid=IwAR1alqgXsdRnk8jre1A65lZLzX0C0BrMgcByO_Lin6c7IsES-Z4Li96KwJs",
    "db",
    "299",
    "zoldseg",
    true
  ),
  new ListItem(
    "i22",
    "Krumpli",
    "https://m.blog.hu/cl/claudiaphotography/postimage/18384_krumpli_1494692991.jpg?fbclid=IwAR34UkSMbm-3plA1T_vvCoTj5nhNg2fvf-Et7TaQyrPi2YF84QiPoR8x65A",
    "kg",
    "325",
    "zoldseg",
    false
  ),
  new ListItem(
    "i23",
    "Narancs",
    "https://static8.depositphotos.com/1020804/884/i/600/depositphotos_8840885-stock-photo-orange-fruits-on-a-white.jpg?fbclid=IwAR1BD2dHl2B2DigySAzCnrqIaVPt3ORKivwvLy_wX0ROrdjkt5QhnnYpEic",
    "kg",
    "599",
    "gyumolcs",
    false
  ),
  new ListItem(
    "i24",
    "Alma",
    "https://chefmarket.hu/public/upload/product_image/9623/9623160/12334/elo1914-piros-almajpg-49999304.jpg?fbclid=IwAR1C62QGj1WCiA4XKLfghX0ECQOdnSE5ZuthqgiHyV40JNR942dBm5dCJnY",
    "kg",
    "249",
    "gyumolcs",
    false
  ),
  new ListItem(
    "i25",
    "Liszt",
    "https://sport8.hu/shop_ordered/7526/pic/tudastar/cikk-kepek/liszt2.jpg?fbclid=IwAR07-qjuPoSaXHvMXT1FYtUSgCs2A6DIHjonX8usi15QrFKIFTqsRw5GeVU",
    "kg",
    "259",
    "egyeb",
    false
  ),
  new ListItem(
    "i26",
    "Cukor",
    "https://brioche.cafeblog.hu/files/2016/07/Sugar-1920.jpg?fbclid=IwAR2VjK4kl4XoJSPiKwV5BmUcCSCHE3w-L150YNJs60egBm3LlJtsiTS9o5M",
    "kg",
    "279",
    "egyeb",
    false
  ),
  new ListItem(
    "i27",
    "Só",
    "https://elsokft.hu/wp-content/uploads/2015/09/adalekmentes.png?fbclid=IwAR3TyV53TaUL4paNzYYMuAJqjKKD9df3dQ9pTqSgMmp25GuQlAZ4O_47dXI",
    "kg",
    "319",
    "egyeb",
    false
  ),
  new ListItem(
    "i28",
    "Citrom",
    "http://mentalfitnessguru.hu/wp-content/uploads/2018/11/citron.jpg?fbclid=IwAR3afkwH8K0T6rg7svw8mSXpBFTwlezjPeVYw04e6kacdjqNxgacg3nARNY",
    "kg",
    "699",
    "gyumolcs",
    false
  ),
  new ListItem(
    "i29",
    "Répa",
    "https://www.kifli.hu/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.kifli.hu/images/grocery/products/24310/24310-1579174220.jpg?fbclid=IwAR0LNwcl0OqUL72t1dWYvjJNtHutgxM7dsr9gCp0ksyadI_K2UNVs_0ZFiU",
    "kg",
    "169",
    "zoldseg",
    false
  ),
  new ListItem(
    "i30",
    "Kígyóuborka",
    "https://www.gyulaihirlap.hu/download.fcgi/14056_2_1_uborka.jpg?fbclid=IwAR3BYK6pusFcar_KokvAmVrLfxvH8Df63DrduS0B35A1rv1F4S_mxym6kcs",
    "db",
    "299",
    "zoldseg",
    true
  ),
  new ListItem(
    "i31",
    "Sütőtök",
    "https://lh3.googleusercontent.com/proxy/lFjZzK9yQNjF6OgoePBsXQ4vjWIZuvytRMG3JJZsvOl7LbmsDj1NtDBZAtpQgdM0vIGSB79ilMyYeiGAD7hQ8iZN5_l7cYAIKT3zKA?fbclid=IwAR1vJR2-Za518HhQ1WYg8-pQN3sPsRfSqVPY1N0zeZ6rnFGgz5MoHXyCJ4E",
    "kg",
    "540",
    "gyumolcs",
    false
  ),
  new ListItem(
    "i32",
    "Őszibarack",
    "https://www.zoldsegexpress.hu/wp-content/uploads/2020/04/barack-oszi-oszibarack-gyumolcsok-zoldsegexpress.jpg?fbclid=IwAR0LNwcl0OqUL72t1dWYvjJNtHutgxM7dsr9gCp0ksyadI_K2UNVs_0ZFiU",
    "kg",
    "575",
    "gyumolcs",
    true
  ),
  new ListItem(
    "i33",
    "Nektarin",
    "http://www.zoldstudio.viragcenter.hu/kert/nektarin2.jpg?fbclid=IwAR34UkSMbm-3plA1T_vvCoTj5nhNg2fvf-Et7TaQyrPi2YF84QiPoR8x65A",
    "kg",
    "695",
    "gyumolcs",
    true
  ),
  new ListItem(
    "i34",
    "Dinnye",
    "https://media.borsonline.hu/cikk/19/184459/big-lead/650x360/1920214_dinnye.jpg?fbclid=IwAR3BYK6pusFcar_KokvAmVrLfxvH8Df63DrduS0B35A1rv1F4S_mxym6kcs",
    "kg",
    "170",
    "gyumolcs",
    true
  ),
  new ListItem(
    "i35",
    "Kaliforniai paprika",
    "https://lh3.googleusercontent.com/proxy/l4_5j6dS2TDBBbWA2j6QzsJWsUMmBZvtcZFFs-b2o-Jk-gU4LtBIZBzjIZcwOiL7KK9wDWSjJPiQeP1cRSNdGZVJZYkEmRIyylVmZtx480FvwRAsFEj-?fbclid=IwAR1BD2dHl2B2DigySAzCnrqIaVPt3ORKivwvLy_wX0ROrdjkt5QhnnYpEic",
    "kg",
    "1000",
    "zoldseg",
    true
  ),
  new ListItem(
    "i36",
    "Virsli",
    "https://media.borsonline.hu/cikk/20/195132/big-lead/650x360/2061247_shutterstock-1454814029.jpg?fbclid=IwAR01CiX__U8rT_lvqv2xjPXozZfoY35bjgEn2Bk7qdeIFVGjGGMyk2biDos",
    "db",
    "500",
    "husok",
    true
  ),
  new ListItem(
    "i37",
    "Csiperke gomba",
    "https://www.kifli.hu/cdn-cgi/image/f=auto,w=500,h=500/https://cdn.kifli.hu/images/grocery/products/36235/36235-1585037345.jpg?fbclid=IwAR0l_PES16s-PA1dwBv289ts6tRCnISOdcpdGqxGtRCgBz28vHphuqGvvz8",
    "kg",
    "1200",
    "zoldseg",
    true
  ),
  new ListItem(
    "i38",
    "Paprika",
    "https://lh3.googleusercontent.com/proxy/9HxzfMuKuVSRQCex5u-C5llSmmcL-AXnpl9w6qdhbuYk5mKzZBM7Wp1IhR8lhPQYkEVF3gHx740dtUiUWVdNR5OKfOxhk9nlQekHNSLF?fbclid=IwAR3sR4X6E_pNlY9xHXZufYZq3kFa2SJOESycVsJ8QiZS5gJ9NVopflaZoes",
    "kg",
    "800",
    "zoldseg",
    true
  ),
];
export const USERS = [
  new User(
    "u1",
    "Molnár Ákos",
    "testvér",
    "https://kep.cdn.index.hu/1/0/723/7234/72345/7234513_ca4a011d0d0e254a0cb1b0897055d8be_wm.jpg",
    25,
    "male"
  ),
  new User(
    "u2",
    "Molnár Tamara",
    "nővér",
    "https://static.marquardmedia.hu/data/cikk/234/234174-hedinke-szabo-hedi.640.jpg",
    17,
    "female"
  ),
];

export const DEFAULTLIST = [
  new DefaultList(
    "l1",
    "Ünnepi ebéd",
    ["i1", "i2", "i3", "i4"],
    ["u1"],
    "red",
    "Április 15"
  ),
  new DefaultList(
    "l2",
    "Ünnepi vacsora",
    ["i1", "i2", "i3"],
    ["u1", "u2"],
    "green",
    "Április 16"
  ),
  new DefaultList(
    "l3",
    "Ünnepi reggeli",
    ["i1", "i3", "i4"],
    ["u2"],
    "blue",
    "Március 15"
  ),
];
