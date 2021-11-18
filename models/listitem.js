class ListItem {
  constructor(id, name, img, unit, price, categoryId, coldStorage, itemCount) {
    this.id = id;
    this.name = name;
    this.img = img;
    this.unit = unit;
    this.price = price;
    this.categoryId = categoryId;
    this.coldStorage = coldStorage;
    this.itemCount = itemCount;
  }
}

export default ListItem;
