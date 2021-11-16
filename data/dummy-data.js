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
    "https://www.heritagefoods.in/blog/wp-content/uploads/2020/12/shutterstock_539045662.jpg",
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
